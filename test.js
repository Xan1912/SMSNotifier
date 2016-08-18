var data = ['Ab', 'Cd', 'Ef'];
var dicts = {};

var j = 0;
for(var i in data){
	dicts[j]["Coco"] = data[i];
	j = j + 1;
}
console.log(dicts);