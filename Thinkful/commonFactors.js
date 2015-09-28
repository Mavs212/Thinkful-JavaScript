var commonFactors = function (value1,value2) {
	var array1 = [];
	var min;


	if (value1<value2) {
	  min = value1;
	}
	  else {
	  min = value2; 
	}
    console.log(min);

	for (var i= min; i>=0; i--) { 
		if ((value1 % i == 0) && (value2 % i == 0)) {
			array1.push(i);
		}
	}


	return array1; 

};
