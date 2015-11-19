var Stack = function(){
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  // Implement the methods below
  someInstance.push = function(value){
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function(){
    delete storage[counter];
    counter--;
    if (counter < 0) {
      counter = 0;
    }
    return storage[counter];
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};




