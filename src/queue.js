const { NotImplementedError } = require('../lib');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    if (!this.head) {
      return null;
    }

    // Перетворюємо ListNode у звичайний об'єкт із посиланнями для задоволення тесту
    const result = { value: this.head.value, next: null };
    let currentResult = result;
    let currentListNode = this.head.next;

    while (currentListNode) {
      currentResult.next = { value: currentListNode.value, next: null };
      currentResult = currentResult.next;
      currentListNode = currentListNode.next;
    }

    return result;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (!this.head) {
      return undefined;
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    return value;
  }
}

module.exports = {
  Queue
};
