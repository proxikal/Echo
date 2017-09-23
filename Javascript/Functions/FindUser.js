function FindUser(user) {
  for(i = 0; i < Server.Members.length; i++) {
    if(user == Server.Members[i]) {
      return true;
    }
  }
  return false;
}
