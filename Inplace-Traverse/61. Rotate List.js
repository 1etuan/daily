class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }

  getList() {
    let result = "";
    let temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
};


function rotate(head, rotations) {
  if(head === null || head.next === null || rotations <= 0) return head
  
  //find the length and the last node of the list
  let lastNode = head
  let listLength = 1
  
  while(lastNode.next !== null) {
    lastNode = lastNode.next
    listLength++
  }
  
  //connect the last node with the head to make it a circular list
  lastNode.next = head
  
  //no need to do rotations more than the length of the list
  rotations %= listLength
  let skipLength = listLength - rotations
  let lastNodeOfRotatedList = head
  
  for(let i = 0; i < skipLength - 1; i++) {
    lastNodeOfRotatedList = lastNodeOfRotatedList.next
  }
  
  //lastNodeOfRotatedList.next is pointing to the sub-list of k ending nodes
  head = lastNodeOfRotatedList.next
  lastNodeOfRotatedList.next = null
  
  return head
};


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

console.log(`Nodes of original LinkedList are: ${head.getList()}`)
console.log(`Nodes of rotated LinkedList are: ${rotate(head, 3).getList()}`)