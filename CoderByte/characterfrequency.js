var characterFrequency = function (string) {
	var newArray = {};
	for (var i =0; i<string.length; i++) {
	  var inx = string[i];
		if (newArray.hasOwnProperty(inx)) {
		  newArray[inx]+=1;
		}
	  else {
	  newArray[inx] = 1;
	  } 
  }
  return newArray;
}
characterFrequency("Mississippi");