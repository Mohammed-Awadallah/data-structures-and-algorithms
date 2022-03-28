'use strict';
const Node = require('./node')
class karyTree {
    constructor(root = null) {
        this.root = root;
        this.length = 0;
    }
    add(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            this.length++;
        }
        const addRecursion = (node) => {
            if (value < node.value) {
                if (node.child === null) {
                    node.child = newNode;
                    this.length++;
                }
                
                else{addRecursion(node.child);}
            }
        };
        addRecursion(this.root);
    }
}
module.exports = karyTree;