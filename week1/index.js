// Task 1 - Using Node and NPM
console.log("Hello World, Node.js!");

// Task 2 - Working with arrays
let myNumbers = [1,2,3,4,5];
console.log("\nMy numbers are: ", myNumbers);

myNumbers.push(24);
console.log("\nMy numbers after 24 has been pushed to the end: ", myNumbers);

myNumbers.unshift(0);
console.log("\nMy numbers after 0 has been pushed to the front: ", myNumbers);

myNumbers.splice(3, 0, 99);
console.log("\nMy numbers after 99 has been spliced into index 3: ", myNumbers);

myNumbers.pop();
console.log("\nMy numbers after a pop operation has been conducted: ", myNumbers);

myNumbers.splice(1, 1);
console.log("\nMy numbers after the second item has been spliced out: ", myNumbers);

myNumbers[4] = 100;
console.log("\nMy numbers after the fifth element has been changed to 100: ", myNumbers);

/*  The sort function has an optional parameter compareFunction
    A function that defines an alternative sort order. 
    The function should return a negative, zero, or positive value, depending on the arguments
        function(a, b){return a-b}
        When the sort() method compares two values, it sends the values to the compare function.
        It then sorts the values according to the returned (negative, zero, positive) value. */

myNumbers.sort(
    (a, b) => (a - b)
)
console.log("\nMy numbers, sorted: ", myNumbers);

// Task 3 - Working with JSON
const myJsonObject = {
    people: [
        {firstName: "Rusty", lastName: "Blewitt"},
        {firstName: "John", lastName: "Smith"},
        {firstName: "Peter", lastName: "Johnson"}
    ]
}
console.log("\nMy JSON object: ", myJsonObject);

let stringifiedJsonObject = JSON.stringify(myJsonObject);
console.log("\nMy JSON object stringified: ", stringifiedJsonObject);

let parsedString = JSON.parse(stringifiedJsonObject);
console.log("\nMy stringified JSON object parsed back into a JSON object: ", parsedString);

// Task 4 - NPM Packages

const arrayAdd = require('array-add-num');
let numArray = [5, 4, 3, 8];

sumOfArray = arrayAdd(numArray);

console.log("\nSum of array using array-add-num package on [5,4,3,8] = ", sumOfArray);

var pkg = require("./package-lock.json");

console.log("\nValue of array-add-num from package-lock.json: ", pkg.dependencies["array-add-num"]);

// Task 5 - Arrow Functions

// Function as is
function multiplyNums(x, y, z){
    return("new number is " + x * y * z);
    }

const arrowMultiplyNums = (x, y, z) => ("new number is " + (x * y * z));

console.log("\nFunction as is: ", multiplyNums(2, 3, 4));
console.log("\nFunction as arrow function: ", arrowMultiplyNums(2, 3, 4));