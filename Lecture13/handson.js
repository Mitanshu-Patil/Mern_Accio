//Linear Search
// let arr = [6,5,4,-8,-9,10];
// let target = 8;

// function linearSearch(arr,target){
//         for(let i = 0; i < arr.length;i++){
//             if(arr[i] == target){
//                 return i;
//             }
//         }

//    return -1;
// }
// console.log(linearSearch(arr,target));

//find the first occurence and last occurence in sequence

// let arr = [4, 5, 9, 9, 9, 9, 9,9, 7, 3];
// let index = -1;

// function occurenceOfNumber(arr) {
//     let lastindex;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 9) {
//       if (index == -1) {
//         index = i;
//       }

//       lastindex = i;
//     }
//   }
//   console.log(index,lastindex);
// }

// occurenceOfNumber(arr);

// let arr = [3, 5, 2, 5, 7, 5, 2, 3, 5, 7];
// function findMaxFreqElement(arr) {
//   let maxFreq = 0;
//   let maxElem = arr[0];

//   //  Find element with maximum frequency
//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count++;
//       }
//     }

//     if (count > maxFreq) {
//       maxFreq = count;
//       maxElem = arr[i];
//     }
//   }

//   //  Find first occurrence
//   let first = -1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === maxElem) {
//       first = i;
//       break;
//     }
//   }

//   //  Find last occurrence
//   let last = -1;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] === maxElem) {
//       last = i;
//       break;
//     }
//   }

//   console.log("Element:", maxElem);
//   console.log("Frequency:", maxFreq);
//   console.log("First Occurrence Index:", first);
//   console.log("Last Occurrence Index:", last);
// }

// // Example

// findMaxFreqElement(arr);

//Binary Search

// let N = 81;
// function squareRoot(N) {
//   let low = 0;
//   let high = N;

//   while (low <= high) {
//     let mid = Math.floor(low + (high - low) / 2);
//     if (mid ** 2 == N) {
//       return mid;
//     } else if (mid ** 2 > N) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }
//   return -1;
// }

// let sqrt = squareRoot(N);
// if (sqrt != -1) {
//   console.log("square root of " + N + " is " + sqrt);
// } else {
//   console.log(N + "is not a perfect square");
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let target = 10;

// function BinarySearch(arr, target) {
//   let low = 0;
//   let high = arr.length - 1;

//   while (low <= high) {
//     let mid = Math.floor(low + (high - low) / 2);

//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }

//   return -1;
// }

// console.log(BinarySearch(arr, target));

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  // ascending
// // let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];  // descending
// let target = 10;

// function OrderAgnosticBinarySearch(arr, target) {
//   let low = 0;
//   let high = arr.length - 1;

//   let isAscending = arr[low] < arr[high];

//   while (low <= high) {
//     let mid = Math.floor(low + (high - low) / 2);

//     if (arr[mid] === target) {
//       return mid;
//     }

//     if (isAscending) {

//       if (target < arr[mid]) {
//         high = mid - 1;
//       } else {
//         low = mid + 1;
//       }
//     } else {

//       if (target > arr[mid]) {
//         high = mid - 1;
//       } else {
//         low = mid + 1;
//       }
//     }
//   }

//   return -1;
// }

// console.log(OrderAgnosticBinarySearch(arr, target));

// let arr = [1,2,6,6,11,11,11,15];
// let target = 11;

// function BinarySearch(arr, target) {
//   let low = 0;
//   let high = arr.length - 1;
//   let index = -1;

//   while (low <= high) {
//     let mid = Math.floor(low + (high - low) / 2);

//     if (arr[mid] === target) {
//       index = mid;
//       high =  mid - 1;
//     } else if (arr[mid] < target) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }

//   return index;
// }

// console.log(BinarySearch(arr, target));

// let arr = [1,2,6,6,11,11,11,15];
// let target = 11;

// function BinarySearch(arr, target) {
//   let low = 0;
//   let high = arr.length - 1;
//   let index = -1;

//   while (low <= high) {
//     let mid = Math.floor(low + (high - low) / 2);

//     if (arr[mid] === target) {
//       index = mid;
//       low =  mid + 1;
//     } else if (arr[mid] < target) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }

//   return index;
// }

// console.log(BinarySearch(arr, target));

// let arr = [1,2,6,6,11,11,11,15];
// let target = 11;

// function findFirstAndLast(arr, target) {
//   let first = -1, last = -1;
//   let low = 0, high = arr.length - 1;

//   // 🔹 First occurrence
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);

//     if (arr[mid] === target) {
//       first = mid;
//       high = mid - 1;   // keep searching left
//     } else if (arr[mid] < target) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }

//   low = 0; high = arr.length - 1; // reset for last search

//   // 🔹 Last occurrence
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);

//     if (arr[mid] === target) {
//       last = mid;
//       low = mid + 1;    // keep searching right
//     } else if (arr[mid] < target) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }

//   return [first, last];
// }

// console.log(findFirstAndLast(arr, target)); // [4, 6]

// // ceiling of a number

// let arr = [2,3,5,9,14,16,18];
// let target = 10;

// function BinarySearch(arr, target) {
//   let low = 0;
//   let high = arr.length - 1;

//   while (low <= high) {
//     let mid = Math.floor(low + (high - low) / 2);

//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }

//   return arr[low]; //low for index
// }

// console.log(BinarySearch(arr, target));

//floor of a number
// let arr = [2,3,5,9,14,16,18];
// let target = 10;

// function BinarySearch(arr, target) {
//   let low = 0;
//   let high = arr.length - 1;

//   while (low <= high) {
//     let mid = Math.floor(low + (high - low) / 2);

//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }

//   return high;
// }

// console.log(BinarySearch(arr, target));

// let letters = ['c', 'f', 'j'];
// let target = 'c';

// function nextGreatestLetter(arr, target) {
//   let low = 0;
//   let high = arr.length - 1;

//   while (low <= high) {
//     let mid = Math.floor(low + (high - low) / 2);

//     if (arr[mid] <= target) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }

//   // if low goes out of bounds, wrap around to first element
//   return arr[low % arr.length];
// }

// console.log(nextGreatestLetter(letters, target));

//lower bound

// let arr = [2,3,5,5,9,14,16,18];
// let target = 5;

// function BinarySearch(arr, target) {
//   let low = 0;
//   let high = arr.length;

//   while (low < high) {
//     let mid = Math.floor(low + (high - low) / 2);
//      if (arr[mid] < target) {
//       low = mid + 1;
//     } else {
//       high = mid;
//     }
//   }

//   return low;
// }

// console.log(BinarySearch(arr, target));

// let arr = [2,3,5,5,9,14,16,18];
// let target = 4;

// function BinarySearch(arr, target) {
//   let low = 0;
//   let high = arr.length;

//   while (low < high) {
//     let mid = Math.floor(low + (high - low) / 2);
//      if (arr[mid] <= target) {
//       low = mid + 1;
//     } else {
//       high = mid;
//     }
//   }

//   return arr[low];
// }

// console.log(BinarySearch(arr, target));

//infinite binary search
// function binarySearchInfinite(arr, target) {
//   let low = 0;
//   let high = 1;

//   // Expand range until target is within [low, high]
//   while (high < arr.length && arr[high] < target) {
//     low = high;
//     high = high * 2;
//     if (high >= arr.length) {
//       high = arr.length - 1;
//     }
//   }

//   // Normal binary search
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);

//     if (arr[mid] === target) return mid;
//     if (arr[mid] < target) low = mid + 1;
//     else high = mid - 1;
//   }

//   return -1; // Not found
// }

// // Example
// let arr = [2, 3, 5, 9, 14, 16, 18, 25, 30, 40, 50, 60];
// let target = 14;

// console.log(binarySearchInfinite(arr, target)); // Output: 4

//Set in js
//set gives the unique elements in the array

let set = new Set([1,2,3,3,6,6,7]);
// console.log({set});

// method to add element in set
set.add(200);
set.add(54);
set.add(365);
console.log({set});

// method to check if a number is in set or not
console.log("checking if 200 is in set?",set.has(200));
console.log("checking if 200 is in set?",set.has(2000));

//size
console.log(set.size);

console.log(set);
console.log(set.delete(200));
console.log(set);

//clear
// set.clear();
// console.log(set);


//for of loop

for(let i  of set){
  console.log(i);
}


//for each
set.forEach((element)=>{
  console.log(element);
})


/* Remove duplicates from the array */
let array = [2,3,4,1,0,1,2,3,4,5,10];
//o/p: 2,3,4,1,0,5,10

let set1 = new Set(array);
console.log(set1);

let set2 = new Set([...array]);
console.log(set2);

let set3 = new Set([...array]);
let arrr = [...set3];
console.log(arrr);

console.log(array,set1,set2,arrr);


//map in js
// map always maintains insertion order
let map = new Map([["name1","mitanshu"],["name2","mitanshu"]]);
console.log(map);

map.set("name3","komal");
console.log(map);

//checking if a key is present or not
console.log("checking if `name1` is present or not?", map.has("name1"));

//getting the value of a specific key
console.log("Value of `name2` key: ", map.get("name2"));



//deleting a key in map
console.log("Deleting `name2`: ", map.delete("name2"));
console.log(map);

//for of

for(let [key,value] of map){
  console.log(key,value);
}

for(let i of map){
  console.log(i[0],i[1]);
}

map.forEach((element)=>{
  console.log(element);
})

map.set("name5","ganesh");
console.log(map);
//map with spread opertor
let newmap = [...map];
console.log(newmap) 