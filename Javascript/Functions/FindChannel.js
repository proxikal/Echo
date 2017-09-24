function FindChannel(channel) {
  for (i = 0; i < ServerChannels.length; i++) {
    if(channel == ServerChannels[i].Name) {
      return true;
    }
  }
  return false;
}
