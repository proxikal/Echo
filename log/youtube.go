
func Youtube(s *discordgo.Session, guildID string, channelID string, thesong string) error {
	vc, err := s.ChannelVoiceJoin(guildID, channelID, false, true)
	if err != nil {
		return err
	}
	ytdl := exec.Command("youtube-dl", "-v", "-f", "bestaudio", "-o", "-", thesong)
	ytdlout, err := ytdl.StdoutPipe()
	if err != nil {
		// log.Println("musicplugin: ytdl StdoutPipe err:", err)
		fmt.Println(err)
		return err
	}
	ytdlbuf := bufio.NewReaderSize(ytdlout, 16384)

	ffmpeg := exec.Command("ffmpeg", "-i", "pipe:0", "-f", "s16le", "-ar", "48000", "-ac", "2", "pipe:1")
	ffmpeg.Stdin = ytdlbuf
	ffmpegout, err := ffmpeg.StdoutPipe()
	if err != nil {
		// log.Println("musicplugin: ffmpeg StdoutPipe err:", err)
		fmt.Println(err)
		return err
	}
	ffmpegbuf := bufio.NewReaderSize(ffmpegout, 16384)

	dca := exec.Command("dca-rs", "-raw", "-i", "pipe:0")
	dca.Stdin = ffmpegbuf
	dcaout, err := dca.StdoutPipe()
	if err != nil {
		// log.Println("musicplugin: dca StdoutPipe err:", err)
		fmt.Println(err)
		return err
	}
	dcabuf := bufio.NewReaderSize(dcaout, 16384)

	err = ytdl.Start()
	if err != nil {
		//log.Println("musicplugin: ytdl Start err:", err)
		fmt.Println(err)
		return err
	}
	defer func() {
		go ytdl.Wait()
	}()

	err = ffmpeg.Start()
	if err != nil {
		// log.Println("musicplugin: ffmpeg Start err:", err)
		fmt.Println(err)
		return err
	}
	defer func() {
		go ffmpeg.Wait()
	}()

	err = dca.Start()
	if err != nil {
		// log.Println("musicplugin: dca Start err:", err)
		fmt.Println(err)
		return err
	}
	defer func() {
		go dca.Wait()
	}()

	// header "buffer"
	var opuslen int16

	// Send "speaking" packet over the voice websocket
	vc.Speaking(true)

	// Send not "speaking" packet over the websocket when we finish
	defer vc.Speaking(false)

	// start := time.Now()
	for {
		// read dca opus length header
		err = binary.Read(dcabuf, binary.LittleEndian, &opuslen)
		if err == io.EOF || err == io.ErrUnexpectedEOF {
			fmt.Println(err)
			return err
		}
		if err != nil {
			// log.Println("musicplugin: read opus length from dca err:", err)
			fmt.Println(err)
			return err
		}

		// read opus data from dca
		opus := make([]byte, opuslen)
		err = binary.Read(dcabuf, binary.LittleEndian, &opus)
		if err == io.EOF || err == io.ErrUnexpectedEOF {
			return err
		}
		if err != nil {
			fmt.Println(err)
			// log.Println("musicplugin: read opus from dca err:", err)
			return err
		}

		// Send received PCM to the sendPCM channel
		vc.OpusSend <- opus
		// TODO: Add a select and timeout to above
		// shouldn't ever block longer than maybe 18-25ms

		// this can cause a panic if vc becomes nil while waiting to send
		// on the opus channel. TODO fix..
		// vc.playing.Remaining = (vc.playing.Duration - int(time.Since(start).Seconds()))

	}
}
