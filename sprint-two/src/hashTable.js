var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //console.log(this._storage.get(i));
  //if this._storage.get(i) doesn't exist yet
    //create bucket
    //create tuple inside bucket; tuple will hold k,v
  //else loop through the bucket
    //if key exists in bucket
      //make tuple[1] = v
  var tuple = [];
  if(this._storage.get(i)) {
    tuple[0] = k;
    //var firstVal = this._storage.get(i);
    //value at i becomes array
    this._storage.set(i, [firstVal, v]);
    //push this value and the new value into the storage[i]
  } else {
    this._storage.set(i, [k, v]);
  }
};

//[ , ,[ ['bob', loblaw], ['hat', 'brown']], , , ] both are at index 2

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //check if the corresponding i is an array
    if(Array.isArray(this._storage.get(i))) {
    //then we loop through the array at the index
      for(var idx = 0; idx < this._storage.get(i).length; idx++) {
        //if array[i] matches k,
        if(this._storage.get(i)[idx] === k) {
          return k;
        }
      }
    } else {
      return this._storage.get(i) || null;
    }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //loop through each item in storage
  this._storage.each(function(value, index, storage) {
    if(i === index) {
      storage.splice(i, 1);
    }
  });
};

/*this._storage = {
  get: ...
  set: ...
  contains a variable called 'storage', and storage = [ 3: ['Bob', 'Loblaw'](invisible key is 'Bob')];
  this.retrieve(3[0]); //returns ['Bob', 'Loblaw']

}*/

/*
 * Complexity: What is the time complexity of the above functions?
 */
