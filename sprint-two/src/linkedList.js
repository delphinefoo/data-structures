var LinkedList = function(){
  var list = {};
  var prevNode = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);

    if(!list.head) {
      prevNode = newNode;
      list.head = newNode;
      list.tail = newNode;
    } else {
      prevNode.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function(){
    if(list.head && list.head === list.tail) {
      list.head = null;
      list.tail = null;
    } else {
      var currHead = list.head;
      list.head = currHead.next;
    }
    return prevNode.value;
  };

  list.contains = function(target){
    var found = false;

    var check = function(item){
      if (item !== null) {
        if (item.value === target) {
          found = true;
          return found;
        } else {
          check(item.next);
        }
      }
      return found;
    };
    return check(list.head);
  };
  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
{4} //4.next = null
{4, 5} //4.next = 5