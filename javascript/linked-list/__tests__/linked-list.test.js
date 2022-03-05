'use strict';

const LinkedLilst = require('../index');
let linkedList = new LinkedLilst();
let newLinkedList = new LinkedLilst();

describe('Linked List', () => {
  it('Check if the linkedlist is empty', () => {
    expect(linkedList.head).toEqual(null);
  });
  it('testing insert to an empty list', () => {
    linkedList.insert(1);
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next).toBeNull();
  });
  it('testing insert to not empty linkedlist', () => {
    linkedList.insert("A");
    expect(linkedList.head.value).toBe("A");
    expect(linkedList.head.next.value).toBe(1);
    expect(linkedList.head.next.next).toBeNull();
  });
  it('testing includes fucntion', () => {
    expect(linkedList.includes("A")).toBeTruthy();
    expect(linkedList.includes(3)).toBeFalsy();
    expect(newLinkedList.includes(3)).toBeFalsy();
  });
  it('testing toString function', () => {
    expect(linkedList.toString()).toBe('{ A } -> { 1 } -> NULL');
  });
});


