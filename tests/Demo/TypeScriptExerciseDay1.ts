//1. Declare a variable with a specific type, e.g., `username` (`string`) and `score` (`number`).
let username: string = 'Vigneshwar';
let score: number = 99;
console.log("Answer for Question 1");
console.log("Name of the user : "  +username);
console.log("Score : " +score);
console.log("****************************");

//2. Declare a variable that uses a union type and can hold either a number or a string.
let myunion: number | string;
myunion=42;
myunion="vicky";
console.log("Answer for Question 2");
console.log("First trying to print in number : " +42);
console.log("Trying to print in string : " +myunion);
console.log("****************************");

//3. Create an array of numbers and print each number in the array.
let arr: number[] = [10,12,11,2,4];
let len=arr.length;

console.log("Answer for Question 3");

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
console.log("****************************");

//4. Subtraction with Type Declaration: - Declare two variables `num1` and `num2` with type `number`. Assign values to them and print their difference.
let n1:number=55;
let n2:number=30;
let diff=n1-n2;

console.log("Answer for Question 4");
console.log("Difference of two Numbers Method 1: "  +diff); //one method
console.log(n1-n2);//2nd method
console.log("****************************");

//5. Average Calculation:   - Create a variable `scores` that holds an array of numbers. Calculate and print the average of the numbers in the array.

let Avg1:number=65;
let Avg2:number=25;
let Avg3:number=110;
let Avg4:number=35;

let AvgArray:number[]=[12,55,34,90];
let sumAvg=0;
let lengtharray=AvgArray.length; //length of the array
for(let i=0;i<AvgArray.length;i++)
{
        sumAvg+=AvgArray[i];  // sumAvg = sumAvg+arrayvalue 0+12 -- 12+55 -- 67+34-- 101+90 -- 191
} 
console.log(sumAvg/lengtharray); //191/4 = 47.75

let Avg=(Avg1+Avg2+Avg3+Avg4)/4;
console.log("Answer for Question 5");
console.log("Average of given Numbers : "  +Avg);
console.log("****************************");

//6. Area of a Circle:   - Declare a variable `radius` with type `number`. Use it to calculate the area of a circle (πr²) and print the result. Use `Math.PI` for the value of π.
let radius:number=25;
let ans:number= Math.PI *radius*radius;

console.log("Answer for Question 6");
console.log("Radius of the circle for a given number : " +ans);
console.log("****************************");