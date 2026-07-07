// Phase 2 Practice Sheet

// Part 1: Arrays (20 Questions)

// 🟢 Easy Level (Q1 - Q7)
// These questions focus on understanding arrays, accessing values, basic
// methods, and simple iteration.

// Question 1 — Find Expensive Products
// let prices= [100,250,500,150,700];
// Create a new array containing only prices greater than ₹300.
// Scenario
// You're building an e-commerce website.
// Customers want to see premium products only.
// What is this question asking?
// Go through every price and keep only those greater than 300.
// Expected Output:
// [500,700]

// Concepts Tested
// Arrays
// filter()

// Phase 2 Practice Sheet 1


let prices = [100, 250, 500, 150, 700];
let expensiveProducts = prices.filter(price => price > 300);
console.log(expensiveProducts);

// Question 2 — Last Student in Class
// let students= ["Aman","Ritik","Priya","Rahul"];
// Print the last student's name.
// Scenario
// The teacher wants to know who is sitting at the end of the attendance list.
// What is this question asking?
// Access the last element without manually writing the index.
// Concepts Tested
// Arrays
// length property


let students = ["Aman", "Ritik", "Priya", "Rahul"];
console.log(students[students.length - 1]);

// Question 3 — Add New Product
// let products= ["Laptop","Mouse","Keyboard"];
// Add "Monitor" to the end of the array.
// Scenario
// A new product arrives in inventory.
// What is this question asking?
// Insert an item at the end of an array.
// Concepts Tested
// push()

// Phase 2 Practice Sheet 2


let products = ["Laptop", "Mouse", "Keyboard"];
products.push("Monitor");
console.log(products);

// Question 4 — Remove Last Notification
// let notifications= [
// "Order Placed",
// "Order Shipped",
// "Order Delivered"
// ];
// Remove the latest notification.
// Scenario
// Notifications disappear after being viewed.
// What is this question asking?
// Remove the last element.
// Concepts Tested
// pop()


let notifications = ["Order Placed", "Order Shipped", "Order Delivered"];
notifications.pop();
console.log(notifications);

// Question 5 — Check User Exists
// let users= ["Aman","Ritik","Priya"];
// Check if "Ritik" exists.
// Scenario
// User tries to login.
// What is this question asking?
// Search for a value inside an array.
// Concepts Tested
// includes()

// Phase 2 Practice Sheet 3


let users = ["Aman", "Ritik", "Priya"];
console.log(users.includes("Ritik"));

// Question 6 — Convert Marks to Percentage
// let marks= [80,90,70];
// Create a new array where each mark is followed by % .
// Expected:
// ["80%","90%","70%"]

// What is this question asking?
// Transform every value into something else.
// Concepts Tested
// map()


let marks = [80, 90, 70];
let marksWithPercent = marks.map(mark => `${mark}%`);
console.log(marksWithPercent);

// Question 7 — Count Products
// let cart= [
// "Mouse",
// "Keyboard",
// "Monitor",
// "Laptop"
// ];
// Print total number of products.
// Scenario
// Shopping cart badge count.
// Concepts Tested
// length

// Phase 2 Practice Sheet 4


let cart = ["Mouse", "Keyboard", "Monitor", "Laptop"];
console.log(cart.length);

// 🟡 Moderate Level (Q8 - Q14)
// These questions require combining multiple concepts.

// Question 8 — Student Average
// let marks= [80,90,70,85,95];
// Find average marks.
// Scenario
// Teacher wants class average.
// What is this question asking?
// 1. Calculate total.
// 2. Divide by total students.
// Concepts Tested
// reduce()
// length


let marks2 = [80, 90, 70, 85, 95];
let total = marks2.reduce((sum, mark) => sum + mark, 0);
let average = total / marks2.length;
console.log(average);

// Question 9 — Even Numbers Finder
// let numbers= [1,2,3,4,5,6,7,8];
// Return all even numbers.
// Scenario
// Filter numbers for a report.
// What is this question asking?

// Phase 2 Practice Sheet 5

// Keep only values divisible by 2.
// Concepts Tested
// filter()


let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Question 10 — Product Search
// let products= [
// "Laptop",
// "Mouse",
// "Keyboard",
// "Monitor"
// ];
// Find the index of "Keyboard" .
// Scenario
// You need the product position.
// Concepts Tested
// indexOf()


let products2 = ["Laptop", "Mouse", "Keyboard", "Monitor"];
console.log(products2.indexOf("Keyboard"));

// Question 11 — Total Revenue
// let sales= [500,700,1000,300];
// Calculate total revenue.
// Scenario
// Store owner wants today's earnings.
// What is this question asking?

// Phase 2 Practice Sheet 6

// Add all numbers together.
// Concepts Tested
// reduce()


let sales = [500, 700, 1000, 300];
let totalRevenue = sales.reduce((sum, sale) => sum + sale, 0);
console.log(totalRevenue);

// Question 12 — Uppercase Usernames
// let users= ["ritik","aman","priya"];
// Convert every username into uppercase.
// Scenario
// Preparing usernames for display.
// Concepts Tested
// map()


let users2 = ["ritik", "aman", "priya"];
let upperUsers = users2.map(user => user.toUpperCase());
console.log(upperUsers);

// Question 13 — Find First Adult
// let ages= [12,15,17,19,22];
// Find the first age greater than or equal to 18.
// Scenario
// Age verification system.
// Concepts Tested
// find()


let ages = [12, 15, 17, 19, 22];
let firstAdult = ages.find(age => age >= 18);
console.log(firstAdult);

// Question 14 — Positive Number Check

// Phase 2 Practice Sheet 7

// let nums= [5,8,10,3];
// Check if every number is positive.
// Scenario
// Validate data before processing.
// Concepts Tested
// every()


let nums = [5, 8, 10, 3];
let allPositive = nums.every(num => num > 0);
console.log(allPositive);

// 🔴 Hard Level (Q15 - Q20)
// These require logic building and problem-solving.

// Question 15 — Most Frequent Number
// let numbers= [1,2,3,2,4,2,5,1,1,1];
// Find the number that appears the most.
// Scenario
// Website wants to know the most searched category.
// What is this question asking?
// Count occurrences and find the highest.
// Concepts Tested
// Arrays
// Loops
// Counting logic

// Phase 2 Practice Sheet 8


let numbers2 = [1, 2, 3, 2, 4, 2, 5, 1, 1, 1];
let countMap = {};
for (let num of numbers2) {
    countMap[num] = (countMap[num] || 0) + 1;
}
let maxCount = 0;
let mostFrequent;
for (let key in countMap) {
    if (countMap[key] > maxCount) {
        maxCount = countMap[key];
        mostFrequent = key;
    }
}
console.log(Number(mostFrequent));

// Question 16 — Second Largest Number
// let nums= [10,50,20,80,40];
// Find the second largest number.
// Scenario
// Leaderboard runner-up.
// What is this question asking?
// Largest is:
// 80

// Find:
// 50

// Concepts Tested
// sort()
// Logic


let nums2 = [10, 50, 20, 80, 40];
let sortedNums = [...nums2].sort((a, b) => b - a);
console.log(sortedNums[1]);

// Question 17 — Remove Duplicates
// let ids= [1,2,2,3,4,4,5,5];
// Create a new array with unique values.
// Expected:
// [1,2,3,4,5]

// Phase 2 Practice Sheet 9

// Scenario
// Duplicate user IDs should not exist.
// Concepts Tested
// Arrays
// Problem Solving


let ids = [1, 2, 2, 3, 4, 4, 5, 5];
let uniqueIds = [...new Set(ids)];
console.log(uniqueIds);

// Question 18 — Longest Word
// let words= [
// "JavaScript",
// "HTML",
// "CSS",
// "Programming"
// ];
// Find the longest word.
// Scenario
// Text analytics system.
// What is this question asking?
// Compare lengths of all strings.
// Concepts Tested
// Loops
// String length


let words = ["JavaScript", "HTML", "CSS", "Programming"];
let longest = words[0];
for (let word of words) {
    if (word.length > longest.length) {
        longest = word;
    }
}
console.log(longest);

// Question 19 — Rotate Array Right
// let nums= [1,2,3,4,5];

// Phase 2 Practice Sheet 10

// Output:
// [5,1,2,3,4]

// Scenario
// Carousel slider rotates items.
// What is this question asking?
// Move last element to the beginning.
// Concepts Tested
// pop()
// unshift()


let nums3 = [1, 2, 3, 4, 5];
let lastEle = nums3.pop();
nums3.unshift(lastEle);
console.log(nums3);

// Question 20 — Best Selling Product
// let sales= [
// "Mouse",
// "Keyboard",
// "Mouse",
// "Laptop",
// "Mouse",
// "Keyboard"
// ];
// Find the product sold the most.
// Scenario
// E-commerce analytics dashboard.
// What is this question asking?
// Count how many times each product appears and find the highest.

// Phase 2 Practice Sheet 11

// Expected:
// "Mouse"

// Concepts Tested
// Arrays
// Counting frequency
// Objects for tracking counts
// Problem Solving


let sales2 = ["Mouse", "Keyboard", "Mouse", "Laptop", "Mouse", "Keyboard"];
let countObj = {};
for (let item of sales2) {
    countObj[item] = (countObj[item] || 0) + 1;
}
let bestSeller;
let highest = 0;
for (let key in countObj) {
    if (countObj[key] > highest) {
        highest = countObj[key];
        bestSeller = key;
    }
}
console.log(bestSeller);

// Part 2: Objects (20 Questions)

// 🟢 Easy Level (Q1 - Q7)
// These questions focus on creating, accessing, updating, and deleting object
// properties.

// Question 1 — Access User Name
// let user = {
// name:"Ritik",
// age:21,
// city:"Bhopal"
// };

// Task
// Print the user's name.
// Scenario

// Phase 2 Practice Sheet 12

// A profile page needs to display the logged-in user's name.
// What is this question asking?
// The data is already stored in an object.
// Your task is to access one specific property.
// Expected Output
// Ritik

// Concepts Tested
// Objects
// Dot Notation


let user = { name: "Ritik", age: 21, city: "Bhopal" };
console.log(user.name);

// Question 2 — Update User Age
// let user = {
// name:"Ritik",
// age:21
// };

// Task
// Update age to 22.
// Scenario
// Today is the user's birthday.
// What is this question asking?
// Update an existing property inside an object.
// Expected Output

// Phase 2 Practice Sheet 13

// {
// name:"Ritik",
// age:22
// }

// Concepts Tested
// Object Updates


let user2 = { name: "Ritik", age: 21 };
user2.age = 22;
console.log(user2);

// Question 3 — Add Country
// let user= {
// name:"Ritik",
// city:"Bhopal"
// };

// Task
// Add a property:
// country:"India"

// Scenario
// The registration form now requires country information.
// What is this question asking?
// Add a completely new property.
// Concepts Tested
// Adding Properties


let user3 = { name: "Ritik", city: "Bhopal" };
user3.country = "India";
console.log(user3);

// Question 4 — Delete Property

// Phase 2 Practice Sheet 14

// let user= {
// name:"Ritik",
// age:21,
// password:"12345"
// };

// Task
// Delete the password property.
// Scenario
// Sensitive information should not be sent to the frontend.
// What is this question asking?
// Remove a property from an object.
// Concepts Tested
// delete keyword


let user4 = { name: "Ritik", age: 21, password: "12345" };
delete user4.password;
console.log(user4);

// Question 5 — Check Property Exists
// let product= {
// name:"Laptop",
// price:60000
// };

// Task
// Check if the object contains a property called "price" .
// Scenario
// Before displaying the product price, you want to make sure it exists.
// Concepts Tested

// Phase 2 Practice Sheet 15

// Object Keys
// Property Checking


let product = { name: "Laptop", price: 60000 };
console.log("price" in product);

// Question 6 — Print All Keys
// let car= {
// brand:"BMW",
// model:"X5",
// year:2025
// };

// Task
// Print all property names.
// Expected Output
// ["brand","model","year"]

// Scenario
// Admin dashboard wants to know available fields.
// Concepts Tested
// Object.keys()


let car = { brand: "BMW", model: "X5", year: 2025 };
console.log(Object.keys(car));

// Question 7 — Print All Values
// let car= {
// brand:"BMW",
// model:"X5",
// year:2025
// };

// Phase 2 Practice Sheet 16

// Task
// Print all values.
// Expected Output
// ["BMW","X5",2025]

// Concepts Tested
// Object.values()


let car2 = { brand: "BMW", model: "X5", year: 2025 };
console.log(Object.values(car2));

// 🟡 Moderate Level (Q8 - Q14)
// These questions combine multiple object concepts.

// Question 8 — Print User Information Dynamically
// let user= {
// name:"Ritik",
// age:21,
// city:"Bhopal"
// };

// Task
// Print:
// name :Ritik
// age :21
// city :Bhopal
// using a loop.
// Scenario

// Phase 2 Practice Sheet 17

// A profile card should automatically display all information.
// What is this question asking?
// Instead of manually writing each property, loop through the object.
// Concepts Tested
// Object.entries()
// for...of


let user5 = { name: "Ritik", age: 21, city: "Bhopal" };
for (let [key, value] of Object.entries(user5)) {
    console.log(`${key} :${value}`);
}

// Question 9 — Employee Salary Increase
// let employee= {
// name:"Aman",
// salary:50000
// };

// Task
// Increase salary by 10%.
// Scenario
// Company announces annual appraisal.
// What is this question asking?
// Read a property, calculate a new value, update the property.
// Concepts Tested
// Object Updates
// Arithmetic Operations


let employee = { name: "Aman", salary: 50000 };
employee.salary = employee.salary + (employee.salary * 10 / 100);
console.log(employee);

// Question 10 — Nested Object Access

// Phase 2 Practice Sheet 18

// let user= {
// name:"Ritik",
// address: {
// city:"Bhopal",
// state:"MP"
// }
// };

// Task
// Print:
// Bhopal

// Scenario
// Delivery app needs city information.
// What is this question asking?
// Access a property inside another object.
// Concepts Tested
// Nested Objects


let user6 = { name: "Ritik", address: { city: "Bhopal", state: "MP" } };
console.log(user6.address.city);

// Question 11 — Object Destructuring
// let student= {
// name:"Priya",
// age:20,
// course:"BCA"
// };

// Task

// Phase 2 Practice Sheet 19

// Extract:

// name
// age
// into separate variables.
// Scenario
// You only need a few properties from a large object.
// Concepts Tested
// Object Destructuring


let student = { name: "Priya", age: 20, course: "BCA" };
let { name, age } = student;
console.log(name, age);

// Question 12 — Rename During Destructuring
// let student= {
// name:"Priya",
// age:20
// };

// Task
// Create:
// studentName
// studentAge

// Scenario
// Variable names should be more meaningful.
// Concepts Tested
// Destructuring Renaming

// Phase 2 Practice Sheet 20


let student2 = { name: "Priya", age: 20 };
let { name: studentName, age: studentAge } = student2;
console.log(studentName, studentAge);

// Question 13 — Merge User and Address
// let user= {
// name:"Ritik",
// age:21
// };
// let address= {
// city:"Bhopal",
// state:"MP"
// };

// Task
// Combine both objects.
// Scenario
// Backend sends user and address separately.
// Frontend needs one object.
// Concepts Tested
// Spread Operator


let user7 = { name: "Ritik", age: 21 };
let address = { city: "Bhopal", state: "MP" };
let fullUser = { ...user7, ...address };
console.log(fullUser);

// Question 14 — Count Object Properties
// let user= {
// name:"Ritik",
// age:21,
// city:"Bhopal",
// country:"India"
// };

// Task

// Phase 2 Practice Sheet 21

// Find how many properties exist.
// Scenario
// Dynamic form validation.
// What is this question asking?
// Count total keys.
// Concepts Tested
// Object.keys()
// length


let user8 = { name: "Ritik", age: 21, city: "Bhopal", country: "India" };
console.log(Object.keys(user8).length);

// 🔴 Hard Level (Q15 - Q20)
// These require real-world logic and object manipulation.

// Question 15 — Highest Paid Employee
// let
// employees= {
// aman:25000,
// ritik:50000,
// priya:45000
// };

// Task
// Find the employee earning the highest salary.
// Scenario
// Company wants Employee of the Month based on salary.
// What is this question asking?

// Phase 2 Practice Sheet 22

// Compare every salary and return the employee name.
// Expected Output
// "ritik"

// Concepts Tested
// Objects
// Loops
// Comparisons


let employees = { aman: 25000, ritik: 50000, priya: 45000 };
let highestPaid;
let maxSalary = 0;
for (let key in employees) {
    if (employees[key] > maxSalary) {
        maxSalary = employees[key];
        highestPaid = key;
    }
}
console.log(highestPaid);

// Question 16 — Most Used Programming Language
// let votes= {
// JavaScript:25,
// Python:30,
// Java:15,
// Cpp:10
// };

// Task
// Find the language with the highest votes.
// Scenario
// Survey results dashboard.
// What is this question asking?
// Find the largest value in an object.
// Concepts Tested
// Object.entries()
// Comparisons

// Phase 2 Practice Sheet 23


let votes = { JavaScript: 25, Python: 30, Java: 15, Cpp: 10 };
let topLanguage;
let maxVotes = 0;
for (let [lang, count] of Object.entries(votes)) {
    if (count > maxVotes) {
        maxVotes = count;
        topLanguage = lang;
    }
}
console.log(topLanguage);

// Question 17 — Reverse Key Value
// let countries= {
// India:"Delhi",
// Japan:"Tokyo",
// France:"Paris"
// };

// Task
// Convert into:
// {
// Delhi:"India",
// Tokyo:"Japan",
// Paris:"France"
// }

// Scenario
// Search by capital city instead of country.
// Concepts Tested
// Objects
// Loops
// Transformation Logic


let countries = { India: "Delhi", Japan: "Tokyo", France: "Paris" };
let reversedCountries = {};
for (let [key, value] of Object.entries(countries)) {
    reversedCountries[value] = key;
}
console.log(reversedCountries);

// Question 18 — Student Marks Summary
// let marks= {
// math:90,
// science:80,

// Phase 2 Practice Sheet 24

// english:85
// };

// Task
// Calculate total marks.
// Scenario
// Generate report card.
// What is this question asking?
// Add all values inside the object.
// Concepts Tested
// Object.values()
// reduce()


let marks3 = { math: 90, science: 80, english: 85 };
let totalMarks = Object.values(marks3).reduce((sum, mark) => sum + mark, 0);
console.log(totalMarks);

// Question 19 — Find Missing Property
// let user= {
// name:"Ritik",
// age:21
// };

// Task
// Check whether:
// email
// exists.
// If not, add:

// Phase 2 Practice Sheet 25

// email:"Not Provided"

// Scenario
// Incomplete profile detection.
// Concepts Tested
// Property Checking
// Conditional Logic


let user9 = { name: "Ritik", age: 21 };
if (!("email" in user9)) {
    user9.email = "Not Provided";
}
console.log(user9);

// Question 20 — Product Inventory Analyzer
// let inventory= {
// mouse:25,
// keyboard:10,
// monitor:5,
// laptop:2
// };

// Task
// Find:
// 1. Total items in stock.
// 2. Product with highest stock.
// 3. Product with lowest stock.
// Scenario
// Inventory management dashboard.
// What is this question asking?
// Analyze all values and generate useful information.
// Concepts Tested

// Phase 2 Practice Sheet 26

// Object.values()
// Object.entries()
// Loops
// Comparisons
// Real-world Problem Solving


let inventory = { mouse: 25, keyboard: 10, monitor: 5, laptop: 2 };
let totalStock = Object.values(inventory).reduce((sum, stock) => sum + stock, 0);
let highestStock, lowestStock;
let maxStock = -Infinity;
let minStock = Infinity;
for (let [productName, stock] of Object.entries(inventory)) {
    if (stock > maxStock) {
        maxStock = stock;
        highestStock = productName;
    }
    if (stock < minStock) {
        minStock = stock;
        lowestStock = productName;
    }
}
console.log("Total Stock:", totalStock);
console.log("Highest Stock:", highestStock);
console.log("Lowest Stock:", lowestStock);

// Part 3: Functions (20 Questions)

// 🟢 Easy Level (Q1 - Q7)
// These questions focus on understanding function creation, parameters,
// arguments, and return values.

// Question 1 — Greeting Function
// Create a function:
// greet(name)
// that prints:
// Hello Ritik

// when called with:
// greet("Ritik")

// Scenario
// A website wants to greet users after login.

// Phase 2 Practice Sheet 27

// What is this question asking?
// Learn the most basic purpose of functions:
// Accept input
// Perform an action
// Produce output
// Concepts Tested
// Function Declaration
// Parameters
// Arguments


function greet(name) {
    console.log(`Hello ${name}`);
}
greet("Ritik");

// Question 2 — Add Two Numbers
// Create a function:
// add(a,b)
// that returns the sum.
// Example:
// add(10,20)
// Output:
// 30

// Scenario
// Calculator application.
// What is this question asking?
// Receive two inputs and return a result.

// Phase 2 Practice Sheet 28

// Concepts Tested
// Parameters
// Return


function add(a, b) {
    return a + b;
}
console.log(add(10, 20));

// Question 3 — Find Square
// Create a function:
// square(num)
// that returns the square of a number.
// Example:
// square(5)
// Output:
// 25

// Scenario
// Math utility app.
// Concepts Tested
// Functions
// Return Values


function square(num) {
    return num * num;
}
console.log(square(5));

// Question 4 — Check Even Number
// Create a function:
// isEven(num)

// Phase 2 Practice Sheet 29

// Return:
// true

// if the number is even, otherwise:
// false

// Scenario
// Number validation system.
// What is this question asking?
// Return a boolean based on a condition.
// Concepts Tested
// Functions
// Conditionals


function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4));

// Question 5 — Default Username
// Create a function:
// greet(name="Guest")
// Example:
// greet()
// Output:

// Hello Guest

// Scenario

// Phase 2 Practice Sheet 30

// User visits without logging in.
// Concepts Tested
// Default Parameters


function greet2(name = "Guest") {
    console.log(`Hello ${name}`);
}
greet2();

// Question 6 — Celsius to Fahrenheit
// Create a function:
// convertTemp(celsius)
// Formula:
// (celsius*9/5)+32

// Scenario
// Weather application.
// Concepts Tested
// Functions
// Return Values


function convertTemp(celsius) {
    return (celsius * 9 / 5) + 32;
}
console.log(convertTemp(30));

// Question 7 — Arrow Function Practice
// Convert this function:
// functionmultiply(a,b) {
// returna*b;
// }
// into an arrow function.
// Scenario

// Phase 2 Practice Sheet 31

// Modern JavaScript codebase.
// Concepts Tested
// Arrow Functions


const multiply = (a, b) => a * b;
console.log(multiply(4, 5));

// 🟡 Moderate Level (Q8 - Q14)
// These questions require combining multiple function concepts.

// Question 8 — Discount Calculator
// Create:
// calculateDiscount(price)
// Apply:
// 10%

// discount.
// Example:
// calculateDiscount(500)
// Output:
// 450

// Scenario
// E-commerce website.
// What is this question asking?
// Accept input.

// Phase 2 Practice Sheet 32

// Perform calculation.
// Return result.
// Concepts Tested
// Functions
// Return


function calculateDiscount(price) {
    return price - (price * 10 / 100);
}
console.log(calculateDiscount(500));

// Question 9 — Largest of Three Numbers
// Create:
// findLargest(a,b,c)
// Return the largest number.
// Example:
// findLargest(10,50,20)
// Output:
// 50

// Scenario
// Ranking system.
// Concepts Tested
// Functions
// Comparisons


function findLargest(a, b, c) {
    return Math.max(a, b, c);
}
console.log(findLargest(10, 50, 20));

// Question 10 — Reverse String
// Create:

// Phase 2 Practice Sheet 33

// reverseString(str)
// Example:
// reverseString("hello")
// Output:
// "olleh"

// Scenario
// Text processing application.
// What is this question asking?
// Manipulate text and return the reversed version.
// Concepts Tested
// Functions
// Strings
// Loops


function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("hello"));

// Question 11 — Count Vowels
// Create:
// countVowels(str)
// Example:
// countVowels("javascript")
// Output:

// Phase 2 Practice Sheet 34

// 3

// Scenario
// Text analysis tool.
// Concepts Tested
// Functions
// Loops
// Conditions


function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("javascript"));

// Question 12 — Generate Username
// Create:
// generateUsername(name)
// Input:
// "Ritik Rajput"
// Output:
// "ritik_rajput"

// Scenario
// Registration system.
// Concepts Tested
// Functions
// String Methods

// Phase 2 Practice Sheet 35


function generateUsername(name) {
    return name.toLowerCase().split(" ").join("_");
}
console.log(generateUsername("Ritik Rajput"));

// Question 13 — Dynamic Sum Function
// Create:
// sum(...numbers)
// Example:
// sum(1,2,3,4)
// Output:
// 10

// Scenario
// Calculator app.
// What is this question asking?
// Accept unlimited numbers.
// Concepts Tested
// Rest Parameters
// reduce()


function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4));

// Question 14 — Login Validation
// Create:
// login(username,password)
// Rules:
// username==="admin"

// Phase 2 Practice Sheet 36

// password==="1234"
// Return:
// "Login Successful"
// or
// "Invalid Credentials"

// Scenario
// Authentication system.
// Concepts Tested
// Functions
// Conditional Logic


function login(username, password) {
    if (username === "admin" && password === "1234") {
        return "Login Successful";
    }
    return "Invalid Credentials";
}
console.log(login("admin", "1234"));

// 🔴 Hard Level (Q15 - Q20)
// These questions require problem-solving and function composition.

// Question 15 — Factorial Function
// Create:
// factorial(n)
// Example:
// factorial(5)
// Output:

// Phase 2 Practice Sheet 37

// 120

// Because:
// 5×4×3×2×1

// Scenario
// Math engine.
// Concepts Tested
// Loops
// Functions


function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));

// Question 16 — Palindrome Checker
// Create:
// isPalindrome(str)
// Example:
// isPalindrome("madam")
// Output:
// true

// Scenario
// Text validation tool.
// What is this question asking?
// Check if a word reads the same forward and backward.

// Phase 2 Practice Sheet 38

// Concepts Tested
// Functions
// Strings
// Logic Building


function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log(isPalindrome("madam"));

// Question 17 — Password Strength Checker
// Create:
// checkPassword(password)
// Rules:
// Password should contain:
// At least 8 characters
// At least 1 number
// Return:
// "Strong"

// or
// "Weak"

// Scenario
// Registration page.
// Concepts Tested
// Functions
// Conditions
// String Analysis

// Phase 2 Practice Sheet 39


function checkPassword(password) {
    let hasNumber = /\d/.test(password);
    if (password.length >= 8 && hasNumber) {
        return "Strong";
    }
    return "Weak";
}
console.log(checkPassword("ritik123"));

// Question 18 — Function Returning Function
// Create:
// makeMultiplier(multiplier)
// Example:
// letdouble=makeMultiplier(2);
// double(10);
// Output:
// 20

// Scenario
// Reusable calculation system.
// What is this question asking?
// A function should return another function.
// Concepts Tested
// Higher Order Functions
// Closures (intro)


function makeMultiplier(multiplier) {
    return function (num) {
        return num * multiplier;
    };
}
let double = makeMultiplier(2);
console.log(double(10));

// Question 19 — Callback Function
// Create:
// processUser(name,callback)
// Example:

// Phase 2 Practice Sheet 40

// processUser("Ritik",welcomeUser);
// Output:
// Processing User...
// WelcomeRitik

// Scenario
// Backend processing.
// What is this question asking?
// Pass a function as an argument to another function.
// Concepts Tested
// Callbacks
// Higher Order Functions


function welcomeUser(name) {
    console.log(`Welcome ${name}`);
}
function processUser(name, callback) {
    console.log("Processing User...");
    callback(name);
}
processUser("Ritik", welcomeUser);

// Question 20 — Shopping Bill Generator
// Create:
// generateBill(items)
// Example Input:
// [
// { name:"Mouse", price:500 },
// { name:"Keyboard", price:1000 },
// { name:"Monitor", price:10000 }
// ]
// Output:

// Phase 2 Practice Sheet 41

// Total:11500

// Scenario
// E-commerce checkout page.
// What is this question asking?
// Create a reusable function that can calculate the total cost of any shopping cart.
// Concepts Tested
// Functions
// Arrays
// Objects
// Real-world Problem Solving


function generateBill(items) {
    let total = items.reduce((sum, item) => sum + item.price, 0);
    console.log(`Total:${total}`);
    return total;
}
generateBill([
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1000 },
    { name: "Monitor", price: 10000 }
]);

// Part 4: Arrays + Objects + Functions (20
// Questions)
// This section is the most important.
// In real-world applications:
// Data is usually stored in arrays
// Each item is usually an object
// Logic is usually written inside functions
// So almost every frontend/backend interview problem looks like this:
// [
// {
// name:"Ritik",
// age:21
// },

// Phase 2 Practice Sheet 42

// {
// name:"Aman",
// age:20
// }
// ]
// and you're asked to write functions to manipulate that data.

// 🟢 Easy Level (Q1 - Q7)

// Question 1 — Find Adult Users
// let users= [
// { name:"Ritik", age:20 },
// { name:"Aman", age:16 },
// { name:"Priya", age:25 }
// ];
// Create:
// getAdults(users)
// Return only users whose age is 18 or above.
// Scenario
// A website only allows adults to register.
// What is this question asking?
// You need to:
// 1. Loop through users.
// 2. Check age.

// Phase 2 Practice Sheet 43

// 3. Return qualifying users.
// Expected Output:
// [
// { name:"Ritik", age:20 },
// { name:"Priya", age:25 }
// ]

// Concepts Tested
// Array of Objects
// Functions
// filter()


function getAdults(users) {
    return users.filter(user => user.age >= 18);
}
console.log(getAdults([
    { name: "Ritik", age: 20 },
    { name: "Aman", age: 16 },
    { name: "Priya", age: 25 }
]));

// Question 2 — Product Names Extractor
// let products= [
// { name:"Laptop", price:50000 },
// { name:"Mouse", price:500 }
// ];
// Create:
// getProductNames(products)
// Return:
// ["Laptop","Mouse"]

// Scenario
// A dropdown only needs product names.

// Phase 2 Practice Sheet 44

// What is this question asking?
// Extract a single property from every object.
// Concepts Tested
// Arrays
// Objects
// Functions
// map()


function getProductNames(products) {
    return products.map(product => product.name);
}
console.log(getProductNames([
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 }
]));

// Question 3 — Find User By Name
// let users= [
// { name:"Ritik" },
// { name:"Aman" },
// { name:"Priya" }
// ];
// Create:
// findUser(users,username)

// Scenario
// Search bar functionality.
// What is this question asking?
// Find a specific object based on a property value.
// Concepts Tested
// find()

// Phase 2 Practice Sheet 45

// Functions


function findUser(users, username) {
    return users.find(user => user.name === username);
}
console.log(findUser([
    { name: "Ritik" },
    { name: "Aman" },
    { name: "Priya" }
], "Aman"));

// Question 4 — Total Marks
// let students= [
// { name:"Ritik", marks:80 },
// { name:"Aman", marks:90 },
// { name:"Priya", marks:70 }
// ];
// Create:
// getTotalMarks(students)
// Return:
// 240

// Concepts Tested
// reduce()
// Functions


function getTotalMarks(students) {
    return students.reduce((sum, student) => sum + student.marks, 0);
}
console.log(getTotalMarks([
    { name: "Ritik", marks: 80 },
    { name: "Aman", marks: 90 },
    { name: "Priya", marks: 70 }
]));

// Question 5 — Available Products
// let products= [
// { name:"Mouse", stock:10 },
// { name:"Keyboard", stock:0 },
// { name:"Monitor", stock:5 }
// ];
// Return only products whose stock is greater than zero.

// Phase 2 Practice Sheet 46

// Scenario
// Show only available products.
// Concepts Tested
// filter()
// Array of Objects


let products3 = [
    { name: "Mouse", stock: 10 },
    { name: "Keyboard", stock: 0 },
    { name: "Monitor", stock: 5 }
];
let availableProducts = products3.filter(product => product.stock > 0);
console.log(availableProducts);

// Question 6 — Add New Student
// Create:
// addStudent(students,student)
// which adds a student to the array.
// Scenario
// Student admission system.
// What is this question asking?
// Create a reusable function that updates data.
// Concepts Tested
// Arrays
// Objects
// push()


function addStudent(students, student) {
    students.push(student);
    return students;
}
console.log(addStudent([{ name: "Ritik" }], { name: "Aman" }));

// Question 7 — Count Premium Products
// let products= [
// { name:"Laptop", price:50000 },

// Phase 2 Practice Sheet 47

// { name:"Phone", price:30000 },
// { name:"Mouse", price:500 }
// ];
// Count products costing more than ₹10,000.
// Scenario
// Analytics dashboard.
// Concepts Tested
// filter()
// length


let products4 = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 30000 },
    { name: "Mouse", price: 500 }
];
let premiumCount = products4.filter(product => product.price > 10000).length;
console.log(premiumCount);

// 🟡 Moderate Level (Q8 - Q14)

// Question 8 — Shopping Cart Total
// let cart= [
// { name:"Mouse", price:500, qty:2 },
// { name:"Keyboard", price:1000, qty:1 },
// { name:"Monitor", price:10000, qty:1 }
// ];
// Create:
// getCartTotal(cart)

// Scenario
// Checkout page.

// Phase 2 Practice Sheet 48

// What is this question asking?
// For each item:
// price*qty
// Add everything.
// Expected:
// 12000

// Concepts Tested
// Arrays
// Objects
// Functions
// reduce()


function getCartTotal(cart) {
    return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}
console.log(getCartTotal([
    { name: "Mouse", price: 500, qty: 2 },
    { name: "Keyboard", price: 1000, qty: 1 },
    { name: "Monitor", price: 10000, qty: 1 }
]));

// Question 9 — Student Average Generator
// let students= [
// { name:"Ritik", marks: [80,90,85] },
// { name:"Aman", marks: [70,75,80] }
// ];
// Create:
// getAverageMarks(students)
// Return average for each student.
// Scenario
// School Report Card.

// Phase 2 Practice Sheet 49

// Concepts Tested
// Nested Arrays
// Objects
// map()
// reduce()


function getAverageMarks(students) {
    return students.map(student => {
        let total = student.marks.reduce((sum, mark) => sum + mark, 0);
        return { name: student.name, average: total / student.marks.length };
    });
}
console.log(getAverageMarks([
    { name: "Ritik", marks: [80, 90, 85] },
    { name: "Aman", marks: [70, 75, 80] }
]));

// Question 10 — Inventory Search
// let
// inventory= [
// { id:1, name:"Laptop" },
// { id:2, name:"Mouse" },
// { id:3, name:"Monitor" }
// ];
// Create:
// findProductById(id)

// Scenario
// Product detail page.
// Concepts Tested
// find()
// Functions


let inventory2 = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mouse" },
    { id: 3, name: "Monitor" }
];
function findProductById(id) {
    return inventory2.find(product => product.id === id);
}
console.log(findProductById(2));

// Question 11 — Usernames Generator

// Phase 2 Practice Sheet 50

// let users= [
// { name:"Ritik Rajput" },
// { name:"Aman Gupta" }
// ];
// Return:
// [
// "ritik_rajput",
// "aman_gupta"
// ]

// Scenario
// Registration system.
// Concepts Tested
// map()
// String Methods
// Functions


let users3 = [
    { name: "Ritik Rajput" },
    { name: "Aman Gupta" }
];
let usernames = users3.map(user => user.name.toLowerCase().split(" ").join("_"));
console.log(usernames);

// Question 12 — Highest Scoring Student
// let students= [
// { name:"Ritik", marks:85 },
// { name:"Aman", marks:95 },
// { name:"Priya", marks:75 }
// ];
// Find the highest scorer.
// Scenario

// Phase 2 Practice Sheet 51

// School Topper List.
// Concepts Tested
// Comparisons
// Loops
// Objects


let students3 = [
    { name: "Ritik", marks: 85 },
    { name: "Aman", marks: 95 },
    { name: "Priya", marks: 75 }
];
let topper = students3[0];
for (let student of students3) {
    if (student.marks > topper.marks) {
        topper = student;
    }
}
console.log(topper);

// Question 13 — Update Product Stock
// Create:
// updateStock(id,quantity)
// that updates stock of a specific product.
// Scenario
// Warehouse management.
// What is this question asking?
// Locate the object.
// Update one property.
// Concepts Tested
// find()
// Object Updates


let productsStock = [
    { id: 1, name: "Mouse", stock: 10 },
    { id: 2, name: "Keyboard", stock: 5 }
];
function updateStock(id, quantity) {
    let product = productsStock.find(item => item.id === id);
    if (product) {
        product.stock = quantity;
    }
    return productsStock;
}
console.log(updateStock(1, 20));

// Question 14 — Sort Students by Marks
// Sort:

// Phase 2 Practice Sheet 52

// [
// {name:"A", marks:70},
// {name:"B", marks:95},
// {name:"C", marks:80}
// ]
// from highest to lowest.
// Scenario
// Leaderboard.

// Concepts Tested
// sort()
// Array of Objects


let studentsSort = [
    { name: "A", marks: 70 },
    { name: "B", marks: 95 },
    { name: "C", marks: 80 }
];
let sortedStudents = [...studentsSort].sort((a, b) => b.marks - a.marks);
console.log(sortedStudents);

// 🔴 Hard Level (Q15 - Q20)
// These are close to actual frontend interview questions.

// Question 15 — Student Grade Report
// let students= [
// {
// name:"Ritik",
// marks: [80,90,85]
// },
// {
// name:"Aman",
// marks: [50,40,60]
// }
// ];

// Phase 2 Practice Sheet 53

// Create:
// generateReport(students)
// Return:
// [
// {
// name:"Ritik",
// average:85,
// grade:"A"
// },
// {
// name:"Aman",
// average:50,
// grade:"C"
// }
// ]

// Scenario
// School Report System.
// What is this question asking?
// For every student:
// 1. Calculate average.
// 2. Decide grade.
// 3. Create a new object.
// 4. Return a new array.

// Concepts Tested
// Arrays

// Phase 2 Practice Sheet 54

// Nested Arrays
// Objects
// Functions
// map()
// reduce()


function generateReport(students) {
    return students.map(student => {
        let total = student.marks.reduce((sum, mark) => sum + mark, 0);
        let average = total / student.marks.length;
        let grade = average >= 80 ? "A" : average >= 60 ? "B" : "C";
        return { name: student.name, average, grade };
    });
}
console.log(generateReport([
    { name: "Ritik", marks: [80, 90, 85] },
    { name: "Aman", marks: [50, 40, 60] }
]));

// Question 16 — Product Revenue Analyzer
// let products= [
// {
// name:"Mouse",
// price:500,
// sold:20
// },
// {
// name:"Keyboard",
// price:1000,
// sold:10
// }
// ];
// Find:
// 1. Revenue per product
// 2. Total Revenue
// 3. Best Selling Product
// Scenario
// Business Analytics Dashboard.
// Concepts Tested

// Phase 2 Practice Sheet 55

// Arrays
// Objects
// reduce()
// Comparisons


let products5 = [
    { name: "Mouse", price: 500, sold: 20 },
    { name: "Keyboard", price: 1000, sold: 10 }
];
let revenuePerProduct = products5.map(product => ({
    name: product.name,
    revenue: product.price * product.sold
}));
let totalRevenue2 = revenuePerProduct.reduce((sum, product) => sum + product.revenue, 0);
let bestProduct = revenuePerProduct[0];
for (let product of revenuePerProduct) {
    if (product.revenue > bestProduct.revenue) {
        bestProduct = product;
    }
}
console.log(revenuePerProduct);
console.log("Total Revenue:", totalRevenue2);
console.log("Best Selling Product:", bestProduct.name);

// Question 17 — Attendance System
// let
// students= [
// { name:"Ritik", present:true },
// { name:"Aman", present:false },
// { name:"Priya", present:true }
// ];
// Create functions:
// countPresent()
// countAbsent()
// getPresentStudents()

// Scenario
// School Attendance Portal.

// Concepts Tested
// Arrays
// Objects
// Functions
// filter()

// Phase 2 Practice Sheet 56


let studentsAttendance = [
    { name: "Ritik", present: true },
    { name: "Aman", present: false },
    { name: "Priya", present: true }
];
function countPresent() {
    return studentsAttendance.filter(student => student.present).length;
}
function countAbsent() {
    return studentsAttendance.filter(student => !student.present).length;
}
function getPresentStudents() {
    return studentsAttendance.filter(student => student.present);
}
console.log(countPresent());
console.log(countAbsent());
console.log(getPresentStudents());

// Question 18 — Library Management System
// Store books like:
// {
// id:1,
// title:"Atomic Habits",
// borrowed:false
// }
// Create:
// addBook()
// borrowBook()
// returnBook()
// showAvailableBooks()

// Scenario
// Library Software.
// What is this question asking?
// Manage a collection of books using functions.
// Concepts Tested
// Arrays
// Objects
// Functions
// find()
// filter()


let books = [];
function addBook(book) {
    books.push(book);
}
function borrowBook(id) {
    let book = books.find(b => b.id === id);
    if (book) {
        book.borrowed = true;
    }
}
function returnBook(id) {
    let book = books.find(b => b.id === id);
    if (book) {
        book.borrowed = false;
    }
}
function showAvailableBooks() {
    return books.filter(book => !book.borrowed);
}
addBook({ id: 1, title: "Atomic Habits", borrowed: false });
borrowBook(1);
console.log(showAvailableBooks());

// Question 19 — Order Management System

// Phase 2 Practice Sheet 57

// Store orders like:
// {
// id:1,
// customer:"Ritik",
// amount:5000,
// status:"Pending"
// }
// Create:
// createOrder()
// updateStatus()
// getPendingOrders()
// getCompletedOrders()

// Scenario
// E-commerce Backend.

// Concepts Tested
// Arrays
// Objects
// Functions
// Business Logic


let orders = [];
function createOrder(order) {
    orders.push(order);
}
function updateStatus(id, status) {
    let order = orders.find(o => o.id === id);
    if (order) {
        order.status = status;
    }
}
function getPendingOrders() {
    return orders.filter(order => order.status === "Pending");
}
function getCompletedOrders() {
    return orders.filter(order => order.status === "Completed");
}
createOrder({ id: 1, customer: "Ritik", amount: 5000, status: "Pending" });
updateStatus(1, "Completed");
console.log(getCompletedOrders());

// Question 20 — Mini E-Commerce System
// (Interview Level)
// Create a system with:

// Phase 2 Practice Sheet 58

// addProduct()
// removeProduct()
// updateStock()
// purchaseProduct()
// getInventoryValue()
// Store products like:
// {
// id:1,
// name:"Laptop",
// price:50000,
// stock:10
// }

// Scenario
// You are building the backend logic of Amazon/Flipkart inventory.
// What is this question asking?
// This is not one function.
// This is an entire mini project.
// You need to:
// 1. Store products.
// 2. Add products.
// 3. Remove products.
// 4. Update stock.
// 5. Handle purchases.
// 6. Calculate inventory value.

// Phase 2 Practice Sheet
let store = [];
function addProduct(product) {
    store.push(product);
}
function removeProduct(id) {
    store = store.filter(product => product.id !== id);
}
function updateStockEcom(id, quantity) {
    let product = store.find(p => p.id === id);
    if (product) {
        product.stock = quantity;
    }
}
function purchaseProduct(id, quantity) {
    let product = store.find(p => p.id === id);
    if (product && product.stock >= quantity) {
        product.stock -= quantity;
        return true;
    }
    return false;
}
function getInventoryValue() {
    return store.reduce((sum, product) => sum + (product.price * product.stock), 0);
}
addProduct({ id: 1, name: "Laptop", price: 50000, stock: 10 });
purchaseProduct(1, 2);
console.log(getInventoryValue());