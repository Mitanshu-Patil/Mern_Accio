// ======================================String Starts Here================================================

// //strings using single quotes
// let str = 'a'    //type 1 of defining strings
// console.log(typeof (str));

// str = ['a', 'b', 'c'];
// console.log(typeof (str));

// str = 'abc';
// console.log(typeof (str));

// Strings using double quotes
// str = "ABC"        //type 2 of defining strings 
// console.log(typeof (str));

// strings using backticks
// str = 'abc';         //type 3 of defining strings
// console.log(typeof (str));

// case when we must use double inverted comma
// str = "Hi I'm Mitanshu"
// console.log({ str });

// case when we must use single inverted comma
// str = 'Hi this is "Java" classes';
// console.log({ str })

// case when we must use backticks 
// str = `Hi I'm Mitanshu, I have joined "Mern classes`;
// console.log({ str });

// let name = "Mitanshu"
// str = `Hello, I'm ${name}`;
// console.log(str);


// includes function.
// str = "hello"
// console.log(str.includes(str.includes('h')));
// console.log(str.includes(str.includes('hello')));


// replace function...first occurence
// console.log(str.replace("w","x"));
// console.log({str});


// replace function...
// console.log(str.replaceAll("w","x"));
// console.log({str});

// trim()==>remove all traiing and leading spaces

// str = " mitanshu ";
// console.log(str.trim());

// substring() ->gives substring
// str = `Hi I'm Mitanshu, I have joined "Mern classes`;
// console.log(str.substring(3,9));//gives substring starting from 3 and ending at 8(9 - 1)
// console.log(str.substring(3));//gives substring starting from index = 3 till end
// console.log(str.substring("3"));//
// console.log(str.substring(-3,-10));//gives empty
// console.log(str.substring(-3,10000));//(0,n)



// slice() -> almost same as substring,but changes in negative values
// console.log(str.slice(3));//(3,n)
// console.log(str.slice(3,5));//gives elements from index 3 to 4
// console.log(str.slice(-3));//last ke 3 index print karega
// console.log(str.slice());//full string
// console.log(str.slice(-100));//gives all elements in case the number is greater than the length of the String
// console.log(str.slice(-9,-3))
// console.log(str.slice(-3,-3))


// split() -> splits the string  based on the given charcter
// console.log(str.split(" "));
// const line = `Hi I'm Mitanshu, I have joined "Mern classes`;
// console.log(line.split(" "));

// Wrapper object

// const string = "Vaibhav";
// const number = 67;
// const bool = true;
// const object = {
//     name : "mitanshu",
// }

// console.log(string.__proto__);
// Strings Handson file 
// str = "Hello Mitanshu, Welcome to Acciojob for a great future ahead";
// console.log({ str })    //Print Hello Mayuresh

// console.log(str.includes("a"));    //Returns true
// console.log(str.includes("q"))     //Returns False

// console.log(str.split(" "));

// console.log(str.slice(3));    //Prints string from index 3 to n

// console.log(str.replace("m", "W"))      //replace the first value of m with W

// console.log(str.replaceAll("m", "W"))    //replace all the values of m with W

str = "     Hello, This is Mitanshu from Shirpur, Maharashtra     "

// console.log(str.trim());

// console.log(str.substring(5,12))

// console.log(str.substring(-5))

// console.log(str.slice(-10))

// console.log(str.slice(10,15))

// console.log(str.slice(10))

// console.log(str.split(" "))

// console.log(str.split(","))

// console.log(str.toUpperCase())

// console.log(str.toLowerCase())

//Objects using spread operator 
// const string = "Vaibhav";
// const number = 66;
// const bool = true;
// const obj = {
//     name: "Vaibhav"
// }
// const newObj = {
//     ...obj,
//     string,
//     bool
// }
// console.log({ newObj })


// const object = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// const object2 = {
//     b: 5,
//     c: 6,
//     d: 7
// }
// const merged = { ...object, ...object2 }
// console.log({ merged })

// const arr = [10, 20, 30, 40, 50, 60];
// const arr2 = { ...arr };
// console.log({ arr2 });


const student = {
    name: "Amit",
    age: 21,
    grade: "B"
};

const updatedStudent = {
    ...student,
    grade: "A"
};

console.log({ updatedStudent });
