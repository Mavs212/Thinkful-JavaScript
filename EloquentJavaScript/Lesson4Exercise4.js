function deepEqual (value1, value2) {
	var bool;
	if ((typeof value1 == 'object' && value1 != null) && (typeof value2 == 'object' && value2 != null)){ 
		for(var key in value1) {
			if(value1[key]!=value2[key]) {
				bool = false;
			}
    }
    if(bool !== false) {
    		 bool = true;}
    return bool;
  }
  else if(value1 !== value2) {
    bool = false;    
	}
  else{
    bool = true;
  }
  return bool;
}

var obj1 = {cool: 1};
var obj2 = {cool: 2};
deepEqual(obj1,obj2);