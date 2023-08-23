/*
Question : How to compare two JSON have the same properties without order ?
    a) let obj1 = {name:"Person1",age:5};
    b) let obj2 = {age:5,name:"Person1"};

Answer : In javaScript object notation we can able to store multiple values with or without order in 'key:value' pairs by comma separated. we can access the stored value by the keys in the javaScript object.

*/
// for example 
let obj1 = { name: "Person1", age: 5 };
let obj2 = { age: 5, name: "Person1" };

let jsonObj1 = JSON.stringify(obj1);
let jsonObj2 = JSON.stringify(obj2);

if (typeof(jsonObj1) === typeof(jsonObj2)) {
    console.log('type of both JSON is same');
} else {
    console.log('type of both JSON is not same');
}

if (obj1.name === obj2.name) {
    console.log('both JSON name is same');
} else {
    console.log('both JSON name is not same');
}

if (obj1.age === obj2.age) {
    console.log('both JSON age is same');
} else {
    console.log('both JSON age is not same');
}