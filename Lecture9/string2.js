
//Camel Case

// let str = "student first name";
// str = str.toLowerCase();
// let space = false;
// let result = "";
// function camelCase(str){
// for(let i = 0; i < str.length;i++){
//     if(str[i] == " "){
//         space = true;
//     }
//     else if(space){
//          result = result + str[i].toUpperCase();
//          space = false;
//     }
//     else{
//         result = result + str[i];
//     }

// }
//     return result;
// }

// console.log(camelCase(str));




// //snake case.........
// let str = "student first name";
// str = str.toLowerCase();
// let result = "";
// function snakeCase(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == " ") {
//       result = result + "_";
//     } else {
//       result = result + str[i];
//     }
//   }
//   return result;
// }

// console.log(snakeCase(str));

// object main push karo.....hw

//reverse...n - i - 1in forward loop
// let str = "mitanshu";
// str = str.split('');
// let start = 0;
// let end = str.length - 1;

// while(start < end){
//     let temp = str[start];
//     str[start] = str[end];
//     str[end] = temp;
//     start++;
//     end--;
// }
// let reverse = str.join('');
// console.log(reverse);


//palindrome...
//n/2 and math.floor...
// let str1 = "madam1";
// function palindromeString(str1){
//     let palindrome = true;
//    for(let i = 0; i <str1.length;i++){
//     if(str1[i] !== str1[str1.length - 1 - i]){
//         palindrome = false;
//         break;
//     }
//    }
//    if(palindrome){
//     console.log("palindrome");
//    }
//    else{
//     console.log("not palindrome");
//    }
// }

// palindromeString(str1)

//count Words
// let str2 = "mitanshu sanjay patil ";

// function countWords(str2){
//     let word = str2.split(" ");
//     return word.length;

// }
// console.log(countWords(str2));


//first non reapeating character


// let str = "nayan";

// function firstNonRepeating(str) {
//     for (let i = 0; i < str.length; i++) {
//         let isUnique = true;
//         for (let j = 0; j < str.length; j++) {
//             if (i !== j && str[i] === str[j]) {
//                 isUnique = false;
//                 break; 
//             }
//         }
//         if (isUnique) {
//             console.log(str[i]); 
//         }
//     }
//     return 0; 
// }

// firstNonRepeating(str); 


//longest word

// let str = "sanketttt Patil";

// function longestWord(str){
//        str = str.trim().split(" ");
//        let max = str[0];
//       for(let i = 0; i < str.length;i++){
//         if(str[i].length > max.length){
//             max = str[i];
//         }
//       }
//       return max;
// }

// console.log(longestWord(str));

//hw

