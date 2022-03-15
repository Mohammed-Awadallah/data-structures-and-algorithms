'use strict';
const Node = require('../lib/node');
class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }
    push(x) {
        let node = new Node(x);
        if (this.isEmpty()) {
            this.top = node;

        } else {
            node.next = this.top;
            this.top = node;

        }
        this.length++
    }
    pop() {
        if (this.isEmpty()) return 'empty';
        let spaceHolder = this.top;
        this.top = spaceHolder.next;
        spaceHolder.next = null;
        this.length--;
        return spaceHolder.value;
    }
    peek() {
        if (this.isEmpty()) return 'empty';
        return this.top.value;
    }
    isEmpty() {
        if (this.length == 0) return true;
        else return false;
    }
}

module.exports = Stack;

