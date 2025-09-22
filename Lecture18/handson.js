//nth fibonacci number

// function fibo(n){
//     if(n < 2){
//       return n;
//     }
//   return fibo(n-1) + fibo(n-2);
// }

// function fib(n) {
//   if (n < 2) return n;
//   return fib(n - 1) + fib(n - 2);
// }

// function fibonacciSeries(n) {
//   let series = [];
//   for (let i = 0; i < n; i++) {
//     series.push(fib(i));
//   }
//   return series;
// }

// console.log(fibonacciSeries(10));
// console.log(fibo(6));

//print 1 to 5

// function print(n) {
//   if (n == 5) {
//     console.log(5);
//     return;
//   }
//   console.log(n);
//   print(n + 1);
// }
// print(1);

// print 5 to 1

// function print(n){
//     if(n == 0){
//         return;
//     }
//     console.log(n);
//     print(n -1);
// }
// print(5);

// function print(n){
//     if(n == 0){
//         return;
//     }

//     print(n - 1);
//     console.log(n);
// }
// print(5);

// function printBoth(n){
//     if(n == 0){
//         return;
//     }
//     console.log(n);
//     printBoth(n - 1);
//     console.log(n);
// }
// printBoth(5);

//factorial

// function fact(n){
//   if(n <= 1){
//     return 1
//   }
//   return n * fact(n-1)
// }

// let ans = fact(5);
// console.log(ans);

// function sum(n) {
//   if (n === 0) {
//     return 0;
//   }
//   return n + sum(n - 1);
// }

// let ans = sum(5);
// console.log(ans);

// function sumDigit(n){
//     if(n === 0){
//         return 0
//     }
//     return (n % 10) + sumDigit(Math.floor(n/10));
// }
// let ans = sumDigit(1342);
// console.log(ans);

// function productDigit(n){
//     if(n % 10 === n){
//         return n
//     }
//     return (n % 10) * productDigit(Math.floor(n/10));
// }
// let ans = productDigit(1342);
// console.log(ans);

//n-- --n

// function fun(n){
//     if(n == 0){
//         return
//     }
//     console.log(n);
//     // fun(n--);stack overflow
//     fun(--n);
// }

// fun(5);

//reversed
// let sum = 0;
// let n = 1234;
// function reversed(n){
//     if(n==0){
//         return
//     }
//     let rem = n % 10;
//     sum = sum * 10 + rem;
//     reversed(Math.floor(n/10));

// }
// reversed(n)
// console.log(sum);

// function CountZero(n) {
//     return helper(n, 0);
// }

// function helper(n, c) {
//     if (n === 0) {
//         return c;
//     }
//     let rem = n % 10;
//     if (rem === 0) {
//         return helper(Math.floor(n / 10), c + 1);
//     }
//     return helper(Math.floor(n / 10), c);
// }

// console.log(CountZero(1020));

// function BinarySearch(arr, target, l, h) {
//   if (l > h) {
//     return -1;
//   }

//   let mid = Math.floor(l + (h - l) / 2);

//   if (arr[mid] === target) {
//     return mid;
//   }

//   if (target < arr[mid]) {
//     return BinarySearch(arr, target, l, mid - 1);
//   } else {
//     return BinarySearch(arr, target, mid + 1, h);
//   }
// }
// let arr = [1, 3, 5, 7, 9, 11];
// let target = 7;

// console.log(BinarySearch(arr, target, 0, arr.length - 1));

//array sorted or not
// let arr = [1, 2, 4, 8, 9, 12];

// function Sorted(arr, index) {
//     if (index === arr.length - 1) {
//         return true;
//     }
//     return arr[index] < arr[index + 1] && Sorted(arr, index + 1);
// }

// console.log(Sorted(arr, 0));

//Linear Search

function linearSearch(arr, target, index) {
  if (index === arr.length) {
    return -1;
  }
  if (arr[index] === target) {
    return index;
  }
  return linearSearch(arr, target, index + 1);
}

let arr = [10, 20, 30, 40, 50];
console.log(linearSearch(arr, 30, 0));

// function printTillN(N, i) {
// //Write your code here
// // if(i > N){
// //      return
// // }
// //   console.log(i);
// //   setImmediate(() => printTillN(N, i + 1));

// for(let i = 0; i < N;i++){
//   console.log(i);
// }
// }
//Lecture 18 reprepare.......