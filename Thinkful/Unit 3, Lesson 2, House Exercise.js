function House(num_rooms,color,size){
    var privateData = "QWERTY";   // private data
    this.num_rooms = num_rooms;
    this.color = color;
    this.size = size;
    this.display = function() {
    	console.log("Your house has " +this.num_rooms + "of rooms is " +this.color + " and " +this.size + " size");

    }

}

var BevHills = new House(10,"fuscia","")