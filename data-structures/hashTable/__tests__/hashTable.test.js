'use strict';

const { LinkedList, Hashmap} = require('../hashTable');

describe('Hash Table', () => {
  test('Should construct a Hash Table', () => {
    let expectedSize = 5;
    let HashTable = new Hashmap(expectedSize);

    expect(HashTable).toBeInstanceOf(Hashmap);
    expect(HashTable.size).toBeDefined();
    expect(HashTable.size).toBe(expectedSize);
    expect(HashTable.buckets.length).toBe(expectedSize);
  });

  describe('hash(key)', () => {
    test('Should successfully hash a key to an in range value', () => {
      let expectedHash = 3;
      let key = 'cat';
      let HashTable = new Hashmap(5);

      let result = HashTable.hash(key);

      expect(result).toBe(expectedHash);
    });

    test('Should hash foo to 1 with 5 buckets', () => {
      let expectedHash = 1;
      let key = 'foo';
      let HashTable = new Hashmap(5);
      let result = HashTable.hash(key);

      expect(result).toBe(expectedHash);
    });
  });

  describe('add(key, value)', () => {
    test('Should add the key value pair to the HashTable', () => {
      let key = 'baz';
      let value = 'bar';
      let HashTable = new Hashmap(5);

      HashTable.add(key, value);
      let result = HashTable.hash(key);

      expect(HashTable.buckets[result].head.value[1]).toBe('bar');
    });

    test('Should be able to handle a collision', () => {
      let HashTable = new Hashmap(5);

      HashTable.add('key', 'value');
      HashTable.add('yek', 'anotherValue');

      let result = HashTable.hash('key');

      expect(HashTable.buckets[result].head.value[1]).toBe('value');
      expect(HashTable.buckets[result].head.next.value[1]).toBe('anotherValue');
    });
  });

  describe('get(key)', () => {
    test('Given a key, should return the value', () => {
      let HashTable = new Hashmap(5);

      HashTable.add('foo', 'bar');
      HashTable.add('key', 'value');

      expect(HashTable.get('foo')).toBe('bar');
    });

    test('Should return null if key does not exist', () => {
      let HashTable = new Hashmap(5);

      HashTable.add('key', 'value');

      expect(HashTable.get('zjskd')).toBe(null);
    });

    test('Should return the value from a bucket within a HashTable that has a collision', () => {
      let HashTable = new Hashmap(5);

      HashTable.add('key', 'value');
      HashTable.add('yek', 'anotherValue');

      let result = HashTable.hash('key');
      let result2 = HashTable.hash('yek');

      expect(HashTable.get('key')).toBe('value');
      expect(HashTable.get('yek')).toBe('anotherValue');
    });
  });

  describe('contains(key)', () => {
    test('Should return true if the key exists', () => {
      let HashTable = new Hashmap(5);

      HashTable.add('key', 'value');

      expect(HashTable.contains('key')).toBeTruthy();
    });

    test('Should return false if the key does not exists', () => {
      let HashTable = new Hashmap(5);

      HashTable.add('yek', 'value');

      expect(HashTable.contains('kei')).not.toBeTruthy();
    });
  });
});

describe('LinkedList', () => {
  test('values in linked list works', () => {
    let list = new LinkedList();

    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);

    let val = list.values();

    expect(val).toEqual([1, 2, 3, 4]);
  });
});