'use strict';

const LinkedList = require('../linked-list');

describe('Linked List', () => {

  it('Can instantiate an empty linked list', () => {
    let linkedList = new LinkedList();
    expect(linkedList.head).toBeNull();
  });

  it('Can properly insert into linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    expect(linkedList.head.value).toEqual(1);
  });

  it('Head will properly point to first node in linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    expect(linkedList.head.value).toEqual(3);
  });

  it('Can properly insert multiple values into linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(4);
    expect(linkedList.head.value).toEqual(4);
  });

  it('Returns true when finding value in linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    expect(linkedList.includes(1)).toEqual(true);
  });

  it('Returns false when value is not in list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    expect(linkedList.includes(2)).toEqual(false);
  });

  it('Properly returns a collection of all values in the list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    expect(linkedList.toString()).toEqual('Head -> 3 -> 2 -> 1 -> NULL');
  });

  it('Can successfully add node to the end of the list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.append(2);
    expect(linkedList.head.next.value).toEqual(2);
  });

  it('Can successfully add multiple nodes to the end of the list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.append(3);
    linkedList.append(4);
    expect(linkedList.head.next.next.value).toEqual(4);
  });

  it('Can successfully insert a node before a node located in the middle of list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(4);
    linkedList.insertBefore(2,10);
    expect(linkedList.head.next.next.value).toEqual(10);
    expect(linkedList.head.next.next.next.value).toEqual(2);
  });

  xit('Can successfully insert a node before the first node in the list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insertBefore(3,10);
    expect(linkedList.head.value).toEqual(10);
  });

  it('Can successfully insert a node in the middle of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(4);
    linkedList.insertAfter(3,10);
    expect(linkedList.head.next.next.value).toEqual(10);
    expect(linkedList.head.next.next.next.value).toEqual(2);
  });

  it('Can successfully insert a node after the last node in the list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insertAfter(1,10);
    expect(linkedList.head.next.next.next.value).toEqual(10);
  });
});