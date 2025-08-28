//left rotation k=1
//let arr = [1,2,3,4,5] ===>[2,3,4,5,1]

// let arr = [1, 2, 3, 4, 5];

// let copy = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i + 1];
// }

// arr[arr.length - 1] = copy;

// console.log(arr);

// Time Complexity --> O(n)
// Space Complexity --> O(1)

//left rotation by k element..

// let arr = [1, 2, 3, 4, 5];
// let k = 8;

// function leftRotate(arr, k) {
//   k = k % arr.length;

//   for (let j = 0; j < k; j++) {
//     let copy = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//       arr[i] = arr[i + 1];
//     }
//     arr[arr.length - 1] = copy;
//   }
//   return arr;
// }

// console.log(leftRotate(arr, k));

// Time Complexity --> O(n × n)
// Space Complexity --> O(1)

// right rotation k=1
// let arr = [1,2,3,4,5] ===>[5,1,2,3,4]

// let arr = [1, 2, 3, 4, 5];
// let k = 8;

// let copy = arr[arr.length - 1];
// for (let i = arr.length - 1; i > 0; i--) {
//   arr[i] = arr[i - 1];
// }

// arr[0] = copy;

// console.log(arr);

// right rotation k=1

// let arr = [1, 2, 3, 4, 5];
// let copy = arr[arr.length - 1];
// let prev = arr[0];
// for (let i = 0; i < arr.length; i++) {
//    let temp = arr[i];
//    arr[i] = prev;
//    prev = temp;
// }

// arr[0] = copy;

// console.log(arr);

//right rotation by k element..
let arr = [1, 2, 3, 4, 5];
let k = 8;

function rightRotate(arr, k) {
  k = k % arr.length;

  for (let j = 0; j < k; j++) {
    let copy = arr[arr.length - 1];
    let prev = arr[0];

    for (let i = 0; i < arr.length; i++) {
      let temp = arr[i];
      arr[i] = prev;
      prev = temp;
    }

    arr[0] = copy;
  }
  return arr;
}

console.log(rightRotate(arr, k));