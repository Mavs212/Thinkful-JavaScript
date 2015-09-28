
var prepend = function(element, oldList) {
	var newList = {};
	newList[element] = element;
	for (var i in oldList ) {
		newList[i] = oldList[i];

	}
	return newList;

};


var nth = function(number, list) {
	var 


}


var arrayToList = function(array) {



}


// Your code here.

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
}// → 20