
var data = [1,2,3,4,5,6,7,8,9,10,11,12,13];


var func = function(list) {
	return list.length;
}

var length = function(data, fun) {
	return fun(data);
}


console.log(length(data,func));
