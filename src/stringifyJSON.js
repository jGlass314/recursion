// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(obj === null)
    return 'null';
  if(typeof obj === 'number' || typeof obj === 'boolean')
    return obj.toString();
  if(typeof obj === 'string')
    return '"' + obj + '"';
  if(typeof obj === 'function' || obj === undefined)
    return '';
  var str = '';
  if(Array.isArray(obj)) {
    str = str.concat('[' + str.concat(stringify(obj)) + ']');
  }
  else if(typeof obj === 'object') {
    str = str.concat('{' + str.concat(stringify(obj)) + '}');
  }
  return str;
};

var stringify = function(obj) {
  var str = '';
  for(var i in obj) {
    // test if first object
    if(str.length > 0) {
      str = str.concat(',');
    }
    // must do pseudo-redundant check here to see if key is stringifyable
    if(typeof obj[i] !== 'function' && obj[i] !== undefined) {
      var val = stringifyJSON(obj[i]);
      var newString = '';
      if(!Array.isArray(obj))
        newString = stringifyJSON(i) + ':' + val;
      else
        newString = val;
      str = str.concat(newString);
    }
  }
  return str;
};
