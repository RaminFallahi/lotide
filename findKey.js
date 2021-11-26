const findKey = function(object, starsCallBack) {
  for (let i in object) {
    const i2 = object[i]; 
    if (starsCallBack (i2)) { console.log(i)
      return i
    }
  }
}
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
//   for (let item of array) {
//     results.push(callback(item));
//   }
//   return results;
// }
