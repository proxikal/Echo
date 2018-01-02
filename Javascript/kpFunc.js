var returnData = {
	Code: 0,
	Msg: ""
};
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
function Random(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
function Now() {
	return Math.floor(Date.now() / 1000);
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
function CalculateAwayTeam(user) {
	if(Kingpin[user]) {
		var obj = JSON.parse(Kingpin[user]);
		var att = 0;
		var hlt = 0;
		var spd = 0;
		for(var i = 0; i < obj.AwayTeam.length; i++) {
			if(obj.AwayTeam[i].Type == "Attack") {
				att += obj.AwayTeam[i].Amount;
			}
			if(obj.AwayTeam[i].Type == "Health") {
				hlt += obj.AwayTeam[i].Amount;
			}
			if(obj.AwayTeam[i].Type == "Speed") {
				spd += obj.AwayTeam[i].Amount;
			}
		}
		var ref = {
			Attack: att,
			Health: hlt,
			Speed: spd
		};
		return ref;
	}
}
function CalculateGang(user) {
	if(Kingpin[user]) {
		var obj = JSON.parse(Kingpin[user]);
		var att = 0;
		var hlt = 0;
		var spd = 0;
		for(var i = 0; i < obj.Gang.length; i++) {
			if(obj.Gang[i].Type == "Attack") {
				att += obj.Gang[i].Amount;
			}
			if(obj.Gang[i].Type == "Health") {
				hlt += obj.Gang[i].Amount;
			}
			if(obj.Gang[i].Type == "Speed") {
				spd += obj.Gang[i].Amount;
			}
		}
		var ref = {
			Attack: att,
			Health: hlt,
			Speed: spd
		};
		return ref;
	}
}
function AddToAwayTeam(user, mid) { // mid = gang members id
	if(Kingpin[user]) {
		var obj = JSON.parse(Kingpin[user]);
		if(obj.AwayTeam.length < 5) {
			for(var i = 0; i < obj.Gang.length; i++) {
				if(obj.Gang[i].ID == mid) {
					obj.AwayTeam.push(obj.Gang[i]);
					obj.Gang.splice(i, 1);
					break;
				}
			}
		}
		Kingpin[user] = JSON.stringify(obj);
	}
}
function TakeFromAwayTeam(user, mid) {
	if(Kingpin[user]) {
		var obj = JSON.parse(Kingpin[user]);
		for(var i = 0; i < obj.AwayTeam.length; i++) {
			if(obj.AwayTeam[i].ID == mid) {
				obj.Gang.push(obj.AwayTeam[i]);
				obj.AwayTeam.splice(i, 1);
			}
		}
		Kingpin[user] = JSON.stringify(obj);
	}
}
function DestroyGangMember(user, mid) {
	if(Kingpin[user]) {
		var obj = JSON.parse(Kingpin[user]);
		for(var i = 0; i < obj.Gang.length; i++) {
			if(obj.Gang[i].ID == mid) {
				obj.Gang.splice(i, 1);
				break;
			}
		}
		Kingpin[user] = JSON.stringify(obj);
	}
}
function DestroyAwayMember(user, mid) {
	if(Kingpin[user]) {
		var obj = JSON.parse(Kingpin[user]);
		for(var i = 0; i < obj.AwayTeam.length; i++) {
			if(obj.AwayTeam[i].ID == mid) {
				obj.AwayTeam.splice(i, 1);
				break;
			}
		}
		Kingpin[user] = JSON.stringify(obj);
	}
}
function MakeGangMember(user, price) {
	// Bigger amount of stocks will offer better gang members.
	// Stocks that cost more will also boost the possibility of better gang members.
	var names = ["Gianpietro Menta", "Noah Patania", "Jorge Di Guglielmo", "Coreno Capano", "Jovan Pinta", "Flavio Beaman", "Connor Hillard", "Agenore Follen", "Taziano Root", "Darien Shadd", "Rose D'Arienzo", "Rhiannon Ferri", "Michaela Simonetta", "Delilah Laurenzo", "Claudia Gruttadauria", "Journey Schofield", "Skye Hillock", "Tayler Newark", "Kenna Beeley", "Veriana Voshall", "Alexander Badolato", "Darion Rosini", "Eddy Bolio", "Maxwell Somma", "Bryant Tenore", "Maurice Register", "Nigel Benbrook", "Socrate Dunnington", "Taylor Ansel", "Cino Cockfield", "Joey The Rat", "Butterknife Tim", "Sammy The Tank", "Louie The Ham"];
	if(Kingpin[user]) {
		var obj = JSON.parse(Kingpin[user]);
		var isBought = true;
		if(price == 0) {
			isBought = false;
		}
		if(isBought == true && obj.Cash < price) {
			returnData.Code = 105;
			returnData.Msg = "Insufficient funds available for this purchase.";
			return returnData;
		}
		var nL = Math.floor(Math.random() * names.length);
		var type = ["Attack", "Health", "Speed"];
		var tL = Math.floor(Math.random() * type.length);

		obj.LastGangID += 1;
		var max = 3;
		if(obj.Stocks.length > 10) { max = 4; }
		if(obj.Stocks.length > 15) { max = 5; }
		if(obj.Stocks.length > 20) { max = 6; }
		if(obj.Stocks.length > 25) { max = 7; }
		if(obj.Stocks.length > 30) { max = 8; }
		if(obj.Stocks.length > 40) { max = 9; }
		if(obj.Stocks.length > 50) { max = 10; }
		if(obj.Stocks.length > 60) { max = 11; }
		if(obj.Stocks.length > 70) { max = 12; }
		if(obj.Stocks.length > 80) { max = 13; }
		if(obj.StockPrice > 1500) { max += 1; }
		if(obj.StockPrice > 2250) { max += 2; }
		if(obj.StockPrice > 3500) { max += 3; }
		if(obj.StockPrice > 4500) { max += 4; }
		if(obj.StockPrice > 5285) { max += 5; }
		if(obj.StockPrice > 7500) { max += 6; }
		if(obj.StockPrice > 25000) { max += 7; }
		if(obj.StockPrice > 48500) { max += 8; }
		if(obj.StockPrice > 68000) { max += 9; }
		var amount = Math.floor(Math.random() * max) + 1;
		var member = {
			ID: obj.LastGangID,
			Name: names[nL],
			Type: type[tL],
			Amount: amount
		};
		if(isBought) { obj.Cash -= price; }
		obj.Gang.push(member);
		Kingpin[user] = JSON.stringify(obj);
		return returnData;
	}
}
function ChangeCompanyName(user, name) {
	if(Kingpin[user]) {
		if(CompanyExists(name) == false) {
			var obj = JSON.parse(Kingpin[user]);
			if(Now() >= obj.Cooldowns.CompanyRename) {
				obj.Company = name;
				Kingpin[user] = JSON.stringify(obj);
				return returnData;
			} else {
				returnData.Code = 301;
				returnData.Msg = "You have to wait " + (obj.Cooldowns.CompanyRename - Now()) + " seconds.";
				return returnData;
			}
		} else {
			returnData.Code = 400;
			returnData.Msg = "Company Name already exists.";
			return returnData;
		}
	} else {
		returnData.Code = 402;
		returnData.Msg = "User doesn't exist";
		return returnData;
	}
}
function RegisterUser(user, company) {
	if(!Kingpin[user]) {
		var newUser = {};
		newUser.User = user;
		newUser.Cash = 9500;
		newUser.Bank = 0;
		newUser.Company = company;
		newUser.Cooldowns = {DealerRefresh:0,CompanyRename:0,PVPAttack:0,PVEAttack:0,LastStockGain:0,LastStockPrice:0,LastTravel:0};
		newUser.Stocks = [];
		newUser.StockPrice = 0;
		newUser.Backpack = [];
		newUser.MaxBackpackSize = 25;
		newUser.Dealer = GetDrugs();
		newUser.Gang = [];
		newUser.LastGangID = 0;
		newUser.AwayTeam = [];
		newUser.Properties = [];
		newUser.City = "";
		Kingpin[user] = JSON.stringify(newUser);
		return returnData;
	} else {
		returnData.Code = 401;
		returnData.Msg = "User already exists";
		return returnData;
	}
}
function CompanyExists(company) {
	for(var user in Kingpin) {
		var obj = JSON.parse(Kingpin[user]);
		if(obj.Company.toLowerCase() == company,toLowerCase()) {
			return true;
		}
	}
	return false;
}
function DrugExistsInPack(user, drug) {
	if(Kingpin[user]) {
		var obj = JSON.parse(Kingpin[user]);
		for(var b = 0; b < obj.Backpack.length; b++) {
			if(obj.Backpack[b].Name.toLowerCase() == drug.toLowerCase()) {
				return true;
			}
		}
	}
	return false;
}
function DrugExistsInDealer(user, drug) {
	if(Kingpin[user]) {
		var obj = JSON.parse(Kingpin[user]);
		for(var b = 0; b < obj.Dealer.length; b++) {
			if(obj.Dealer[b].Name.toLowerCase() == drug.toLowerCase()) {
				return true;
			}
		}
	}
	return false;
}
function GetDrugID(target, user, drug) {
	if(Kingpin[user]) {
		var obj = JSON.parse(Kingpin[user]);
		if(target == "pack") {
			for(var b = 0; b < obj.Backpack.length; b++) {
				if(obj.Backpack[b].Name.toLowerCase() == drug.toLowerCase()) {
					return b;
				}
			}
		}
		if(target == "dealer") {
			for(var d = 0; d < obj.Dealer.length; d++) {
				if(obj.Dealer[d].Name.toLowerCase() == drug.toLowerCase()) {
					return d;
				}
			}
		}
		returnData.Code = 101;
		returnData.Msg = "Drug doesn't exist";
		return returnData;
	}
}
function SellDrugs(user, drug, amount) {
	if(Kingpin[user]) {
		var obj = JSON.parse(Kingpin[user]);
		var bID = GetDrugID("pack", user, drug);
		if(bID.Code == null) { // The drug exists inside of the users backpack.
			var dID = GetDrugID("dealer", user, drug);
			if(dID.Code != 101) {
				// The drug exists in the dealers pack.
				// So manipulate current data.
				if(amount == obj.Backpack[bID].Amount) {
					obj.Backpack.splice(bID, 1);
				} else if(amount < obj.Backpack[bID].Amount) {
					obj.Backpack[bID].Amount -= amount;
				} else if(amount > obj.Backpack[bID].Amount) {
					returnData.Code = 102;
					returnData.Msg = "You don't have sufficient amount of `"+drug+"`";
					return returnData;
				}
				obj.Dealer[dID].Amount += amount;
				obj.Cash += obj.Dealer[dID].Price * amount;
				Kingpin[user] = JSON.stringify(obj);
				// in the future create a random chance to gain gang members on deals
			} else {
				returnData.Code = 103;
				returnData.Msg = "Drug doesn't exist in dealers inventory.";
				return returnData;
			}
		}
	}
}
function RefreshDealer(user) {
	if(Kingpin[user]) {
		var obj = JSON.parse(Kingpin[user]);
		if(Now() >= obj.Cooldowns.DealerRefresh) {
			obj.Dealer = GetDrugs();
			obj.Cooldowns.DealerRefresh = Math.floor(Date.now() / 1000) + 120;
			Kingpin[user] = JSON.stringify(obj);
			return returnData;
		} else {
			returnData.Code = 501;
			returnData.Msg = "You need to wait `(" + (obj.Cooldowns.DealerRefresh - Now()) + ")`";
			return returnData;
		}
	}
}
function PropertyMarket(page) {
	// List a bunch of properties people can buy
	// not to be confused with the Player Market
	// Where players can sell drugs, properties, gang members etc..
	var properties = [];
	properties.push({ Level: 1, Name: "BG's Super Market", Owner: "", Stocks: [], Gang: [] });
	properties.push({ Level: 1, Name: "Jaco's Auto Store", Owner: "", Stocks: [], Gang: [] });
	properties.push({ Level: 1, Name: "Thumb Mechanics", Owner: "", Stocks: [], Gang: [] });
	properties.push({ Level: 1, Name: "1 Hour Plumbing", Owner: "", Stocks: [], Gang: [] });
	properties.push({ Level: 1, Name: "Kim's Grocery Store", Owner: "", Stocks: [], Gang: [] });
	properties.push({ Level: 1, Name: "Charlie's Pet Shop", Owner: "", Stocks: [], Gang: [] });
	properties.push({ Level: 1, Name: "Midnight Diner", Owner: "", Stocks: [], Gang: [] });
	properties.push({ Level: 1, Name: "Lakeside Tourism Shop", Owner: "", Stocks: [], Gang: [] });
	properties.push({ Level: 1, Name: "Bass 'n Bait Shop", Owner: "", Stocks: [], Gang: [] });
	properties.push({ Level: 1, Name: "Lucy's Nail Salon", Owner: "", Stocks: [], Gang: [] });
	properties.push({ Level: 1, Name: "Xyi Butcher Shop", Owner: "", Stocks: [], Gang: [] });
	properties.push({ Level: 1, Name: "Ray's Concert Halls", Owner: "", Stocks: [], Gang: [] });
	properties.push({ Level: 1, Name: "Lawry's Gas Station", Owner: "", Stocks: [], Gang: [] });
	properties.push({ Level: 1, Name: "PC Tech Shop", Owner: "", Stocks: [], Gang: [] });
	properties.push({ Level: 1, Name: "Monsoon Stadium", Owner: "", Stocks: [], Gang: [] });
	properties.push({ Level: 1, Name: "A&M Law Offices", Owner: "", Stocks: [], Gang: [] });
	properties.push({ Level: 1, Name: "Shorty's Smoke Shop", Owner: "", Stocks: [], Gang: [] });
	properties.push({ Level: 1, Name: "Aerotech Heat & Air", Owner: "", Stocks: [], Gang: [] });
	properties.push({ Level: 1, Name: "Shawney's Cattle Farm", Owner: "", Stocks: [], Gang: [] });
	properties.push({ Level: 1, Name: "30 Minute Butcher", Owner: "", Stocks: [], Gang: [] });
	properties.push({ Level: 1, Name: "Tau Museum", Owner: "", Stocks: [], Gang: [] });
	properties.push({ Level: 1, Name: "Auto Dealer Plus", Owner: "", Stocks: [], Gang: [] });
	properties.push({ Level: 1, Name: "Research Lab", Owner: "", Stocks: [], Gang: [] });
	properties.push({ Level: 1, Name: "ABC Pharmacy", Owner: "", Stocks: [], Gang: [] });
	properties.push({ Level: 1, Name: "WWW Design", Owner: "", Stocks: [], Gang: [] });

	var totalPages = Math.ceil(properties.length / 10);
	var pgn = Pagination(page, totalPages, 10, properties);

	var data = "```md\n";
	for(var i = pgn.Start; i < pgn.End; i++) {
		data += "# " + properties[i].Name + "\n-\n";
	}
	data += "\n--------------------\n"+pgn.Info+"```";
	return data;
}
function ListProperties(page) {
	var props = new Array();
	for(var user in Kingpin) {
		var obj = JSON.parse(Kingpin[user]);
		if(obj.Properties.length > 0) {
			props.push(obj.Properties);
		}
	}
	var totalPages = Math.ceil(props.length / 10); // Compute total pages with 10 items per page.

	var pgn = Pagination(page, totalPages, 10, props);
	var data = "```md\n";
	for(var i = pgn.Start; i < pgn.End; i++) {
		data += props[i].Name + "\n- < AHS (" + props[i].Attack + "/" + props[i].Health + "/" + props[i].Speed + ") >\n";
	}
	data += "\n--------------------\n"+pgn.Info+"```";
	if(data != "```md\n```") {
		return data + "```";
	} else {
		return "No results found";
	}
}
function BuyProperty(user, prop) {

}
function AddToStocks(user, stock) {
	if(Kingpin[user]) {
		var obj = JSON.parse(Kingpin[user]);
		obj.Stocks.push(stock)
		Kingpin[user] = JSON.stringify(obj);
	}
}
function TakeFromStocks(user, amount) {

}
function ViewDrugs(user) {
	if(Kingpin[user]) {
		var data = "```md\n";
		var obj = JSON.parse(Kingpin[user]);
		if(Now() >= obj.Cooldowns.DealerRefresh) {
			var chk = RefreshDealer(user);
			if(chk.Code == 501) {
				data = chk.Msg;
				return data;
			}
		}
		for(var i = 0; i < obj.Dealer.length; i++) {
			data += "# " + obj.Dealer[i].Name + "(" + obj.Dealer[i].Amount + ")\n- < $" + commafy(obj.Dealer[i].Price) + " >\n";
		}
		return data + "```";
	}
}
function ViewBackpack(user, page) {
	if(Kingpin[user]) {
		var data = "```md\n";
		var obj = JSON.parse(Kingpin[user]);
		var p = parseInt(page);
		var perPage = 10;
		var totalPages = Math.ceil(obj.Backpack.length / perPage);
		if(p > totalPages) {
			p = totalPages;
		}
		var pgn = Pagination(p, totalPages, perPage, obj.Backpack);
		for(var i = pgn.Start; i < pgn.End; i++) {
			data += "# " + obj.Backpack[i].Name + "(" + obj.Backpack[i].Amount + ")\n- < $" + commafy(obj.Backpack[i].PurchasedAt) + " >\n";
		}
		return data + "\n--------------------\n"+pgn.Info+"```";
	}
}
function TravelToCity(user, city) {

}
function GetPlayerMarket() {

}
function BuyFromPlayerMarket(item) { // Buy items from the player market

}
function AttackProperty(user, prop, members) { // Attack an NPC or Player's property

}
function SendGangToProperty(user, prop, members) { // Defend a property from other players

}
function BuyDrugs(user, drug, amount) {
	if(Kingpin[user]) {
		var obj = JSON.parse(Kingpin[user]); // Parse user object for manipulation.
		var exists = true; // Method to finding out if the drug exists.
		var d = GetDrugID("dealer", user, drug);
		if(d.Code != null) {
			if(d.Code == 101) {
				exists = false;
			} else {
				exists = true;
			}
		} else {
			exists = true;
		}
		if(exists == true) { // Drug exists in the dealer
			var price = obj.Dealer[d].Price * amount; // compute price * amount.
			if(obj.MaxBackpackSize > obj.Backpack.length + amount) { // Make sure they have the required space.
				if(obj.Dealer[d].Amount >= amount) { // The dealer has the amount needed.
					if(obj.Cash >= price) { // They have the cash required.
						if(DrugExistsInPack(user, drug) == false) {
							var drug = {
								Name: drug,
								Amount: amount,
								PurchasedAt: obj.Dealer[d].Price
							};
							obj.Backpack.push(drug);
						} else {
							var id = GetDrugID("pack", user, drug);
							if(obj.Backpack[id].Name.toLowerCase() == drug.toLowerCase()) { // make sure the array kept it's order.
								obj.Backpack[id].amount += amount;
								obj.Backpack[id].PurchasedAt = obj.Dealer[d].Price;
							}
						}
						if(obj.Dealer[d].Amount == amount) { // They purchased all of the drugs.
							obj.Dealer.splice(d, 1);
						} else if(obj.Dealer[d].Amount > amount) { // They haven't purchase all of the drugs
							obj.Dealer[d].Amount -= amount;
						}
						obj.Cash -= price;
						Kingpin[user] = JSON.stringify(obj);
						return returnData; // send Code 0 for success.
					} else {
						returnData.Code = 201;
						returnData.Msg = "Not enough money for this transaction.";
						return returnData;
					}
				} else {
					returnData.Code = 202;
					returnData.Msg = "Dealer doesn't have the amount you require.";
					return returnData;
				}
			} else {
				returnData.Code = 203;
				returnData.Msg = "Insufficient Backpack size";
				return returnData;
			}
		}
		if(exists == false) {
			returnData.Code = 204;
			returnData.Msg = "The drug `"+drug+"` with amount **("+amount+")** doesn't exist in this current dealer";
			return returnData;
		}
	} else {
		returnData.Code = 402;
		returnData.Msg = "User doesn't exist";
		return returnData;
	}
}
function GetDrugs() {
	var drugs = [];
	var weed = {Name: "Weed"};
	var speed = {Name: "Speed"};
	var shrooms = {Name: "Shrooms"};
	var peyote = {Name: "Peyote"};
	var crack = {Name: "Crack"};
	var opium = {Name: "Opium"};
	var smack = {Name: "Smack"};
	var ecstasy = {Name: "Ecstasy"};
	var heroin = {Name: "Heroin"};
	var hashish = {Name: "Hashish"};
	var cocaine = {Name: "Cocaine"};
	var acid = {Name: "Acid"};

	if(Math.random() < 0.02) {
		// Show the exceptional prices of the drugs.
		acid.Price = Random(1000, 4500);
		acid.Amount = Random(0, 125);
	} else {
		acid.Price = Random(100, 450);
		acid.Amount = Random(0, 75);
	}
	if(Math.random() < 0.035) {
		cocaine.Price = Random(75000, 150000);
		cocaine.Amount = Random(0, 50);
	} else {
		cocaine.Price = Random(15000, 30000);
		cocaine.Amount = Random(0, 125);
	}
	if(Math.random() < 0.025) {
		hashish.Price = Random(45, 150);
		hashish.Amount = Random(0, 150);
	} else {
		hashish.Price = Random(450, 1500);
		hashish.Amount = Random(0, 115);
	}
	if(Math.random() < 0.025) {
		heroin.Price = Random(25000, 70000);
		heroin.Amount = Random(0, 78);
	} else {
		heroin.Price = Random(5000, 14000);
		heroin.Amount = Random(0, 78);
	}
	if(Math.random() < 0.021) {
		ecstasy.Price = Random(1, 6);
		ecstasy.Amount = Random(0, 100);
	} else {
		ecstasy.Price = Random(10, 60);
		ecstasy.Amount = Random(0, 170);
	}
	if(Math.random() < 0.024) {
		smack.Price = Random(5500, 8000);
		smack.Amount = Random(0, 150);
	} else {
		smack.Price = Random(1500, 4500);
		smack.Amount = Random(0, 120);
	}
	if(Math.random() < 0.004) {
		opium.Price = Random(2500, 6500);
		opium.Amount = Random(0, 72);
	} else {
		opium.Price = Random(500, 1300);
		opium.Amount = Random(0, 150);
	}
	if(Math.random() < 0.03) {
		crack.Price = Random(4200, 7500);
		crack.Amount = Random(0, 72);
	} else {
		crack.Price = Random(1000, 3500);
		crack.Amount = Random(0, 100);
	}
	if(Math.random() < 0.003) {
		peyote.Price = Random(1, 7);
		peyote.Amount = Random(0, 80);
	} else {
		peyote.Price = Random(100, 700);
		peyote.Amount = Random(1, 150);
	}
	if(Math.random() < 0.0072) {
		shrooms.Price = Random(4000, 7500);
		shrooms.Amount = Random(0, 75);
	} else {
		shrooms.Price = Random(600, 1400);
		shrooms.Amount = Random(1, 125);
	}
	if(Math.random() < 0.003) {
		speed.Price = Random(70, 250);
		speed.Amount = Random(0, 125);
	} else {
		speed.Price = Random(350, 1250);
		speed.Amount = Random(1, 125);
	}
	if(Math.random() < 0.001) {
		weed.Price = Random(30, 90);
		weed.Amount = Random(0, 75);
	} else {
		weed.Price = Random(300, 900);
		weed.Amount = Random(0, 100);
	}

	drugs.push(weed);
	drugs.push(speed);
	drugs.push(shrooms);
	drugs.push(peyote);
	drugs.push(crack);
	drugs.push(opium);
	drugs.push(smack);
	drugs.push(ecstasy);
	drugs.push(heroin);
	drugs.push(hashish);
	drugs.push(cocaine);
	drugs.push(acid);
	return drugs;
}
