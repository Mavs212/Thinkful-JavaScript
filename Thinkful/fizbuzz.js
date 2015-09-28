var fizBuzz = function() {
  do {var numString = prompt("Please enter an integer number");
       numInt = + numString;}
  while(isNaN(numInt) && !(Math.Round(n) % 1 == 0));
var output="";
  for (var i = 1; i<=100; i++) {
    if (i%3===0) {
        output +="fizz";
      if (i%5===0){
        output +=" buzz, ";
      }
       else{ output +=", ";}
    }
    else if (i%5===0) {
        output+= "buzz, ";     
    }
    else {output+=i+", ";}
    
}
return output;
};

function isInt(n) { 
   if(typeof n == 'number' && Math.Round(n) % 1 == 0) {
       return true;
   } else {
       return false;
   }
} 
console.log(fizBuzz());