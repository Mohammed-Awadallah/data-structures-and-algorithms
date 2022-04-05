'use strict';
const Queue = require('../../stack-and-queue/queue/queue');
function fizzBuzzTree(karytree) {
    const queue = new Queue()
    queue.enqueue(karytree.root);
    let output = [];
    const fizzBuzzRecursion = (node) => {
        if (node.value % 3 === 0) {
            if (node.value % 5 === 0) {
                node.value = "FizzBuzz"
            } else {
                node.value = "Fizz"
            }
        } else if (node.value % 5 === 0) {
            node.value = "Buzz"
        } else {
            node.value = node.value.toString(); 
        }
        output.push(node.value);
        for (let i = 0; i < node.child.length; i++) {
            if (node.child[i]) queue.enqueue(node.child[i]);
        }
        if (!queue.isEmpty()) fizzBuzzRecursion(queue.dequeue());
    };
    fizzBuzzRecursion(queue.dequeue());
    return output;
}
module.exports = fizzBuzzTree;
