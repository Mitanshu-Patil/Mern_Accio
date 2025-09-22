//Set in js
//set gives the unique elements in the array

let set = new Set([1, 2, 3, 3, 6, 6, 7]);
// console.log({set});

// method to add element in set
set.add(200);
set.add(54);
set.add(365);
console.log({ set });

// method to check if a number is in set or not
console.log("checking if 200 is in set?", set.has(200));
console.log("checking if 200 is in set?", set.has(2000));

//size
console.log(set.size);

console.log(set);
console.log(set.delete(200));
console.log(set);

//clear
// set.clear();
// console.log(set);

//for of loop

for (let i of set) {
  console.log(i);
}

//for each
set.forEach((element) => {
  console.log(element);
});

/* Remove duplicates from the array */
let array = [2, 3, 4, 1, 0, 1, 2, 3, 4, 5, 10];
//o/p: 2,3,4,1,0,5,10

let set1 = new Set(array);
console.log(set1);

let set2 = new Set([...array]);
console.log(set2);

let set3 = new Set([...array]);
let arrr = [...set3];
console.log(arrr);

console.log(array, set1, set2, arrr);

//map in js
// map always maintains insertion order
let map = new Map([
  ["name1", "mitanshu"],
  ["name2", "mitanshu"],
]);
console.log(map);

map.set("name3", "komal");
console.log(map);

//checking if a key is present or not
console.log("checking if `name1` is present or not?", map.has("name1"));

//getting the value of a specific key
console.log("Value of `name2` key: ", map.get("name2"));

//deleting a key in map
console.log("Deleting `name2`: ", map.delete("name2"));
console.log(map);

//for of

for (let [key, value] of map) {
  console.log(key, value);
}

for (let i of map) {
  console.log(i[0], i[1]);
}

map.forEach((element) => {
  console.log(element);
});

map.set("name5", "ganesh");
console.log(map);
//map with spread opertor
let newmap = [...map];
console.log(newmap);

//weakset
//only stores object
//it cant be iterted

let weakSet = new WeakSet();

let user = { id: 1 };
weakSet.add(user);
console.log(weakSet.has(user)); // true
user = null;

//weakMap

let weakMap = new WeakMap();
let obj = { name: "Alice" };
weakMap.set(obj, "Hello");

console.log(weakMap.get(obj)); // "Hello"

// After obj = null, the key is garbage collected
obj = null;
// Garbage Collector remove from the memory that variable is notrechable just because of weak reference but in map garbage collector not removing the object untill you used map.delete

