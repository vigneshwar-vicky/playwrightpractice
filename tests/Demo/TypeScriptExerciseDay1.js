//1. Declare a variable with a specific type, e.g., `username` (`string`) and `score` (`number`).
var username = 'Vigneshwar';
var score = 99;
console.log("Answer for Question 1");
console.log("Name of the user : " + username);
console.log("Score : " + score);
console.log("****************************");
//2. Declare a variable that uses a union type and can hold either a number or a string.
var myunion;
myunion = 42;
myunion = "vicky";
console.log("Answer for Question 2");
console.log("First trying to print in number : " + 42);
console.log("Trying to print in string : " + myunion);
console.log("****************************");
//3. Create an array of numbers and print each number in the array.
var arr = [10, 12, 11, 2, 4];
var len = arr.length;
console.log("Answer for Question 3");
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("****************************");
//4. Subtraction with Type Declaration: - Declare two variables `num1` and `num2` with type `number`. Assign values to them and print their difference.
var n1 = 55;
var n2 = 30;
var diff = n1 - n2;
console.log("Answer for Question 4");
console.log("Difference of two Numbers Method 1: " + diff); //one method
console.log(n1 - n2); //2nd method
console.log("****************************");
//5. Average Calculation:   - Create a variable `scores` that holds an array of numbers. Calculate and print the average of the numbers in the array.
var Avg1 = 65;
var Avg2 = 25;
var Avg3 = 110;
var Avg4 = 35;
var Avg = (Avg1 + Avg2 + Avg3 + Avg4) / 4;
console.log("Answer for Question 5");
console.log("Average of given Numbers : " + Avg);
console.log("****************************");
//6. Area of a Circle:   - Declare a variable `radius` with type `number`. Use it to calculate the area of a circle (πr²) and print the result. Use `Math.PI` for the value of π.
var radius = 25;
var ans = Math.PI * radius * radius;
console.log("Answer for Question 6");
console.log("Radius of the circle for a given number : " + ans);
console.log("****************************");
