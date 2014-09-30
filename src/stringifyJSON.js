// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	var objstring='{';
  for (var key in obj){
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key]==='string') {
        objstring += '"' + key + '"' + ':' + obj[key];
      }
      if (typeof obj[key]==='object') {
        objstring += stringifyJSON(obj[key]);
      }
      if (typeof obj[key]==='array') {
        objstring += '[';
        for (var i =0; i<obj[key].length; i++){
          stringfyJson(obj[key][i]);
        }
        objstring += ']';
      }

  }

  // your code goes here
  // every thing in obj surronded by quotes
  // all keys surrounded by quotes
  // all object types that are strings surronded by quotes
  // if array add [] to string
  return objstring + '}';
}; 
