var tag = document.createElement('script');
		tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tv,
		playerDefaults = {autoplay: 0, autohide: 1, loop: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3};
var vid = [
			{'videoId': 'lFRjPE2KOHY', 'startSeconds': 0, 'endSeconds': 35, 'suggestedQuality': 'hd720'}
		],
		randomVid = Math.floor(Math.random() * vid.length),
    currVid = randomVid;

$('.header em:last-of-type').html(vid.length);

function onYouTubePlayerAPIReady(){
  tv = new YT.Player('tv', {events: {'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange}, playerVars: playerDefaults});
}

function onPlayerReady(){
  tv.loadVideoById(vid[currVid]);
  tv.mute();
}

function onPlayerStateChange(e) {
  if (e.data === 1){
    $('#header').addClass('active');
    $('.header em:nth-of-type(2)').html(currVid + 1);
  } else if (e.data === 2){
    $('#header').removeClass('active');
    if(currVid === vid.length - 1){
      currVid = 0;
    } else {
      currVid++;  
    }
    tv.loadVideoById(vid[currVid]);
    tv.seekTo(vid[currVid].startSeconds);
  }
}

function vidRescale(){

  var w = 500,
    h = 325;

  if (w/h > 16/9){
    tv.setSize(w, w/16*9);
    $('.header .screen').css({'left': '0px'});
  } else {
    tv.setSize(h/9*16, h);
    $('.header .screen').css({'left': -($('.header .screen').outerWidth()-w)/2});
  }
}

$(window).on('load resize', function(){
  vidRescale();
});

$('.header span:first-of-type').on('click', function(){
  $('#header').toggleClass('mute');
  $('.header em:first-of-type').toggleClass('hidden');
  if($('#header').hasClass('mute')){
    tv.mute();
  } else {
    tv.unMute();
  }
});

$('.header span:last-of-type').on('click', function(){
  $('.header em:nth-of-type(2)').html('~');
  tv.pauseVideo();
});
