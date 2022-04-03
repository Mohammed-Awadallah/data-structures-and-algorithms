const breadthFirst = require('../tree-breadth-first/tree-breadth-first');
const Node = require('../Node/node');
const BinaryTree = require('../Binary Tree/binaryTree');

const TestTree = new BinaryTree();

describe('Binary Tree Test', () => {
    it('return an array of all values in the tree, in the breadth first"', () => {
        let newNode = new Node(100)
        TestTree.root = newNode
        let node2  = new Node(105);
        TestTree.root.left = node2
        let node3 = new Node(98);
        TestTree.root.right = node3;
        let node4 = new Node(50);
        TestTree.root.left.left = node4;
        const values = breadthFirst(TestTree);
        expect(values).toEqual([100, 105, 98, 50]);
    });
});