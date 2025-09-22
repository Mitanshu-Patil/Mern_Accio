
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



function minDeletionsToAnagram(s1, s2) {
  let map1 = new Map();
  let map2 = new Map();

  // Count frequency for s1
  for (let ch of s1) {
    map1.set(ch, (map1.get(ch) || 0) + 1);
  }

  // Count frequency for s2
  for (let ch of s2) {
    map2.set(ch, (map2.get(ch) || 0) + 1);
  }

  let deletions = 0;

  // Check all unique characters in both strings
  let allChars = new Set([...map1.keys(), ...map2.keys()]);

  for (let ch of allChars) {
    let freq1 = map1.get(ch) || 0;
    let freq2 = map2.get(ch) || 0;
    deletions += Math.abs(freq1 - freq2);
  }

  return deletions;
}

// Example usage:
console.log(minDeletionsToAnagram("tars", "star"));   // 0
console.log(minDeletionsToAnagram("tarzan", "star")); // 4












// function minDeletions(word1, word2) {
//   let deletions = 0;
//   let map1 = new Map();
//   let map2 = new Map();

//   for (let ch of word1) {
//     map1.set(ch, (map1.get(ch) || 0) + 1);
//   }

//   for (let ch of word2) {
//     map2.set(ch, (map2.get(ch) || 0) + 1);
//   }

//   let combined = new Set([...map1.keys(), ...map2.keys()]);

//   for (let ch of combined) {
//     let freq1 = map1.get(ch) || 0;
//     let freq2 = map2.get(ch) || 0;
//     deletions += Math.abs(freq1 - freq2);
//   }

//   return deletions;
// }

// var readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let inputArr = [];

// readline.on("line", function (line) {
//   inputArr.push(line.trim());

//   if (inputArr.length === 2) {
//     let word1 = inputArr[0];
//     let word2 = inputArr[1];
//     console.log(minDeletions(word1, word2));
//     readline.close();
//   }
// });
