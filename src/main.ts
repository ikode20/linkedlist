import { LinkedList } from './linkedList';

(function() {
    const list = new LinkedList();
    list.addLast(10);
    list.addLast(20);
    list.addLast(30);
    list.addLast(40);
    list.addLast(50);
    list.addLast(60);
    list.print();

    console.log(`2nd node from end: ${list.getKthNodeFromTheEnd(2)}`);
    console.log(`4th node from end: ${list.getKthNodeFromTheEnd(4)}`);
    console.log(`middle value: ${list.getMiddleValue()}`);
})()
