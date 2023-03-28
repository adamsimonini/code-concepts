class ListNode {
	data: any;
	next: any;

	// a node must always have data, however it may not point to the next none (i.e., if it's the last node)
	constructor(data: any, next?: any) {
		this.data = data;
		this.next = next || null;
	}
}

class LinkedList {
	public length: number;
	public head: any;

	constructor() {
		this.length = 0;
		this.head = null;
	}

	incrementLength = () => {
		this.length = this.length + 1;
	};

	// ADD items
	add = (data: any) => {
		this.incrementLength();
		// if LL is empty
		if (this.head == null) {
			this.head = new ListNode(data);
		} else {
			// LL has at leat one node
			const latestNode = new ListNode(data, this.head);
			this.head = latestNode;
		}
	};
}

let myNewLinkedList = new LinkedList();
myNewLinkedList.add(2);
myNewLinkedList.add(8);
myNewLinkedList.add(44);

console.log(myNewLinkedList.head.data);
console.log(myNewLinkedList.head.next.data);
console.log(myNewLinkedList.head.next.next.data);
console.log(`This linked list is ${myNewLinkedList.length} nodes in length`);
