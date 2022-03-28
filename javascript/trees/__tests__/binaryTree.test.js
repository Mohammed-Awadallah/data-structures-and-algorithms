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
        let node = new Node(100);
        testTree.root = node;
        expect(testTree.root.value).toBe(100);
        expect(testTree.root.right).toBeNull();
        expect(testTree.root.left).toBeNull();
    });
    it(' Can successfully add a left child and right child to a single root node', () => {
        let leftValue = new Node(98);
        let rightValue = new Node(101);
        testTree.root.left = leftValue;
        testTree.root.right = rightValue;
        expect(testTree.root.left.value).toEqual(98);
        expect(testTree.root.right.value).toEqual(101);
    });
    it(' Can successfully return a collection from a preorder traversal', () => {
        testTree.root.left.left = new Node(99);
        testTree.root.left.right = new Node(97);
        testTree.root.right.left = new Node(96);
        testTree.root.right.right = new Node(102);
        let preOrder = testTree.preOrder();
        expect(preOrder).toEqual([100, 98, 99, 97, 101, 96, 102]);
    });
    it(' Can successfully return a collection from an inorder traversal', () => {
        let inOrder = testTree.inOrder();
        expect(inOrder).toEqual([99, 98, 97, 100, 96, 101, 102]);
    });
    it(' Can successfully return a collection from an postOrder traversal', () => {
        let postOrder = testTree.postOrder();
        expect(postOrder).toEqual([99, 97, 98, 96, 102, 101, 100]);
    });
    it(' Can successfully return a max value from Tree', () => {
        let maxValue = testTree.getMax();
        expect(maxValue).toEqual(102);
    });
   
});