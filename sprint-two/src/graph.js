

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.nodes = {};
};

//{value: ..., connections: []}

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.nodes[node] = {};
  this.nodes[node].value = node;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  if(this.nodes[node] !== undefined) {
    return true;
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  if (this.nodes.hasOwnProperty(node)) {
    delete this.nodes[node];
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  if(this.nodes[fromNode].connections.indexOf(toNode) > -1) {
    return true;
  } else {
    return false;
  }
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  if (this.nodes[fromNode].connections === undefined) {
    this.nodes[fromNode].connections = [];
    this.nodes[toNode].connections = [];
  }
  this.nodes[fromNode].connections.push(toNode);
  this.nodes[toNode].connections.push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  var fromEdges = this.nodes[fromNode].connections;
  var toEdges = this.nodes[toNode].connections;
  if (fromEdges.indexOf(toNode) > -1) {
    fromEdges.splice(fromEdges.indexOf(toNode), 1);
    toEdges.splice(toEdges.indexOf(fromNode), 1)
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for(var key in this.nodes) {
    cb.call(this, this.nodes[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



