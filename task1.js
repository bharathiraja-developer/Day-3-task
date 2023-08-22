/*
Question : How to compare two JSON have the same properties without order ?
    a) let obj1 = {name:"Person1",age:5};
    b) let obj2 = {age:5,name:"Person1"};

Answer : In javaScript object notation we can able to store multiple values with or without order in 'key:value' pairs by comma separated. we can access the stored value by the keys in the javaScript object.


*/
// for example 
let obj = [{ name: "Person1", age: 5 },
{ age: 5, name: "Person1" }]

// here obj contains two javaScript object we can acess the name and age as follows

console.log(obj[0].name);
console.log(obj[0].age);
console.log(obj[1].name);
console.log(obj[1].age); 

// we can use for loop here for th code repitation

for (let i = 0; i < obj.length; i++){
    console.log(obj[i].name);
    console.log(obj[i].age);
}

// we can compare two javaScript object values

    if (obj[0].name === obj[1].name && obj[0].age==obj[1].age) {
        console.log(true);
    } else {
    console.log(false);
}


