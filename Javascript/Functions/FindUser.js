function FindUser(user) {
  for(i = 0; i < Server.Members.length; i++) {
    if(user == Server.Members[i].User.Username) {
      return true;
    }
  }
  return false;
}
