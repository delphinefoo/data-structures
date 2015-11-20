var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.counter = 0;
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this.storage[this.counter] = val;
  this.counter++;
};

queueMethods.dequeue = function() {
  var item = this.storage[0];
  delete this.storage[0];
  this.counter--;
  if(this.counter < 0) {
    this.counter = 0;
  }
  for(var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
  }
  return item;
};

queueMethods.size = function() {
  return this.counter;
};
