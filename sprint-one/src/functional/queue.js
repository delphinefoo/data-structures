var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function(){
    var item = storage[0];
    delete storage[0];
    counter--;
    if(counter < 0) {
      counter = 0;
    }

    for(var key in storage) {
      storage[key - 1] = storage[key];
    }
    return item;
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};

