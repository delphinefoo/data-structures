var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.storage = {};
  newStack.counter = 0;
  _.extend(newStack, Stack.stackMethods);

  return newStack;
};

Stack.stackMethods = {};

Stack.stackMethods.push = function(val) {
  this.storage[this.counter] = val;
  this.counter++;
};

Stack.stackMethods.pop = function() {
  if (this.counter > 0) {
    this.counter--;
  }
  var item = this.storage[this.counter]
  delete this.storage[this.counter];
  return item;
};

Stack.stackMethods.size = function() {
  return this.counter;
};


