// // let n  = 123;
// let start = 0;
// let end = 160
// function armstrongNumber(n){
//     let org = n;
//     let temp = n;
//     let count = 0;

//     while(temp > 0){
//         count++;
//         temp = Math.floor(temp/10);
//     }

//     temp = n;
//     let sum = 0;

//     while(temp > 0){
//         let digit = temp % 10;
//         sum = sum + digit**count;
//         temp = Math.floor(temp/10);
//     }

//     // if(sum == org){
//     //   console.log("A");
//     // }
//     // else{
//     //     console.log("NA");
//     // }
//     return sum == org;

// }
// // armstrongNumber(n)

// function inRange(start,end){
//    for(let i = start; i < end;i++ ){
//           if(armstrongNumber(i)){
//             console.log(i);
//           }
//    }

// }
// inRange(start,end);

// prime Number

// let n = 5;
// function isPrime(n){
//     if(n <=1 ) return false;
//     if(n == 2) return true;
//     if(n % 2 == 0) return false;
//     for(let i = 3 ; i <= Math.sqrt(n);i = i + 2 ){
//         if(n % i === 0) return false;
//     }
//     return true;
// }

// console.log(isPrime(n));

// let n = 5;
// let start = 0;
// let end = 160;
// function isPrime(n) {
//   if (n <= 1) return false;
//   if (n == 2) return true;
//   if (n % 2 == 0) return false;
//   for (let i = 3; i <= Math.pow(n, 0.5); i = i + 2) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// // console.log(isPrime(n));

// function rangePrime(start, end) {
//   for (let i = start; i <= end; i++) {
//     if (isPrime(i)) {
//       console.log(i);
//     }
//   }
// }

// rangePrime(start, end);

//switch case

let n = 80;
switch (true) {
  case n > 90:
    console.log("Excellent");
    break;
  case n > 80 && n <= 90:
    console.log("Good");
    break;
  case n > 70 && n <= 80:
    console.log("Fair");
    break;
  case n > 60 && n <= 70:
    console.log("meets Expectation");
    break;
  default:
    console.log("below xpectation");
}
