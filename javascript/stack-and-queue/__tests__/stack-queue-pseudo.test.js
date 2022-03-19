'use strict';

const stackQueue = require('../stack-queue-pseudo/stack-queue-pseudo');
const test = new stackQueue();

describe('PseudoQueue Test', () => {
    it('Check if empty', () => {
        expect(test.length).toEqual(0);
        expect(test.rear.isEmpty()).toBeTruthy();
    });
    it('enqueue to PseudoQueue', () => {
        let x = "A";
        test.enqueue(x);
        expect(test.rear.peek()).toBe(x);
    });
    it('dequeue from PseudoQueue', () => {
        let x2 = "B";
        test.enqueue(x2);
        expect(test.dequeue()).toEqual('A');
    });

});
