
var stringifyJSON = function(obj){
    //check if null
    if(obj === null) {
        return 'null';
    }
    //check if num / boolean
    else if(typeof obj === 'number' || typeof obj === 'boolean') {
        return ''+obj;
    }
    //check if string
    else if(typeof obj === 'string'){
        return '"'+ obj + '"';
    }
    //check if array
    else if(Array.isArray(obj)) {
        var arrstring ='[';
        for (var i=0; i<obj.length;i++){
          arrstring += stringifyJSON(obj[i]);
          if (i<obj.length-1){
            arrstring +=',';
          }
        }
        return arrstring+=']';
    }
    else if(typeof obj === 'object') {
      var count =0;
      var objstring='{';
      for (var key in obj) {
        count++
        if (obj.hasOwnProperty(key)&& key != 'undefined' && key!='functions') {
          objstring+='"' + key + '":' +stringifyJSON(obj[key]);
        }
        if (count<Object.keys(obj).length && obj!='{}'&&key != 'undefined' && key!='functions'){
          objstring +=','
       }
      }
      return objstring+='}'
    }
};
