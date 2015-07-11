// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // Converts a javascript obj to a JSON string

  console.log(obj+", "+(typeof obj));

  // Base cases
  if (typeof obj === "number" || typeof obj === "boolean") {
    return ""+obj;
  }
  else if (typeof obj === "string") {
    return "\""+obj+"\"";
  }
  else if (Array.isArray(obj)) {
    // Empty array handled separately for ease of handling comma logic
    if (obj.length === 0) return "[]";
    else {
      // Elements in the array have same stringify logic applied
      var stringified = "[";
      for (var i = 0; i < obj.length-1; i++) {
        stringified+=stringifyJSON(obj[i])+",";
      }
      stringified+=stringifyJSON(obj[i])+"]";
      return stringified;
    }
  }
  else if (typeof obj === 'object') {
    return ""+obj;
  }
  else { 
    // for now:
    return null;
  }
};
