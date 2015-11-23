var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //if something already at i
  if(this._storage.get(i)) {
    //create new tuple
    //push new tuple into the array at i
    this._storage.get(i).push([k, v]);
  } else {
    this._storage.set(i, [[k, v]]);
  }
};

//[ , ,[ ['bob', loblaw], ['hat', 'brown']], , , ] both are at index 2

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result;
  //if there is an array at i
  if (Array.isArray(this._storage.get(i))) {
    //then we loop through the array at i
    _.each(this._storage.get(i), function(tuple) {
      //if tuple matches k,
      if(tuple[0] === k) {
        //set result to tuple's value
        result = tuple[1];
      }
    })
  }
  return result || null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //loop through each item in storage
  this._storage.get(i).splice(0, 1);
};

/*this._storage = {
  get: ...
  set: ...
  contains a variable called 'storage', and storage = [ 3: ['Bob', 'Loblaw'](invisible key is 'Bob')];
  this.retrieve(3[0]); //returns ['Bob', 'Loblaw']

}*/

/*
 * Complexity: What is the time complexity of the above functions?
 Insert: Constant
 Retrieve: Constant (as long as there is a negligible amount of collisions)
 Remove: Constant
 */
