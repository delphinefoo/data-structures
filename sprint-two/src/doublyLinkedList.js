var DoublyLinkedList = function() {
  var list = {};

  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
   /* var newNode = Node(value);
    newNode.previous = null;

    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.head.previous = newNode;
      newNode.next = list.head;
      list.head = newNode;
    }*/
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

  list.removeHead = function(value) {
    list.head = list.head.next;
    list.head.previous = null;
  }

  list.removeTail = function(value) {

  }

  list.contains = function(value) {

  }

  return list;
}