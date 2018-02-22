/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  //[2, 3, 1, 5, 6, 4], n - k
  let count = 0;

  preferences.forEach((v, i) => {
    let a = i + 1;  //1
    let b = preferences[i]; //2
    let c = preferences[b - 1]; //3
    
    if(a !== b && b !== c && a === preferences[c - 1]) {
      count++;
    }
  });

  return count/3;
};
