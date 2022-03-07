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
describe('linked-list-insertions', () => {
  it(' append new node to empty linked list', () => {
    newLinkedList.append(1);
    expect(newLinkedList.head.value).toBe(1);
    expect(newLinkedList.head.next).toBeNull();
  });
  it(' testing append function', () => {
    newLinkedList.append(2);
    expect(newLinkedList.head.value).toBe(1);
    expect(newLinkedList.head.next.value).toBe(2);
    expect(newLinkedList.head.next.next).toBeNull();
  });
  it(' testing insertBefore function', () => {
    expect(newLinkedList.toString()).toBe('{ 1 } -> { 2 } -> NULL');
    newLinkedList.insertBefore(1, "A");
    expect(newLinkedList.toString()).toBe('{ A } -> { 1 } -> { 2 } -> NULL');
    newLinkedList.insertBefore(2, 4);
    expect(newLinkedList.toString()).toBe('{ A } -> { 1 } -> { 4 } -> { 2 } -> NULL');
    newLinkedList.insertBefore(4, "F");
    expect(newLinkedList.toString()).toBe('{ A } -> { 1 } -> { F } -> { 4 } -> { 2 } -> NULL');
    expect(newLinkedList.insertBefore(9, 20)).toBe('there is no such value!');
  });
  it(' testing insertAfter function', () => {
    newLinkedList.insertAfter("A", "B");
    expect(newLinkedList.toString()).toBe('{ A } -> { B } -> { 1 } -> { F } -> { 4 } -> { 2 } -> NULL');
    newLinkedList.insertAfter(2, "X");
    expect(newLinkedList.insertAfter(225, 4854)).toBe('there is no such value!');
  });
});



