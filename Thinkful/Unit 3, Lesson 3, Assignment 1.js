
var user = {
    name: "mr smith",
    profession: "dog catcher",
    age: 100000,
    reset: function() {
    	for(var prop in this) {
    		if(this.hasOwnProperty(prop) && prop != 'reset') {
    			this[prop] = undefined;

    		}
         }
    }
}



user.reset();

user.name; 
user.profession; 
user.age; 

user.test = "yo";

user.reset();

user.test; 
\ No newline at end of file