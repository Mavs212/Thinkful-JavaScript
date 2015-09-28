//Exercise2

	var myData = [1,2,3,4,5]

	function addOne(myData, increment) {
	   return myData[increment] + 1 + "|";
	   

	}

	function sayHello(myData, increment) {
		return "hello " + myData[increment] + "|";

	} 	

	function modifyArray(arr, callback) {
		if (typeof callback !== 'function')
			{ return arr; }
		var result;
	   for (var i =0; i<arr.length; i++) {
		result += callback(arr, i);

			}
	   return result;
	   }



	modifyArray(myData,addOne) 

	modifyArray(myData,sayHello)



