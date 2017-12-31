function commafy(inVal){
	var returnNum;
	if(inVal != null) {
	   	var dat = inVal.toString();
	   	var arrTheNumber = dat.split("").reverse();
	   	var newNum = Array();
	   	for(var i=0; i<arrTheNumber.length; i++){
	        newNum[newNum.length] = ((i%3===2) && (i<arrTheNumber.length-1)) ? "," + arrTheNumber[i]: arrTheNumber[i];
	   	}
	   	returnNum = newNum.reverse().join("");
	} else {
		returnNum = inVal;
	}
   return returnNum;
}
function HunterFormulaBonus(theHunt) {
	var fireDragons = 0,
		waterDragons = 0,
		grassDragons = 0,
		rockDragons = 0,
		steelDragons = 0,
		lightDragons = 0,
		darkDragons = 0;

	for(var i = 0; i < theHunt.Users.length; i++) {
		if(GetDragon(theHunt.Users[i]).Stats.Type == "Fire") { fireDragons++; }
		if(GetDragon(theHunt.Users[i]).Stats.Type == "Water") { waterDragons++; }
		if(GetDragon(theHunt.Users[i]).Stats.Type == "Grass") { grassDragons++; }
		if(GetDragon(theHunt.Users[i]).Stats.Type == "Rock") { rockDragons++; }
		if(GetDragon(theHunt.Users[i]).Stats.Type == "Steel") { steelDragons++; }
		if(GetDragon(theHunt.Users[i]).Stats.Type == "Light") { lightDragons++; }
		if(GetDragon(theHunt.Users[i]).Stats.Type == "Dark") { darkDragons++; }
	}
	var owner = GetDragon(theHunt.Owner);
	if(owner.Stats.Type == "Fire") { fireDragons++; }
	if(owner.Stats.Type == "Water") { waterDragons++; }
	if(owner.Stats.Type == "Grass") { grassDragons++; }
	if(owner.Stats.Type == "Rock") { rockDragons++; }
	if(owner.Stats.Type == "Steel") { steelDragons++; }
	if(owner.Stats.Type == "Light") { lightDragons++; }
	if(owner.Stats.Type == "Dark") { darkDragons++; }
	
	// Formula Section
	// -------
	// Fire = Attack, Speed
	// Grass = Defense, Health
	// Water = Speed, Attack
	// Steel = Speed, Defense
	// Light = Health, Speed
	// Dark = Attack, Health
	// Rock = Health, Defense

	var ref = {Attack: 0, Defense: 0, Health: 0, Speed: 0};
	for(var i = 0; i < fireDragons.length; i++) { ref.Attack += Math.floor(Math.random() * 3) + 1; ref.Speed += Math.floor(Math.random() * 3) + 1; }
	for(var i = 0; i < grassDragons.length; i++) { ref.Defense += Math.floor(Math.random() * 3) + 1; ref.Health += Math.floor(Math.random() * 3) + 1; }
	for(var i = 0; i < waterDragons.length; i++) { ref.Attack += Math.floor(Math.random() * 3) + 1; ref.Speed += Math.floor(Math.random() * 3) + 1; }
	for(var i = 0; i < steelDragons.length; i++) { ref.Defense += Math.floor(Math.random() * 3) + 1; ref.Speed += Math.floor(Math.random() * 3) + 1; }
	for(var i = 0; i < lightDragons.length; i++) { ref.Health += Math.floor(Math.random() * 3) + 1; ref.Speed += Math.floor(Math.random() * 3) + 1; }
	for(var i = 0; i < darkDragons.length; i++) { ref.Attack += Math.floor(Math.random() * 3) + 1; ref.Health += Math.floor(Math.random() * 3) + 1; }
	for(var i = 0; i < rockDragons.length; i++) { ref.Health += Math.floor(Math.random() * 3) + 1; ref.Defense += Math.floor(Math.random() * 3) + 1; }
	return ref;
}
function Pagination(page, totalPages, perPage, obj) {
    if(page < 1) { page = 1; }
    var rObj = {
        Info: "",
        List: []
    };
    var start = (page - 1) * perPage;
    var end = obj.length;
    if(start < obj.length) {
        end = perPage * page;
    }
    if(end > obj.length) {
        end = obj.length;
    }
    rObj.Start = start;
    rObj.End = end;
    rObj.Info = start + " to " + end + " items out of (" + obj.length + ")";
    return rObj;
}
    
function IsAddressStaff(user) {
    var addr = Address();
    for(i = 0; i < addr.Staff.length; i++) {
        if(addr.Staff[i] == user) {
            return true;
        }
    }
    if(addr.OwnerID == user) {
        return true;
    }
    return false;
}
function GetTimerInfo(inf, find) {
    for(var e = 0; e < inf.length; e++) {
        if(inf[e] == find) {
            var ref = {
                ID: e,
                Timestamp: inf[e]
            };
            return ref;
        }
    }
}
function HasMaxStats(dragon) {
    var add = dragon.Stats.Attack + dragon.Stats.Defense + dragon.Stats.Health + dragon.Stats.Speed;
    if(add >= parseInt(DragonWars["statLimit"])) {
        return true;
    }
    return false;
}
function ComputeStatsToLimit(dragon) {
    var add = dragon.Stats.Attack + dragon.Stats.Defense + dragon.Stats.Health + dragon.Stats.Speed;
    var limit = DragonWars["statLimit"];
    var diff = limit - add;
    return diff;
}
function GetDragonByName(name) {
    for(var usr in DragonWars) {
        if(usr.length > 10 && !Contains(usr, "-")) {
            var obj = JSON.parse(DragonWars[usr]);
            if(obj.Dragon != null) {
                if(obj.Dragon.Name == name) {
                    return obj;
                }
                if(obj.Stables != null) {
                    if(obj.Stables.length > 0) {
                        for(i = 0; i < obj.Stables.length; i++) {
                            if(obj.Stables[i].Name == name) {
                                var uobj = {};
                                uobj.Dragon = obj.Stables[i];
                                return uobj;
                            }
                        }
                    }
                }
            }
        }
    }
}
function GetDragonByID(id) {
  for(var usr in DragonWars) {
    if(usr.length > 10 && !Contains(usr, "-")) {
      var obj = JSON.parse(DragonWars[usr]);
      if(obj.Dragon != null) {
        if(obj.Dragon.ID == id) {
          return obj;
        }
        if(obj.Stables != null) {
          if(obj.Stables.length > 0) {
            for(var i = 0; i < obj.Stables.length; i++) {
              if(obj.Stables[i].ID == id) {
                var uobj = {};
                uobj.Dragon = obj.Stables[i];
                return uobj;
              }
            }
          }
        }
      }
    }
  }
}
function GetDragonOwner(name) {
    for(var usr in DragonWars) {
        if(usr.length > 10 && !Contains(usr, "-")) {
            var obj = JSON.parse(DragonWars[usr]);
            if(obj.Dragon != null) {
                if(obj.Dragon.Name == name) {
                    return usr;
                }
                if(obj.Stables != null) {
                    if(obj.Stables.length > 0) {
                        for(i = 0; i < obj.Stables.length; i++) {
                            if(obj.Stables[i].Name == name) {
                                return usr;
                            }
                        }
                    }
                }
            }
        }
    }
}
function GetDragonName(user) {
    var usr = JSON.parse(DragonWars[user]);
    return usr.Dragon.Name;
}
function HasHuntersWings(user, hunt) {
    var data = "";
    var hasHuntersWings = false;

    var obj = JSON.parse(DragonWars[user]);
    for(i = 0; i < obj.Timers.length; i++) {
        if(obj.Timers[i]["HuntersWings"]) {
            var now = Math.floor(Date.now() / 1000);
            var timeLeft = obj.Timers[i]["HuntersWings"];
            if(now < timeLeft) {
                hasHuntersWings = true;
            }
        }
    }
    if(hasHuntersWings == false && hunt != null) {
        for(var u = 0; u < hunt.Users.length; u++) {
            var usr = JSON.parse(DragonWars[hunt.Users[u]]);
            if(usr.Timers.length > 0) {
                for(t = 0; t < usr.Timers.length; t++) {
                    if(usr.Timers[t]["HuntersWings"]) {
                        var now = Math.floor(Date.now() / 1000);
                        var timeLeft = usr.Timers[t]["HuntersWings"];
                        if(now < timeLeft) {
                            hasHuntersWings = true;
                        }
                    }
                }
            }
        }
    }
    return hasHuntersWings;
}

function sortObject(o) {
    var sorted = {},
    key, a = [];

    for (key in o) {
        if (o.hasOwnProperty(key)) {
            a.push(key);
        }
    }

    a.sort();

    for (key = 0; key < a.length; key++) {
        sorted[a[key]] = o[a[key]];
    }
    return sorted;
}
function Field() {
    var field = {
        "name": "",
        "value": "",
        "inline": true
    };
    return field;
}
function GetTheHunt(user, obj) {
    for(var i = 0; i < obj.length; i++) {
        for(var u = 0; u < obj[i].Users.length; u++) {
            if(obj[i].Users[u] == user) {
                return obj[i];
            }
        }
    }
}
function UsersStartHunt(hunt, obj, stamp) {
    for(var i = 0; i < obj.Users.length; i++) {
        var usr = JSON.parse(DragonWars[obj.Users[i]]);
        if(usr.Timers == null) { usr.Timers = new Array(); }
        usr.Timers.push(hunt);
        usr.Hunting = true;
        DragonWars[obj.Users[i] + "-hunting"] = seconds + "s";
        DragonWars[obj.Users[i]] = JSON.stringify(usr);
    }
}
function BonusByUsers(hunts) {
    var batt = 0;
    var bdef = 0;
    var bhlt = 0;
    var bspd = 0;
    var bexp = 0;
    for(var b = 0; b < hunts.Users.length; b++) {
        var drag = GetDragon(hunts.Users[b]);
        if(drag != null) {
            if(drag.Stats.Attack >= 500 || drag.Stats.Def >= 500 || drag.Stats.Health >= 500) {
                batt += 2.85;
                bdef += 2.85;
                bhlt += 2.85;
                bspd += 2.85;
                bexp += 1;
            }
            if(drag.Stats.Attack >= 400 || drag.Stats.Def >= 400 || drag.Stats.Health >= 400) {
                batt += 1.85;
                bdef += 1.85;
                bhlt += 1.85;
                bspd += 1.85;
                bexp += 1;
            }
            if(drag.Stats.Attack >= 320 || drag.Stats.Def >= 320 || drag.Stats.Health >= 320) {
                batt += 1.45;
                bdef += 1.45;
                bhlt += 1.45;
                bspd += 1.45;
                bexp += 1;
            }
            if(drag.Stats.Attack >= 100 || drag.Stats.Def >= 100 || drag.Stats.Health >= 100) {
                batt += 1;
                bdef += 1;
                bhlt += 1;
                bexp += 1;
                bspd += 1;
            }
            if(drag.Stats.Attack <= 100 || drag.Stats.Def <= 100 || drag.Stats.Health <= 100) {
                batt += 0.75;
                bdef += 0.75;
                bhlt += 0.75;
                bspd += 0.75;
                bexp += 1;
            }
        }
    }
    var ref = {
        Attack: batt,
        Defense: bdef,
        Health: bhlt,
        Speed: bspd,
        Exp: bexp
    };
    return ref;
}
function GetHuntStatRewards() {
    var atk = 0;
    var def = 0;
    var hlth = 0;
    var spd = 0;
    var cash = 0;
    var exp = 0;
    var tokens = 0;

    if(Math.random() < 0.55) {
        atk = (Math.floor(Math.random() * 5) + 1);
        def = (Math.floor(Math.random() * 5) + 1);
        hlth = (Math.floor(Math.random() * 5) + 1);
        spd = (Math.floor(Math.random() * 5) + 1);
        cash = Math.floor(Math.random() * 10000) + 1000;
        exp = Math.floor(Math.random() * 8500) + 1000;
        tokens = Math.floor(Math.random() * 15) + 1;
    }
    if(Math.random() < 0.45) {
        atk = (Math.floor(Math.random() * 7) + 2);
        def = (Math.floor(Math.random() * 7) + 2);
        hlth = (Math.floor(Math.random() * 7) + 2);
        spd = (Math.floor(Math.random() * 7) + 2);
        cash = Math.floor(Math.random() * 13500) + 1000;
        exp = Math.floor(Math.random() * 9250) + 1000;
        tokens = Math.floor(Math.random() * 20) + 1;
    }

    if(Math.random() < 0.25) {
        atk = (Math.floor(Math.random() * 10) + 3);
        def = (Math.floor(Math.random() * 10) + 3);
        hlth = (Math.floor(Math.random() * 10) + 3);
        spd = (Math.floor(Math.random() * 10) + 3);
        tokens = Math.floor(Math.random() * 10) + 1;
        cash = Math.floor(Math.random() * 25000) + 1000;
        exp = Math.floor(Math.random() * 10000) + 1000;
    }
    if(Math.random() < 0.15) {
        atk = (Math.floor(Math.random() * 14) + 4);
        def = (Math.floor(Math.random() * 14) + 4);
        hlth = (Math.floor(Math.random() * 14) + 4);
        spd = (Math.floor(Math.random() * 14) + 4);
        tokens = Math.floor(Math.random() * 25) + 2;
        cash = Math.floor(Math.random() * 25000) + 1000;
        exp = Math.floor(Math.random() * 10000) + 1000;
    }
    if(Math.random() < 0.1) {
        atk = (Math.floor(Math.random() * 20) + 5);
        def = (Math.floor(Math.random() * 20) + 5);
        hlth = (Math.floor(Math.random() * 20) + 5);
        spd = (Math.floor(Math.random() * 20) + 5);
        tokens = Math.floor(Math.random() * 28) + 2;
        cash = Math.floor(Math.random() * 25000) + 1000;
        exp = Math.floor(Math.random() * 10000) + 1000;
    }
    if(Math.random() > 0.55) {
        atk = (Math.floor(Math.random() * 6) + 1);
        def = (Math.floor(Math.random() * 6) + 1);
        hlth = (Math.floor(Math.random() * 6) + 1);
        spd = (Math.floor(Math.random() * 6) + 1);
        cash = Math.floor(Math.random() * 10000) + 1000;
        exp = Math.floor(Math.random() * 8500) + 1000;
        tokens = Math.floor(Math.random() * 5) + 2;
    }
    var ref = {
        Attack: atk,
        Defense: def,
        Health: hlth,
        Speed: spd,
        Cash: cash,
        Exp: exp,
        Tokens: tokens
    };
    return ref;
}
function GetDragon(user) {
    var usr = JSON.parse(DragonWars[user]);
    return usr.Dragon;
}
