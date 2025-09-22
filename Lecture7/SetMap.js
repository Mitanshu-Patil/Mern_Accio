// /* SET in JS */
// let set = new Set ([1,2,4,4,5,6]); // set always maintains insertion order

// // method to add element in set
// set.add(200);
// set.add(2);
// set.add(3);

// console.log(set);

// // method to check if a number is in set or not
// console.log("checking if 30 is in set?", set.has(30));
// console.log("checking if 200 is in set?", set.has(200));

// console.log("Size of set: " + set.size);

// console.log(set);
// console.log(set.delete(4), set);

// /* Remove duplicates from the array */
// let array = [2,3,4,1,0,1,2,3,4,5,10];
// //o/p: 2,3,4,1,0,5,10

// let set1 = new Set(array);
// let arr1 = [...set1];
// let arr11 = Array.from(set1);

// let set2 = new Set([...array]);
// let arr2 = [...set2];

// console.log({array, arr1, arr11, arr2});

// /* MAP in JS */
// let map = new Map([
//   ["name3", ["Sultan", "Sahil"]],
//   ["name4", "Sunny"]
// ]); // map always maintains insertion order

// map.set("name1", "Sultan");
// map.set("name2", "Sunny");

// //checking if a key is present or not
// console.log("checking if `name1` is present or not?", map.has("name1"));

// //getting the value of a specific key
// console.log("Value of `name2` key: ", map.get("name2"));

// //deleting a key in map
// console.log("Deleting `name4`: ", map.delete("name44"));

// //
// for(let i of map){
//   console.log("key: " + i[0], ", Value: " + i[1]);
// }

// console.log("Printing keys");
// for(let i of map.keys()){
//   console.log(i);
// }

// map.set("name1", "Sargar");

// const mapArr = [...map];
// console.log("Map converted into Array", {mapArr});

// /* Question: Find intersection & Union */
// let arr4 = [1,2,4,5,6,3], arr5 = [2,5,6,3,1,3];

// //intersection: 1,2,5,6,3 (order may be different - based on insertion order in Set/Map)
// //union: 1,2,3,4,5,6 (order may be different - based on insertion order in Set/Map)

// // const unionArr = [...new Set([...arr4, ...arr5])];
// const unionSet = new Set([...arr4, ...arr5]);
// const unionArr = [...unionSet];
// console.log({unionArr});

// // intersection
// let intersection = [];
// let arr4Set = new Set(arr4);

// for(let i = 0; i < arr5.length; i ++) {
//   if(arr4Set.has(arr5[i]))
//     intersection.push(arr5[i]);
// }

// intersection = [...new Set(intersection)];

// /* Another way to execute above line
// let intersectionSet = new Set (intersection);
// intersection = [...intersectionSet];
//  */

// console.log({intersection});

//find the intersection and union
let arr4 = [1, 2, 4, 5, 6],
  arr5 = [2, 5, 6, 3, 1, 3];

let combined = [...arr4, ...arr5];

let set = new Set([...combined]);
console.log(set);

//find the frequency of each element in the arr
let arr3 = [2, 3, 4, 1, 0, 1, 2, 3, 4, 5, 10];
let map = new Map();

for (let i = 0; i < arr3.length; i++) {
  if (map.has(arr3[i])) {
    map.set(arr3[i], map.get(arr3[i]) + 1);
  } else {
    map.set(arr3[i], 1);
  }
}

for (let [key, value] of map) {
  console.log(key, value);
}

for (let key of map.keys()) {
  console.log(key, map.get(key));
}
console.log("==============");
let obj = {};
for (let key of map.keys()) {
  obj[`${key}`] = map.get(key);
}
console.log(obj);

/* Question: Remove Duplicates from an array and print the array */
arr = [1, 2, 3, 2, 3, 5, 1, 3, 2];
console.log([...new Set(arr)]);

/* Find the frequency of all words in a paragraph (only spaces, A-Z & a-z letters will be there) */
let paragraph =
  "Hello how are you How was your day Did you eat hoW did you find that";

let words = paragraph.trim().toLowerCase().split(" ");

let wordsMap = new Map();

for (let i = 0; i < words.length; i++) {
  wordsMap.set(words[i], (wordsMap.get(words[i]) || 0) + 1);
  /* OR THIS
  if(wordsMap.has(words[i])){
    wordsMap.set(words[i], wordsMap.get(words[i]) + 1);
  } else {
    wordsMap.set(words[i], 1);
  }
 */
}

let wordsFreq = {};

for (let [key, value] of wordsMap) {
  wordsFreq[key] = value;
}
console.log(wordsFreq);

// let wordfreq = {};
// for(let [key,value] of wordsMap){
//   wordfreq[`${key}`] = value;
// }
// console.log(wordfreq)

let a = "silent",
  b = "listen";

function isAnagram(a, b) {
  if (a.length != b.length) return false;

  let freqObj = {};

  for (let i = 0; i < a.length; i++) {
    freqObj[a[i]] = (freqObj[a[i]] || 0) + 1;
  }

  for (let i = 0; i < b.length; i++) {
    if (!freqObj[b[i]]) return false;
    freqObj[b[i]] = freqObj[b[i]] - 1;
  }

  for (let value of Object.values(freqObj)) if (value) return false;

  return true;
}

console.log(isAnagram(a, b));


//Recursion 