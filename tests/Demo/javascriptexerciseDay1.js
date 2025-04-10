//1. Declare a variable called `name` and assign it a string value. Declare variables `age` (number) and `isStudent` (boolean) as well. 
let name;
name="Vicky";
let age;
age=26;
let isStudent='true';
console.log("Answer for Question 1");
console.log("Name of the student :" +name);
console.log("Age :" +age);
console.log("Check Boolean :"  +isStudent);
console.log("****************************"); 

//2.Use `const` to declare a variable for a constant value (e.g., the speed of light). Use `let` for another variable representing a changeable value.
const text="Constant String Text Can't be Changed";
// text='vicky';  (for my i used this line withot comment this it throws an error bcoz it is constant variable following error was thrown  "TypeError: Assignment to constant variable")
let second='Changable text';
console.log("Answer for Question 2");
console.log(text);
console.log(second);
console.log("****************************");

//3.Create two string variables `firstName` and `lastName`. Concatenate them and print the full name.
let firstName='Vicky';
let lastName='Automation Tester';
console.log("Answer for Question 3");
console.log(firstName +"  " +lastName);
console.log("****************************");

//4. Addition:- Declare two variables `a` and `b` with numeric values. Print their sum to the console.

let a=123;
let b=20;
let c=a+b;
console.log("Answer for Question 4");
console.log("Addition of two Numbers Method 1: "  +c); //one method
console.log(a +b);//2nd method
console.log("****************************");

// 5. Multiplication:- Declare a variable `x` with the value of 10 and `y` with the value of 15. Print the result of their multiplication
let a1=13;
let b1=13;
let c1=a1*b1;
console.log("Answer for Question 5");
console.log("Multiplication of two Numbers : "  +c1);
console.log("****************************");

//6. Declare two variables `length` and `width`. Assign values to them and calculate the perimeter of the rectangle. Print the result.
let length=10;
let width=20;
let perimeter=2*(length+width);
console.log("Answer for Question 6");
console.log("Perimeter of Triangle : " +perimeter);
console.log("****************************");