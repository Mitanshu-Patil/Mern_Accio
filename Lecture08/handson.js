
// let name = "Mitanshu";
// let age = 17;
// let address = "Amalner";
// let std = "12th";

// let par_name = "Sanjay"
// let par_age = 45;
// let par_address = "Pune"
// let par_occupation = "Teacher"

// const studentObj = {
//   name: "Mitanshu",
//   age: 17,
//   address: "Amalner",
//   std: "12th",
// };

// const parentObj = {
//   par_name: "Sanjay",
//   par_age: 45,
//   par_address: "Pune",
//   par_occupation: "Teacher",
// };

// console.log(studentObj.name);
// console.log(studentObj["name"]);
// const studentNameProperty = "name";
// console.log("Students name ", studentObj[studentNameProperty]);

// //updating the value
// studentObj.name = "Hitesh";
// console.log(studentObj.name);

// parentObj.par_occupation = "Farmer";
// console.log(parentObj.par_occupation);

// //delete the object
// delete parentObj.par_occupation;
// console.log(parentObj);

// const personObj = {
//   name: "Sanket",
//   age: 20,
//   city: "Mumbai",
// };

// personObj.hobby = "Music";
// console.log(personObj);

// let newcity = "city";
// personObj[newcity] = "Nagpur";
// console.log(personObj[newcity]);

// console.log(personObj.age);
// console.log(personObj["age"]);

// //error
// // console.log(personObj.address.firstLine);
// // if(personObj && personObj.address && personObj.address.firstLine){
// //     console.log(personObj.address.firstLine);
// // }

// //nested object

// const employeeObj = {
//   name: "Raju",
//   company: "AccioJob",
//   salary: "10LPA",
//   adress: {
//     adressline1: "Bhumkar Chowk",
//     adressline2: "Dange Chowk",
//     houseNumber: 31,
//     city: "pune",
//   },
// };

// console.log(`City of ${employeeObj.name} is ${employeeObj.adress.city}`);

// Array Of Object

// const studentObj = {
//   name: "Mitanshu",
//   age: 17,
//   address: "Amalner",
//   std: "12th",
// };

// const studentObjArr = [
//   studentObj,
//   {
//     name: "Mayur",
//     age: 17,
//     address: "Nashik",
//     std: "10th",
//   },
// ];

// // console.log(studentObjArr);

// // for(let i in studentObj){
// //     console.log(i,":",studentObj[i]);
// // }

// //complete array
// // for(let i in studentObjArr){
// //     console.log(i,":",studentObjArr[i]);
// // }

// // console.log("keys:",Object.keys(studentObj))
// // console.log("keys:",Object.values(studentObj))




// let studentObj1 = {
//   name: "Mitanshu",
//   age: 17,
//   gender: "male",
//   grade: "A",
//   address: {
//     adressline1: "Bhumkar Chowk",
//     adressline2: "Dange Chowk",
//     houseNumber: 31,
//     city: "Pune",
//   },
// };

// let studentObj2 = {
//   name: "Aarav",
//   age: 16,
//   gender: "male",
//   grade: "B",
//   address: {
//     adressline1: "MG Road",
//     adressline2: "Camp",
//     houseNumber: 102,
//     city: "Jalgaon",
//   },
// };

// let studentObj3 = {
//   name: "Sanya",
//   age: 15,
//   gender: "female",
//   grade: "A+",
//   address: {
//     adressline1: "Baner Road",
//     adressline2: "Balewadi",
//     houseNumber: 45,
//     city: "Amalner",
//   },
// };

// let studentObj4 = {
//   name: "Rohit",
//   age: 18,
//   gender: "male",
//   grade: "C",
//   address: {
//     adressline1: "FC Road",
//     adressline2: "Shivaji Nagar",
//     houseNumber: 87,
//     city: "Pune",
//   },
// };

// let studentObj5 = {
//   name: "Ishita",
//   age: 17,
//   gender: "female",
//   grade: "B+",
//   address: {
//     adressline1: "Karve Nagar",
//     adressline2: "Warje",
//     houseNumber: 210,
//     city: "Mumbai",
//   },
// };

// const classRoomArray = [
//   studentObj1,
//   studentObj2,
//   studentObj3,
//   studentObj4,
//   studentObj5,
// ];
// //checks are important..................
// for (let i = 0; i < classRoomArray.length; i++) {
//   if (
//     classRoomArray[i] &&
//     classRoomArray[i].address &&
//     classRoomArray[i].address.city
//   ) {
//     if (classRoomArray[i].address.city.toLowerCase() === "pune") {
//       console.log("Name:", classRoomArray[i].name);
//       console.log("Age:", classRoomArray[i].age);
//       console.log("House Number:", classRoomArray[i].address.houseNumber);
//       console.log(
//         "-----------------------------------------------------------"
//       );

//     //   console.log(
//     //   `Name = ${classRoomArray[i].name}, Age = ${classRoomArray[i].age}, House Number = ${classRoomArray[i].address.houseNumber}`
//     // );
//     }
//   }
// }


// // this keyword in objects..

// const carObj = {
//     car: "Mercedes GLS-220d",
//     color: "White",
//     milege: 10,
//     currenSpeed: 20,
//     running: function running() {
//         console.log("The car is running!")
//     }
// }
// carObj.running();



// const carObj1 = {
//     car: "Mercedes GLS-220d",
//     color: "White",
//     milege: 10,
//     currentSpeed: 20,
//     running: function running() {
//         //console.log(The car is running!)
//         console.log(`The car is running!! Current speed of car is : ${this.currentSpeed}`)  //using this keyword
//     }
// }

// carObj1.running();



const portfoObj = {
    name: "Mitanshu",
    skills: ["c++","js","Mern"],
    
    showSkills: function() {
        console.log(this.skills.join(' '));
    },

    addSkills: function(skillName){
        this.skills.push(skillName);
        console.log(this.skills.join(' '));
    }
}

portfoObj.showSkills();  
portfoObj.addSkills("JAVA"); 


//Create a object of Book include properties like name, author and price and print it
// const bookObj = {
//     name: "Wing of Fire",
//     author: "Dr. A. P. J. Abdul Kalam",
//     price: 350
// }
// console.log({ bookObj })

//Updating the property
// bookObj.price = 450;
// console.log({ bookObj })

//deleting a property
// delete bookObj.price;
// console.log({ bookObj })

// console.log("The book", bookObj["name"], "is written by ", bookObj["author"]);



//Ask Vaibhav Sir for this question
// const mobileObj = {
//     name: "Iphone 17 pro max",
//     specification: {
//         ram: "6GB",
//         Processor: "A17 Bionic Chip",
//         Storage: "256GB"
//     }
// }

// console.log(`${mobileObj.name} has a ${mobileObj.specification.Processor} inside for better performance and smooth experience`);

// for (let i in mobileObj) {
//     console.log(`${i} : ${mobileObj.specification[i]}`)   // return undefined for specification
// }



const movieObj = {
    movie1: {
        title: "Inception",
        director: "Christopher Nolan",
        year: 2010,
        rating: 8.8
    },
    movie2: {
        title: "Interstellar",
        director: "Christopher Nolan",
        year: 2014,
        rating: 8.6
    },
    movie3: {
        title: "The Dark Knight",
        director: "Christopher Nolan",
        year: 2008,
        rating: 9.0
    }
}

for (let key in movieObj) {
    if (movieObj[key].year > 2010) {
        console.log(`Title: ${movieObj[key].title}, Director: ${movieObj[key].director}`);
    }
}
