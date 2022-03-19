'use strict';

const Stack = require('../stack/stack');

class stackQueue {
    constructor() {
        this.front = new Stack();
        this.rear = new Stack();
        this.length = 0;
    }

    enqueue(x) {
        this.rear.push(x);
        this.length++;
    }
    dequeue() {
        if (this.length === 0) {
            return 'empty'
        };
        if (this.front.isEmpty()) {
            while (!this.rear.isEmpty()) {
                this.front.push(this.rear.pop());
            }
        }
        this.length--;
        return this.front.pop();
    }
}
module.exports = stackQueue;