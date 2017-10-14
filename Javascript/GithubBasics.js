function GithubBasics() {
	// Add to an array.
	this.addTo = function(array, item) {
		array.push(item);
		return array;
	};
  
  	// Remove from array.
	this.removeFrom = function(array, item) {
		var trashIndex;
		for(i = 0; i < array.length; i++) {
			if(array[i] == item) {
				trashIndex = i;
			}
		}
		if(trashIndex != null) {
			array.splice(trashIndex, 1);
			return array;
		}
	};
  
  	// Stringify json
	this.str(Input) {
    		return JSON.stringify(Input)
  	};
  
  	// Parse JSON
  	this.prs = function(Input) {
    		return JSON.parse(Input)
  	};

	this.sortObject = function(o) {
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
	};

	this.estr = function(Input) {
	    var special = Input.replace(/(\[)/g, "\\\[");
	    special = special.replace(/(\])/g, "\\\]");
	    special = special.replace(/(\{)/g, "\\\{");
	    special = special.replace(/(\})/g, "\\\}");
	    special = special.replace(/(\.)/g, "\\\.");
	    special = special.replace(/(\*)/g, "\\\*");
	    special = special.replace(/(\+)/g, "\\\+");
	    special = special.replace(/(\?)/g, "\\\?");
	    special = special.replace(/(\/)/g, "\\\/");
	    return special;
	};
}
