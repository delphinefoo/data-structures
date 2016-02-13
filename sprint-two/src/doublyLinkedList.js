var DoublyLinkedList = function() {
  var list = {};
  var Node = function(value) {
    node = {};
    node.value = value;
    return node;
  }

  list.head = null;
  list.tail = null;


  list.addToHead = function(value) {
    var newNode = Node(value);
    newNode.previous = null;

    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.head.previous = newNode;
      newNode.next = list.head;
      list.head = newNode;
    }
  }

  list.addToTail = function(value) {
    var newNode = Node(value);
    newNode.next = null;
    //if there are no values in the list
    if (list.head === null) {
      //set head and tail to value
      list.head = newNode;
      list.tail = newNode;
    //else
    } else {
      //set last node to point to value
      list.tail.next = newNode;
      //set new node to point to previous node
      newNode.previous = list.tail;
      //and set tail to point to value
      list.tail = newNode;
    }
  }

  list.removeHead = function() {
    var previousHead = list.head;
    if (list.head.next) {
      list.head = list.head.next;
    }
    list.head.previous = null;
    return previousHead.value;
  }

  list.removeTail = function() {
    var previousTail = list.tail;
    if (list.tail.previous) {
      list.tail = list.tail.previous;
    }
    list.tail.next = null;
    return previousTail.value;
  }

  list.contains = function(value) {
    var found = false;
    var check = function(node, value) {
      if (node.value === value) {
        found = true;
      } else if (node.next !== null) {
        check(node.next, value);
      }
      return found;
    }
    return check(list.head, value);
  }

  return list;
}