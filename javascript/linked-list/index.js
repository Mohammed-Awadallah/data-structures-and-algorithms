'use strict';
const Node = require("./lib/Node")


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
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
        if (node.value === value) {return true;}
        while (node.next) {
            node = node.next;
            if (node.value === value) {return true;}
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


}

module.exports = LinkedList;