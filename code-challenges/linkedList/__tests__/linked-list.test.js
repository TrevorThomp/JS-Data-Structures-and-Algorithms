'use strict';

const list = require('../linked-list');

describe('Linked List', () => {

  it('Can instantiate an empty linked list', () => {
    let linkedList = new list.LinkedList();
    expect(linkedList.head).toBeNull();
  });

  it('Can properly insert into linked list', () => {
    let linkedList = new list.LinkedList();
    linkedList.insert(1);
    expect(linkedList.head.value).toEqual(1);
  });


})