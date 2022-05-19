'use strict';

const Node = require('../../trees/Node/node');
const BinaryTree = require('../../trees/Binary Tree/binaryTree');
const treeIntersection = require('../tree-intersection/tree-intersection.js');
const BT1 = new BinaryTree();
const BT2 = new BinaryTree();
const BT3 = new BinaryTree();
BT1.root = new Node(12);
BT1.root.left = new Node(8);
BT1.root.right = new Node(14);
BT1.root.left.left = new Node(10);
BT1.root.left.right = new Node(7);
BT1.root.right.left = new Node(4);
BT1.root.right.right = new Node(16);
BT2.root = new Node(16);
BT2.root.left = new Node(6);
BT2.root.right = new Node(13);
BT2.root.left.left = new Node(1);
BT2.root.left.right = new Node(12);
BT2.root.right.left = new Node(25);
BT2.root.right.right = new Node(7);
BT3.root = new Node(50);
BT3.root.left = new Node(78);
describe('treeIntersection Test', () => {
    it(' return the common values in both trees.', () => {
        expect(treeIntersection(BT1, BT2)).toStrictEqual([16,12, 7]);
    });
    it('No common values in both trees', () => {
        expect(treeIntersection(BT1, BT3)).toStrictEqual('There is No common values');
    });
})