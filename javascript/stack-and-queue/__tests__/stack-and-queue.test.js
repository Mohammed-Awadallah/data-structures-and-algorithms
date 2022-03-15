'use strict';
const Queue = require('../queue/queue');
const testQueue = new Queue();
const Stack = require('../stack/stack');
const testStack = new Stack();

describe('Queue', () => {
    it('isempty', () => {
        expect(testQueue.isEmpty()).toBeTruthy();
    });
    it('enqueue', () => {
        let value = 1;
        testQueue.enqueue(value);
        expect(testQueue.front.value).toEqual(value);
    });
    it('dequeue', () => {
        let value = 2;
        testQueue.enqueue(value);
        expect(testQueue.front.next.value).toEqual(value);
        expect(testQueue.dequeue()).toEqual(1);
    });
    it('peek', () => {
        expect(testQueue.peek()).toEqual(2);
    });
    it('if not empty', () => {
        expect(testQueue.isEmpty()).toBeFalsy();
    });
    it('dequeue on an empty queue', () => {
        testQueue.dequeue();
        expect(testQueue.dequeue()).toBe('empty');
    });
    it('peek on an empty queue', () => {
        expect(testQueue.peek()).toBe('empty');
    });
});

describe('stack test', () => {
    it('isempty', () => {
        expect(testStack.isEmpty()).toBeTruthy();
    });
    it('push', () => {
        let value = 1;
        testStack.push(value);
        expect(testStack.top.value).toEqual(value);
    });
    it('pop', () => {
        let value = 2;
        testStack.push(value);
        expect(testStack.top.value).toEqual(value);
        expect(testStack.pop()).toEqual(value);
    });
    it('peek', () => {
        expect(testStack.peek()).toEqual(1);
    });
    it('isempty if not empty', () => {
        expect(testStack.isEmpty()).toBeFalsy();
    });
    it('pop if the stack is empty', () => {
        testStack.pop();
        expect(testStack.pop()).toBe('empty');
    });
    it('peek if the stack is empty', () => {
        expect(testStack.peek()).toBe('empty');
    });
});