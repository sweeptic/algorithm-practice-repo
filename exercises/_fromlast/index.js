import module from './linkedlist.js';

const List = module.LinkedList;
const Node = module.Node;

// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
function fromLast(list, n) {
  //   console.log(list);

  let pointer = list.head;

  const items = [];

  while (pointer !== null) {
    //  console.log(pointer);
    items.unshift(pointer);
    pointer = pointer.next;
  }
  console.log(items[n]);
}

const list = new List();
list.insertLast('a');
list.insertLast('b');
list.insertLast('c');
list.insertLast('d');
list.insertLast('e');
fromLast(list, 3); //'b'

// const list = new List();
// list.insertLast('a');
// list.insertLast('b');
// list.insertLast('c');
// list.insertLast('d');
