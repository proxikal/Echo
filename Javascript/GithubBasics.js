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
  this.prs(Input) {
    return JSON.parse(Input)
  };
}
