'use strict';
class binaryTree {
    constructor(root = null) {
        this.root = root;
        this.length = 0;
    }
    preOrder() {
        if (this.isEmpty()) return "empty"
        let output = [];
        const preOrderRecursion = (node) => {
            output.push(node.value); 
            if (node.left) { preOrderRecursion(node.left) } 
            if (node.right) { preOrderRecursion(node.right) } 
        }
        preOrderRecursion(this.root);
        return output;
    }
    postOrder() {
        if (this.isEmpty()) return "empty"
        let output = [];
        const postOrderRecursion = (node) => {
            if (node.left) { postOrderRecursion(node.left) } 
            if (node.right) { postOrderRecursion(node.right) } 
            output.push(node.value); 
        }
        postOrderRecursion(this.root);
        return output;
    }
    inOrder() {
        if (this.isEmpty()) return "empty"
        let output = [];
        const inOrderRecursion = (node) => {
            if (node.left) { inOrderRecursion(node.left) } 
            output.push(node.value); 
            if (node.right) { inOrderRecursion(node.right) } 
        }
        inOrderRecursion(this.root);
        return output;
    }
    isEmpty() {
        return this.root === null;
    }
    getMax() {
        if (this.isEmpty()) return "empty"
        let array = this.preOrder();
        let max = array[0];
        array.forEach(x => {
            if (x > max) {
                max = x;
            }
        });
        return max;
    }
}
module.exports = binaryTree;