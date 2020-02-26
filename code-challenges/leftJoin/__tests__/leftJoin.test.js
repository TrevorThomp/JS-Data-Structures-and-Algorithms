const {Hashmap} = require('../../../data-structures/hashTable/hashTable');
const leftJoin = require('../leftJoin');

describe('Left Join tests', ()=>{
  it('should return an empty array if passed empty hash maps', ()=>{
    const mapA = new Hashmap();
    const mapB = new Hashmap();

    expect(leftJoin(mapA, mapB)).toEqual([]);
  });

  it('should join two maps', ()=> {
    const mapA = new Hashmap();
    const mapB = new Hashmap();

    mapA.add('fond', 'enamored');
    mapA.add('wrath', 'anger');
    mapA.add('dilligent', 'employed');

    mapB.add('fond', 'averse');
    mapB.add('wrath', 'delight');
    mapB.add('guide', 'follow');

    expect(leftJoin(mapA, mapB)).toEqual([['wrath', 'anger', 'delight'], ['fond', 'enamored', 'averse'],['dilligent', 'employed'],
    ]);
  });

  it('should return 1 if the parameters are not of type HashTable', () => {
    expect(leftJoin('left', 'right')).toEqual(1);
  });
});