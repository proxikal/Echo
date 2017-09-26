function GetPermByName(name) {
	switch(name.toLowerCase()) {
		case "administrator":
			return 8;
		case "manage server":
			return 268435456;
		case "kick":
			return 2;
		case "create instant invite":
			return 1;
		case "manage nicknames":
			return 134217728;
		case "manage server":
			return 32;
		case "manage channels":
			return 16;
		case "ban":
			return 4;
		case "change nickname":
			return 67108864;
		case "manage webhooks":
			return 536870912;
		case "manage emojis":
			return 1073741824;
		case "view audit log":
			return 128;
		case "view channel":
			return 1024;
		case "send tts messages":
			return 4096;
		case "embed links":
			return 16384;
		case "read message histoy":
			return 65536;
		case "use external emojis":
			return 262144;
		case "send messages":
			return 2048;
		case "manage messages":
			return 8192;
		case "attach files":
			return 32768;
		case "mention everyone":
			return 131072;
		case "add reactions":
			return 64;
		case "connect":
			return 1048576;
		case "mute members":
			return 4194304;
		case "move members":
			return 16777216;
		case "speak":
			return 2097152;
		case "deafen members":
			return 8388608;
		case "use voice activity":
			return 33554432;
		default:
			return 0;

	}
}

function RoleHasPermission(role, perm) {
	var bit = GetPermByName(perm);
    for(i = 0; i < ServerRoles.length; i++) {
    	var ctx = ServerRoles[i];
    	if(ctx.Name == role) {
	    	var p = ctx.Permissions & bit;
	    	if(p > 0) {
	    		return true
	    	}
    	}
    }
    return false;
}
