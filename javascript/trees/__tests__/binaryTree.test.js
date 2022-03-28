'use strict';

const Node = require('../Node/node');
const BinaryTree = require('../Binary Tree/binaryTree');
const testTree = new BinaryTree();
describe('Binary Tree Test', () => {
    it(' Can successfully instantiate an empty tree', () => {
        expect(testTree.length).toEqual(0);
        expect(testTree.root).toBeNull();
        expect(testTree.preOrder()).toBe("empty");
    });
    it(' Can successfully instantiate a tree with a single root node', () => {
        let node = new Node(12);
        testTree.root = node;
        expect(testTree.root.value).toBe(12);
        expect(testTree.root.right).toBeNull();
        expect(testTree.root.left).toBeNull();
    });
    it(' Can successfully add a left child and right child to a single root node', () => {
        let leftValue = new Node(8);
        let rightValue = new Node(14);
        testTree.root.left = leftValue;
        testTree.root.right = rightValue;
        expect(testTree.root.left.value).toEqual(8);
        expect(testTree.root.right.value).toEqual(14);
    });
    it(' Can successfully return a collection from a preorder traversal', () => {
        testTree.root.left.left = new Node(10);
        testTree.root.left.right = new Node(7);
        testTree.root.right.left = new Node(4);
        testTree.root.right.right = new Node(16);
        let preOrder = testTree.preOrder();
        expect(preOrder).toEqual([12, 8, 10, 7, 14, 4, 16]);
    });
    it(' Can successfully return a collection from an inorder traversal', () => {
        let inOrder = testTree.inOrder();
        expect(inOrder).toEqual([10, 8, 7, 12, 4, 14, 16]);
    });
    it(' Can successfully return a collection from an postOrder traversal', () => {
        let postOrder = testTree.postOrder();
        expect(postOrder).toEqual([10, 7, 8, 4, 16, 14, 12]);
    });
    it(' Can successfully return a max value from Tree', () => {
        let maxValue = testTree.getMax();
        expect(maxValue).toEqual(16);
    });
   
});