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
// let arr = [1, 2, 3, 4, 5];
// let k = 8;

// function rightRotate(arr, k) {
//   k = k % arr.length;

//   for (let j = 0; j < k; j++) {
//     let copy = arr[arr.length - 1];
//     let prev = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//       let temp = arr[i];
//       arr[i] = prev;
//       prev = temp;
//     }

//     arr[0] = copy;
//   }
//   return arr;
// }

// console.log(rightRotate(arr, k));

// let arr = [-1, 5, -3, 2, -1, 3];

// function maxSubArray(arr) {
//   let max = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     let res = [];
//     let start = 0;
//     let end = 0;
//     for (let j = i; j < arr.length; j++) {
//       res.push(arr[j]);
//       console.log(res);
//       sum = sum +  arr[j];
//       if (sum > max) {
//         max = sum;
//         start = 0;
//         end = i;
//       }
//     }
//   }

//   return max;
// }

// console.log("final max: " + maxSubArray(arr));

// function findMaxSumArray(arr) {
//     let maxSum = arr[0];
//     let start = 0;
//     let end = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let subarraysum = 0;
//         for (let j = i; j < arr.length; j++) {
//             subarraysum += arr[j];
//             if (subarraysum > maxSum) {
//                 maxSum = subarraysum;
//                 start = i;
//                 end = j;
//             }
//         }
//     }

//     // Print the subarray and its sum
//     console.log(`Subarray with maximum sum: [${arr.slice(start, end + 1)}], Sum: ${maxSum}`);
// }

// let arr = [-1, 5, -3, 2, -1, 3];
// findMaxSumArray(arr);

// function findMaxSumArray(arr) {
//     let maxSum = arr[0];
//     let start = 0;
//     let end = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let subarraysum = 0;
//         for (let j = i; j < arr.length; j++) {
//             subarraysum += arr[j];
//             if (subarraysum > maxSum) {
//                 maxSum = subarraysum;
//                 start = i;
//                 end = j;
//             }
//         }
//     }

//     console.log(`Subarray with maximum sum: ${maxSum}`);
// console.log(Sum of Subarray from ${arr.slice(i, j)} is ${maxSum})
// }

// let arr = [-1, 5, -3, 2, -1, 3];
// findMaxSumArray(arr);

// function findSumEqualtoK(arr, k) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let sum = 0;
//         let subarray = [];
//         maxlength = 0;
//         for (let j = i; j < arr.length; j++) {
//             sum = sum + arr[j];
//             subarray.push(arr[j]);
//             if (sum === k) {
//                 console.log({ subarray });
//                 length = subarray.length;
//                 console.log(length);
//                 if(maxlength > length)
//                   length = maxlength;
//                   count++
//             }

//         }
//     }
//     console.log({ count })
//     console.log(length - 1)
// }
// let arr = [1, 2 - 3, 0, 1, -1, 1];
// let k = 0
// findSumEqualtoK(arr, k)

function findSumEqualtoK(arr, k) {
  let count = 0;
  let maxlength = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    let subarray = [];
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      subarray.push(arr[j]);
      if (sum === k) {
        console.log({ subarray });
        let length = subarray.length;
        if (maxlength < length) {
          maxlength = length;
          highsubarray = subarray;
        }
        count++;
      }
    }
  }

  console.log({ count });
  console.log(
    `Max length of subarray with sum k: ${maxlength},[${highsubarray}]`
  );
}

let arr = [1, 2, -3, 0, 1, -1, 1];
let k = 0;
findSumEqualtoK(arr, k);
