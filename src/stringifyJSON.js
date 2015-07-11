// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// TODO: refactor/clean up 
var stringifyJSON = function(obj) {
  // Converts a javascript obj to a JSON string

  // Debug logic
  console.log(obj+", "+(typeof obj));

  // Base cases
  if (typeof obj === "number" || typeof obj === "boolean") {
    return ""+obj;
  }
  else if (typeof obj === "string") {
    return "\""+obj+"\"";
  }
  else if (obj === null) {
    return ""+obj;
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
    var stringified = "{";
    for (var property in obj) {
      var result = stringifyJSON(obj[property]);
      if (result !== null) stringified += "\""+property+"\":"+stringifyJSON(obj[property])+",";
    }
    // This is an ugly hack and needs to be re-factored. Is to make comma handling easy, but this is BAD
    if (stringified.length === 1) return "{}"; // empty object
    else {
      stringified=stringified.slice(0,-1)+"}";
      return stringified;
    }
  }
  // undefined, functions, symbols
  else { 
    return null;
  }
};
