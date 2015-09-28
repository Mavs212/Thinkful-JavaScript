var reverseArray = function(arr) {
    
    for(var i =0; i<arr.length; i++)
    	{var newArr = reverseArray.shift(i);}

}

var reverseArrayInPlace = function(arr) {
    
    for(var i =0; i<arr.length; i++)
    	{arr[i] = reverseArray.pop();}
    
}

