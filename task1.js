/*
Question : How to compare two JSON have the same properties without order ?
    a) let obj1 = {name:"Person1",age:5};
    b) let obj2 = {age:5,name:"Person1"};

Answer : In javaScript object notation we can able to store multiple values with or without order in 'key:value' pairs by comma separated. we can access the stored value by the keys in the javaScript object.

*/
// for example 
let obj1 = { name: "Person1", age: 5 };
let obj2 = { age: 5, name: "Person1" };

function compare(a, b) {
    let result = true;
    if (Object.keys(a).length == Object.keys(b).length) {
        for (key in a) {
            if (a[key] === b[key]) {
                continue;
            } else {
                result = false;
                break;
            }
        }
    } else {
        result = false;
    }
    return result;
}
console.log(compare(obj1, obj2));