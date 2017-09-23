function FindRole(role) {
  for(i = 0; i < Server.Roles.length; i++) {
    if(role == Server.Roles[i]) {
      return true;
    }
  }
  return false;
}
