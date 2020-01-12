'use strict';

const list = require('../linked-list');

describe('Linked List', () => {

  it('Can instantiate an empty linked list', () => {
    let linkedList = new list.LinkedList();
    expect(linkedList.head).toBeNull();
  });


})