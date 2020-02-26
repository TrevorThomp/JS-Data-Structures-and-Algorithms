'use strict';

function leftJoin(left, right){
  const joinedData = [];
  if (typeof(left) !== 'object' && typeof(right) !== 'object') return 'Not Valid Argument'

  left.buckets.forEach(bucket => {
    //console.log(bucket.head.value);
    let key = bucket.head.value[0];
    right.contains(key) ? joinedData.push([...bucket.head.value, right.get(key)]) : joinedData.push(bucket.head.value);    
  });
  return joinedData;
}

module.exports = leftJoin;