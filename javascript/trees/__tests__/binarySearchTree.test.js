'use strict';
const BinarySearchTree = require('../Binary Search Tree/binarySearchTree');
const searchTree = new BinarySearchTree();
describe('Binary Search Tree Test', () => {
    it(' Can successfully instantiate an empty tree', () => {
        expect(searchTree.length).toEqual(0);
        expect(searchTree.root).toBeNull();
    });
    it(' Can successfully instantiate a tree with a single root node', () => {
        searchTree.add(100)
        expect(searchTree.root.value).toBe(100);
        expect(searchTree.length).toEqual(1);
        expect(searchTree.root.right).toBeNull();
        expect(searchTree.root.left).toBeNull();
    });
    it(' Can successfully add a left child and right child to a single root node', () => {
        searchTree.add(98);
        searchTree.add(102);
        searchTree.add(97);
        searchTree.add(99);
        searchTree.add(101);
        searchTree.add(106);
        expect(searchTree.length).toEqual(7);
        expect(searchTree.root.left.value).toEqual(98);
        expect(searchTree.root.right.value).toEqual(102);
        expect(searchTree.root.left.left.value).toEqual(97);
        expect(searchTree.root.left.right.value).toEqual(99);
        expect(searchTree.root.right.left.value).toEqual(101);
        expect(searchTree.root.right.right.value).toEqual(106);
    });
    it('can successfully search for a value in the BinarySearchTree', () => {
        expect(searchTree.contains(100)).toBeTruthy();
        expect(searchTree.contains(97)).toBeTruthy();
        expect(searchTree.contains(200)).toBeFalsy();
    });
    it('search in empty BinarySearchTree', () => {
        const newTree = new BinarySearchTree();
        expect(newTree.contains(7)).toBe("empty");
    });
});