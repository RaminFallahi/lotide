// const takeUntil = function(array, callback) {
//   const results = [];
//   for (let i = 0; i < array.length; i++) {
//     const itemInArray = array[i];
//     if (callback(itemInArray)) {
//       break;
//     }
//     results.push(itemInArray);   }
//     return results;
//   }
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]; 
const takeUntil = function(array , callback) {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    const itemInArray = array[i];
    if (callback(itemInArray)) {
      break;
    }
  }
}
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
console.log('---');
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
// [ 1, 2, 5, 7, 2 ]
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]