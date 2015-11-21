var Tree = function(value){
  var newTree = {}; //node
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.value = value;
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){

  //if you find target
  if(this.value === target) {
    // return true
    return true;
  }

  //loop through child nodes
  for(var i = 0; i < this.children.length; i++) {
    //call contains on each child node
    if (this.children[i].contains(target)) {
      return true;
    };
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addChild: Constant time
 contains: Linear time
 */

