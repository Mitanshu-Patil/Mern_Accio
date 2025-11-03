// Nested Arrays
// let arr = [1, [2, 3], 4, 5, [6, 95, 71]];
// console.log(arr[4][2]);

//print nested arrays
// let arr = [[2, 3], [3, 4], [4, 5]];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//print the rows of the nested array
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// for(let i = 0; i < arr.length;i++){
//     console.log(arr[i]);
// }

// 2d array traverse and acccess each element
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// for(let i = 0; i < arr.length;i++){
//     for(let j = 0; j < arr[i].length;j++){
//         console.log(arr[i][j]);
//     }
// }

// 2d array traverse and acccess each element
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// let res = [];
// for(let i = 0; i < arr.length;i++){
//     for(let j = 0; j < arr[i].length;j++){
//         res.push(arr[i][j]);
//     }
// }

// console.log(res);

//traverse using for of loop just print row value
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// for(value of arr){
//     console.log({value});
// }

//traverse row as well as column
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// for(row of arr){
//    for(col of row){
//     console.log(col)
//    }
// }

///print multidimensional array only
// let arr = [[2, 3], 100, [4, 5], "hello"];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length === undefined) {
//         console.log(arr[i]);
//     } else {
//         for (let j = 0; j < arr[i].length; j++) {
//             console.log(arr[i][j]);
//         }
//     }
// }

//Method - 2 Using typeOf Keyword
// for(let i =0;i<arr.length; i++){
//     if(typeof arr[i] === 'number'){
//         console.log(arr[i]);
//     }else{
//         for(let j =0; j<arr[i].length; j++){
//             console.log(arr[i][j]);
//         }
//     }
// }

//Method 3 - using isArray() method
//isArray(arr) -> returns boolean value determining if variable "arr" is an array or not
// for (let i = 0; i < arr.length; i++) {
//     if (!Array.isArray(arr[i])) {
//         console.log(arr[i]);
//     } else {
//         for (let j = 0; j < arr[i].length; j++) {
//             console.log(arr[i][j]);
//         }
//     }
// }

// //Write a function that takes nested arrays as an argument and tells if this nested array is a matrix or not
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// function isMatrics(arr){
//     if(!Array.isArray(arr)) return false;
//     if(!Array.isArray(arr[0])) return false;

//     let rowlength = arr[0].length;

//     for(let i = 0; i < arr.length;i++){
//         if(arr.length !== rowlength){
//             return false;
//         }
//     }
//     return true;
// }

//  console.log(isMatrics(arr));

//Write a function that takes nested arrays as an argument and tells if this nested array is a matrix or not
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// function isMatrics(arr){
//     if(!Array.isArray(arr)) return false;
//     if(!Array.isArray(arr[0])) return false;

//     let rowlength = arr[0].length;

//   for(Array of arr){
//     if(Array.length !== rowlength){
//         return false;
//     }
//   }
//     return true;
// }

//  console.log(isMatrics(arr));

//Write a function to calculate product of sum of each rows

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// function proSumMatrics(arr){
// let product = 1;
// for(let i = 0; i <arr.length;i++){
//     let sum = 0;
//     for(let j = 0; j < arr[i].length;j++){
//     sum = sum + arr[i][j];
//     }
//     product = product * sum;
//   }

//   return product;
// }

// console.log(proSumMatrics(arr));

//Write a function to calculate the sum of nested array

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// function proSum(arr){
//  let sum = 0;
// for(let i = 0; i <arr.length;i++){
//     for(let j = 0; j < arr[i].length;j++){
//     sum = sum + arr[i][j];
//     }
//   }

//   return sum;
// }

// console.log(proSum(arr));

//Subarrays
/*arr = [1, 2, 3, 4, 5];
subarrays = [[1], [2], [3], [4], [5]];
          =[1, 2], [2, 3], [3, 4], [4, 5];
          =[1, 2, 3], [2, 3, 4], [3, 4, 5];
          =[1, 2, 3, 4], [2, 3, 4, 5];
          =[1, 2, 3, 4, 5];
*/

// const arr = [1, 2, 3, 4];
// //print all subarrays
// let size = arr.length;

// for (let i = 0; i < size; i++) {
//   let subarray = "";
//   for (let j = i; j < size; j++) {
//     subarray =  subarray +  arr[j] + " ";
//     console.log(subarray);
//   }
// }

// const arr = [1,2,3,4,5];


// for(let i = 0; i < arr.length;i++){
//     let res = [];
//     for(let j = i; j < arr.length;j++){
//     res.push(arr[j]);
//     console.log(res);
//     }
// }

//print the sum of subarray

// const arr = [1,2,3,4,5];
// let totalsum = 0;

// for(let i = 0; i <arr.length;i++){
//     let res = [];
//     let sum  = 0;
//     for(let j = i; j < arr.length;j++){
//      sum = sum + arr[j];
//      res.push(sum);
//      console.log(sum);

//      totalsum = totalsum + sum;

//     }

// let sum1 = 0;
// for (let k = 0; k < res.length; k++) {
//     sum1 = sum1 + res[k];
// }
// console.log("total sum = " + sum1);

// console.log("total = "+totalsum);
// }

//  console.log("total = "+totalsum);

// find the primary diagonal sum
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     if (i == j) {
//       sum = sum + arr[i][j];
//     }
//   }
//   console.log(sum);
// }

//optimised solution

// let n = arr[0].length;
// let sum = 0;
// for (let i = 0; i < n; i++) {
//   sum = sum + arr[i][i];
// }

//secondary diagonal
// i + j == n-1
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [6, 8, 6],
// ];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     if (i + j == (arr.length - 1)) {
//       sum = sum + arr[i][j];
//     }
//   }
//   console.log(sum);
// }

//optimised solution

// let sum = 0;
// let n = arr[0].length;
// for(let i = 0 ; i < arr.length;i++){
//          sum = sum + arr[i][n - i - 1];
// }
// console.log(sum);

//Write a function to print the odd-numbered column elements of a matrix

// const arr = [
//   [1, 2, 3, 4, 5, 6],
//   [2, 6, 12, 43, 3, 5],
//   [8, 10, 34, 23, 12, 8],
// ];

// for (let j = 0; j < arr[0].length; j++) {
//   for (let i = 0; i < arr.length; i++) {
//     if (j % 2 !== 0) {
//       console.log(arr[i][j]);
//     }
//   }
// }

// let col = arr[0].length;
// let row = arr.length;
// for (let j = 0; j < arr[0].length; j++) {
//   if (j % 2 == 0) continue;
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i][j]);
//   }
// }

//sum of odd columns
// const arr = [
//   [1, 2, 3, 4, 5, 6],
//   [2, 6, 12, 43, 3, 5],
//   [8, 10, 34, 23, 12, 8],
// ];

// function oddColSum(arr) {
//   // const rows = arr.length;
//   // const cols = arr[0].length;

//   for (let j = 0; j < arr[0].length; j++) {

//     if (j % 2 === 0) continue;

//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum = sum + arr[i][j];
//     }
//     console.log({sum});
//   }
// }

// oddColSum(arr);

//print the sum of subarray

// let arr = [1, 2, 3, 4, 5];
// let totalsum = 0;
// for (let i = 0; i < arr.length; i++) {
//   let sum = 0;
//   for (let j = i; j < arr.length; j++) {
//     sum = sum + arr[j];
//     totalsum = totalsum + sum;
//   }
// }
// console.log({ totalsum });

//Subarrays
/*arr = [1, 2, 3, 4, 5];
subarrays = [[1], [2], [3], [4], [5]];
          =[1, 2], [2, 3], [3, 4], [4, 5];
          =[1, 2, 3], [2, 3, 4], [3, 4, 5];
          =[1, 2, 3, 4], [2, 3, 4, 5];
          =[1, 2, 3, 4, 5];
*/

// const arr = [1, 2, 3, 4, 5];
// let totalsum = 0;
// function totalsumCode(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let res = [];
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       sum = sum + arr[j];
//       res.push(sum);
//       console.log("subarry = " + sum);
//       totalsum = totalsum + sum;
//     }

//   }
//   return totalsum;
// }
// console.log(totalsumCode(arr));

// time -> O (n * n);
// space -> O (1)

// Ques: Given a 2d matrix, reverse each odd columns and print it
// Input =====>
// let arr = [
//   [1, 2, 3, 4, 5, 6],
//   [2, 6, 12, 43, 3, 5],
//   [8, 10, 34, 23, 12, 8],
// ];

// function reverseOdd(arr) {
//   for (let j = 0; j < arr[0].length; j++) {
//     if (j % 2 == 0) continue;
//     let i = 0;
//     let k = arr.length - 1;
//     while (i < k) {
//       let temp = arr[i][j];
//       arr[i][j] = arr[k][j];
//       arr[k][j] = temp;
//       i++;
//       k--;
//     }
//   }
//   return arr;
// }

// console.log(reverseOdd(arr));

// let arr = [1,4,3,7,9];
// let k = 9;

// for(let i= 0; i < arr.length; i++){
//     if(arr[i] == k){
//         arr.pop();
//     }
// }
// console.log(arr);

// let arr = [1,4,3,7,9];

// for(let i = 0; i < arr.length;i++){
//     if(arr[i] == arr[arr.length - 1]){
//        arr.pop();
//     }
// }
// console.log(arr);

// let arr = [1, 4, 3, 7, 9];
// arr.splice(4,1);
// arr.splice(-1);
// console.log(arr);

// let arr = [1, 2, 3, 4];
// arr.shift();
// //   let arr1 = arr.shift();
// console.log(arr)

// let arr = [1, 2, 3, 4];

// for(let i = 0; i < arr.length  ;i++){
//     arr[i] = arr[i + 1];
// }
// arr.length = arr.length - 1;
// console.log(arr);

//right

// let arr = [1, 2, 3, 4];

// for (let i = arr.length; i > 0; i--) {
//     arr[i] = arr[i - 1];
// }
// arr[0] = 7;

// console.log(arr);

//left rotation k=1
//let arr = [1,2,3,4,5] ===>[2,3,4,5,1]

// let arr = [1, 2, 3, 4, 5];

// let copy = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i + 1];
// }

// arr[arr.length - 1] = copy;

// console.log(arr);



//right rotation k=1..
// let arr = [1,2,3,4,5] ===>[5,1,2,3,4]

// let arr = [1, 2, 3, 4, 5];
// let copy = arr[arr.length - 1];
// for (let i = arr.length - 1; i > 0; i--) {
//   arr[i] = arr[i - 1];
// }

// arr[0] = copy;

// console.log(arr);



//right rotation k=1
// let arr = [1,2,3,4,5] ===>[5,1,2,3,4]

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



//left rotation by K 
// let arr = [1, 2, 3, 4, 5];
// let k = 8;

// function leftRotate(arr, k) {
//   k = k % arr.length; 

//   for (let j = 0; j < k; j++) {
//     let copy = arr[arr.length - 1];
//     for (let i = arr.length - 1; i > 0; i--) {
//       arr[i] = arr[i - 1];
//     }
//     arr[0] = copy;
//   }
//   return arr; 
// }

// console.log(leftRotate(arr, k));







// let arr = [1, 2, 3, 4, 5];
// let k = 8;

// function rightRotate(arr, k) {
//   k = k % arr.length; 

//  let arr = [1, 2, 3, 4, 5];
// let copy = arr[arr.length - 1];
// let prev = arr[0];
// for (let i = 0; i < arr.length; i++) {
//    let temp = arr[i];
//    arr[i] = prev;
//    prev = temp;
// }
// arr[0] = copy;
//   return arr; 
// }

// console.log(rightRotate(arr, k));


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function largestAltitude(arr) {
   
   let result = 0;
   let newarr = [];
   newarr.push(0);
  for(let i = 0; i < arr.length;i++){
    result = result + arr[i];
    newarr.push(result);
  }
  //  console.log(newarr);
   let max = newarr[0];
   for(let j = 0; j < newarr.length;j++){
    if( newarr[j] > max ){
      max = newarr[j];
    }
    
  }
  return max;

}

readline.question('', n => {
  readline.question('', gain => {
    gain = gain.split(' ').map(Number);
    let maxaltitude = largestAltitude(gain);
    console.log(maxaltitude);
    readline.close();
  });
});


function largestAltitude(gain) {
  let current = 0;
  let highest = 0;

  for (let i = 0; i < gain.length; i++) {
    current =  current +  gain[i];      
    if (current > highest) {
      highest = current;     
    }
  }

  return highest;
}

