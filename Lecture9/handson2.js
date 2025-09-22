// // //type of String
// // let str = "a";
// // console.log(typeof (str));

// // str = ['a','b','c'];
// // console.log(typeof (str));

// // str = 'abc';
// // console.log(typeof (str));

// // //Strings using double quotes,single quotes and backticks
// // str = "ABC";
// // str = 'ABC';
// // str = "Hi I'm Mitanshu"
// // console.log({ str });

// // //case when we must use backticks
// // str = `Hi I'm Mitanshu, I have joined "Mern classes`;
// // console.log({ str });

// // //includes function
// // str = "hello";
// // console.log(str.includes('h'));

// // //replace function change only first occurence
// // str = "hello";
// // console.log(str.replace("h","m"));

// // //replaceAll function
// // str = "hello"
// // console.log(str.replaceAll("l","o"));

// // //trim()==>remove all traiing and leading spaces
// // str = " mitanshu ";
// // console.log(str.trim());

// //substring()
// str = "javascript";
// // console.log(str.substring(start,end));
// console.log(str.substring(0,4));//gives substring starting from 0 and ending at 3(4 - 1)
// console.log(str.substring(3,9));//gives substring starting from 3 and ending at 8(9 - 1)
// console.log(str.substring(3));//gives substring starting from index = 3 till end
// console.log(str.substring(-3));//assume -3 equal to zero
// console.log(str.substring(-3,-10));//gives same empty
// console.log(str.substring(-3,10000));//0 to n
// console.log(str.substring(3,3));//empty
// console.log(str.substring(-9,-3));//empty
// console.log(str.substring(9,3));//it wiil print 3 to 8 index value

// //slice() -> almost same as substring,but changes in negative values

// console.log(str.slice(0, 4));   // "Java"   (from index 0 to 3)
// console.log(str.slice(4));      // "Script" (from index 4 to end)
// console.log(str.slice(-3));     // -3 → 10 - 3 = 7 → character "i"
// console.log(str.slice());//full string
// console.log(str.slice(-100));//gives all elements in case the number is greater than the length of the String
// console.log(str.slice(-9,-3))
// //Start = -9 → 10 - 9 = 1
// // End = -3 → 10 - 3 = 7
// // str.slice(1, 7)
// console.log(str.slice(-3,-3));//empty string
// // Start = -3 → 10 - 3 = 7
// // End = -3 → 10 - 3 = 7
// // str.slice(7, 7)

// //split() -> splits the string  based on the given charcter
// console.log(str.split(" "));
// const line = `Hi I'm Mitanshu, I have joined "Mern classes`;
// console.log(line.split(" "));

//Wrapper Object

// const string = "Mitanshu";
// const number = 67;
// const bool = true;
// const object = {
//     name: "mitanshu",
// }

// console.log(String.__proto__);

//indexOf method..
// let str = "JavaScript";
// let index = str.indexOf("a");
// console.log(index);

// let index = str.indexOf("a", 2); // start searching from index 2
// console.log(index);

// str = "I love JavaScript";
// console.log(str.indexOf("Java"));

//lastIndexOf method..........
// let str = "JavaScript";
//print last occurence index
// Find last occurrence of 'a'
// let lastIndex = str.lastIndexOf("a");
// console.log(lastIndex);

// Search 'a' backwards from index 2
// let lastIndex = str.lastIndexOf("a", 2);
// console.log(lastIndex);
// // Start at index 2 → "v" → not "a" → move left
// // Index 1 → "a" → found "a"

//  str = "I love JavaScript. Java is fun.";//print last occurence of java i.e 18 and first occurence is 7
// console.log(str.lastIndexOf("Java")); // 18

//===================spread & Rest Operator====================
//Destructiring==> unpack values from array and objects into seperate variables
//Array Destructuring
// let arr = [10,20,30];
// let [a,b,c] = arr;
// console.log(a,b,c);

// Skipping elements
// let arr = [10,20,30,40];
// let [a, ,c] = arr
// console.log(a,c);

//Default values
// const arr = [10];
// const [x = 1, y = 2] = arr;
// console.log(x, y);

//swapping vriables
// let a = 1, b = 2;
// [a, b] = [b, a];

// console.log(a); // 2
// console.log(b); // 1

//object destructuring

// const obj = { name: "mitanshu", age: 25 };

// const { namee, age } = obj;

// console.log(namee); // "mitanshu"
// console.log(age); // 25

//rest operator

// const arr1 = [1, 2, 3, 4];

// const [a, , c,...rest] = arr1;
// console.log(a,c,rest);

// const obj1 = { a: 1, b: 2, c: 3 };
// const { a, ...others } = obj1;
// console.log(a, others);

// const arr1 = [1, 2];
// const arr2 = [3, 4];

// const combined = [...arr1, ...arr2];

// console.log(combined);

// const obj3 = { a: 1, b: 2 };
// const obj4 = { c: 3, d: 4 };

// const combinedObj = { ...obj3, ...obj4 };

// console.log(combinedObj);

//Destructuring
// Purpose: Extract values from arrays or objects into separate variables.
// Uses [] for arrays and {} for objects on the left-hand side.
// const arr = [10, 20, 30];
// const [a, b] = arr; // destructuring
// console.log(a, b); // 10     20

// const obj = { name: "Alice", age: 25 };
// const { name, age } = obj; // destructuring
// console.log(name, age); // Alice 25

//rest
// Rest (...)
// Purpose: Collect remaining elements into a new array or object.
// Only used on the left-hand side in destructuring.
// const arr = [1, 2, 3, 4];
// const [x, y, ...rest] = arr;
// console.log(x, y);   // 1 2
// console.log(rest);   // [3, 4]

// Spread (...)
// Purpose: Expand elements of an array or object.
// Only used on the right-hand side of assignments or function calls.
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const combined = [...arr1, ...arr2];
// console.log(combined); // [1, 2, 3, 4]
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const merged = { ...obj1, ...obj2 };
// console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }

// let str = `I'm mitanshu, learning JavaScript!`;
// str = str.trim();
// function reverseFun(str) {
//   let reverse = "";
//   for (let i = 0; i < str.length; i++) {
//     reverse += str[str.length - i - 1];
//   }
//   return reverse;
// }
// function reverseByWords(str) {
//   let reversewords = "";
//   str = str.split(" ");
//   console.log(str);
//   for (let i = 0; i < str.length; i++) {
//     reversewords += reverseFun(str[str.length - i - 1]) + " ";
//   }
//   return reversewords.trim();
// }
// console.log(reverseByWords(str));

let str = `I'm mitanshu, learning JavaScript!`;

function reverseFun(str) {
  reverse = "";
  for (let i = 0; i < str.length; i++) {
    reverse = reverse + str[str.length - 1 - i];
  }
  return reverse.trim();
}

console.log(reverseFun(str));

// function reverseWordFun(str){
//     word = str.split(" ");
//     console.log(word);
//     reverseword = [];
//     for(let i = 0; i < word.length;i++){
//      reverseword.push(word[word.length - 1 - i]);
//     }
//      return reverseword.join(" ");

// }
// console.log(reverseWordFun(str));
