var BinarySearchTree = function(value){
  var newBST = Object.create(binarySearchTreeMethods);
  newBST.value = value;
  newBST.children = [];

  return newBST;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) {
  //if value is smaller than current value
  if (value < this.value) {
    //if there are no children
    if (!this.children[0]) {
      //set left child to node with value
      this.children[0] = BinarySearchTree(value);
      this.left = this.children[0];
    } else {
      //call insert on left child
      this.children[0].insert(value);
    }
  }
  if (value > this.value) {
    if (!this.children[1]) {
      this.children[1] = BinarySearchTree(value);
      this.right = this.children[1];
    } else {
      this.children[1].insert(value);
    }
  }
};

binarySearchTreeMethods.contains = function(value) {
  //if value is equal to this.value
  if (value === this.value) {
    //return true;
    return true;
  }
  //if this node has children
  if (this.children.length) {
    //if value is smaller than this.value
    if (value < this.value) {
      //call contains on left children
      return this.children[0].contains(value);
    } else {
      //else call contains on right children
      return this.children[1].contains(value);
    }
  }
  return false;
};

binarySearchTreeMethods.depthFirstLog = function(func) {
  //call the function on the root node
  func(this.value);
  //if root node has children
  if (this.children[0]) {
    //call depthFirstLog on each of the children
    this.children[0].depthFirstLog(func);
  }
  if (this.children[1]) {
    this.children[1].depthFirstLog(func);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 Insert: logarithmic
 Contains: logarithmic
 DepthFirstLog: linear
 */
