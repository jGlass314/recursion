// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// document.body, element.childNodes, and element.classList

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var root = document.body;
  var arr = [];
  return recurse(className, root, arr);
};
var recurse = function(className, element, arr) {
  if(element.length === 0)
    return arr;
  if(element.classList !== undefined && element.classList.contains(className)) {
    arr.push(element);
  }
  for(var i = 0; i < element.childNodes.length; i++)
    recurse(className, element.childNodes[i], arr);
  return arr;
}
