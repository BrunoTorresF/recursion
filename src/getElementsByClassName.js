// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
/* DOM is a tree diagram: 1 starting point, multiple branches = branch points
   Input: class name string, output: DOM elements w/ matching class
   Must travel to ends of tree first, then traverse back up
   check if each node has nodes, if yes, recurse down
   if no, test element class name for className
   if true, push node[element] to result array
     concat(DOM[element].getElementsByClassName)
   */
var getElementsByClassName = function(className) {
  // your code here
  let result = [];
  function find(input, className) {
    if (input.hasChildNodes()) {
      for (var child = input.firstChild; child; child = child.nextSibling) {
        find(child, className);
      }
    }
    result.push(input.child)
  }
  return result.concat(find(child));
};
