'use strict';
const Node = require("./lib/Node")


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            node.next = this.head;
            this.head = node;
        }
        
    }

    includes(value) {
        if (!this.head) return false;
        let node = this.head;
        if (node.value === value) { return true; }
        while (node.next) {
            node = node.next;
            if (node.value === value) { return true; }
        }
        return false;
    }

    toString() {
        let Result = '';
        if (!this.head) return "The List Empty";
        let node = this.head;
        while (node) {
            let nodeValue = node.value;
            node = node.next;
            Result += (`{ ${nodeValue} } -> `);
        }
        Result += ('NULL');
        return Result;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
    }

    insertAfter(value, newValue) {
        let node = new Node(newValue);
        if (this.head) {
            if (this.tail.value === value) {
                this.tail.next = node;
                this.tail = node;
                return;
            }
            let checkedNode = this.head;
            while (checkedNode) {
                if (checkedNode.value === value) {
                    let temp = checkedNode.next;
                    checkedNode.next = node;
                    node.next = temp;
                    return;
                }
                checkedNode = checkedNode.next;
            }
        }
        return "there is no such value!";
    }
    insertBefore(value, newValue) {
        let node = new Node(newValue);
        if (this.head) {
            if (this.head.value === value) {
                node.next = this.head;
                this.head = node;
                return;
            }
            let checkedNode = this.head;
            while (checkedNode.next) {
                if (checkedNode.next.value === value) {
                    let holdNode = checkedNode.next;
                    checkedNode.next = node;
                    node.next = holdNode;
                    return;
                }
                checkedNode = checkedNode.next;
            }
        }
        return "there is no such value!";
    }
    kthFromEnd(k) {
        if (typeof k !== 'number' || k < 0 || !Number.isInteger(k)) return 'Exception not valid Number';
        if (this.head) {
            if (this.length === 1 && k === 0) return this.head.value;
            if (k < this.length) {
                let checkedNode = this.head;
                for (let i = 1; i < this.length - k; i++) {
                    checkedNode = checkedNode.next;
                }
                return checkedNode.value;
            }
        } return "Exception empty LL or more than the length";
    }
}


module.exports = LinkedList;
