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


})