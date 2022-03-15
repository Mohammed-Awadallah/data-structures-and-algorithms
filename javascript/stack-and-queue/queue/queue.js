'use strict';
const Node = require('../lib/node');
class Queue {

    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    enqueue(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.front = node;
            this.rear = node
            this.length++;
            return this.front;
        } else {
            this.rear.next = node;
            this.rear = node;
            this.length++;
            return this.front;
        }

    }

    dequeue() {
        if (this.isEmpty()) {
            return 'empty';
        }
        const temp = this.front;
        this.front = this.front.next;
        temp.next = null;
        this.length--;
        return temp.value;
    }

    peek() {
        if (this.isEmpty()) {
            return 'empty';
        }
        return this.front.value;
    }

    isEmpty() {
        if (this.length == 0) { return true; }
        else return false;
    }

}


module.exports = Queue;