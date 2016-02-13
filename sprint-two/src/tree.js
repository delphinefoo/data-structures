var Tree = function(value){
  var newTree = {}; //node
  newTree.value = value;
  newTree.parent = null;
  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var newChild = Tree(value);
  newChild.parent = this;
  this.children.push(newChild);
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

treeMethods.removeFromParent = function() {
  //remove child value from parent's children property
  this.parent.children.splice(this.parent.children.indexOf(this), 1);
  //remove parent from child's parent property
  this.parent = null;
};

treeMethods.traverse = function(cb) {
  //call callback on current node's value
  cb(this.value);
  //if current node has children
  if (this.children.length) {
    //call callback on children
    for (var i = 0; i < this.children.length; i++) {
      this.children[i].traverse(cb);
    }
  }
  console.log(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 addChild: Constant time
 contains: Linear time
 */

