// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
  // initialize element to document.body for initial pass
  if (element === undefined) { element = document.body; }

  // base case - the element has no children
  if (! element.hasChildNodes()) {
    if (element.classList !== undefined && element.classList.contains(className)) { return [element]; }
    else return [];
  }

  // recursive case - the element has children
  else {
    var matches = [];
    if (element.classList.contains(className)) { matches.push(element); }
    var children = element.childNodes;
    for (var i = 0; i < children.length; i++) {
      var result = getElementsByClassName(className, children[i]);
      matches = Array.prototype.concat(matches, result);
    }
    return matches;
  }
};
