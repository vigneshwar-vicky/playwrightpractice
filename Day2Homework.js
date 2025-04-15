console.log("******Conditional Statements: 1. if 2. if - else 3. else - if ladder 4. switch ********");
console.log(" ");
console.log("1. Write a program to check if a given number is odd or even.");
//"approach 1 if else "
var num = 33;
console.log("If else method :");
if (num % 2 == 0)
    console.log("Even number");
else
    console.log("Odd Number");
// approach 2 switch case 
console.log("Switch method :");
switch (num) {
    case 1:
        if (num % 2 == 0)
            console.log("Even number");
        break;
    default:
        console.log("Odd number");
        break;
}
console.log("******************************************************");
console.log("2. Create a function that takes a grade and returns whether it is Pass or Fail based on a threshold value.");
var mark;
function passorfail(mark) {
    if (mark > 40)
        return "pass";
    else
        return "fail";
}
function passorfailusingswitch(mark) {
    switch (true) {
        case (mark > 40):
            return "pass";
        default:
            return "fail";
    }
}
console.log("If else method :");
console.log(passorfail(90));
console.log(passorfail(15));
console.log("Switch method :");
console.log(passorfailusingswitch(22));
console.log(passorfailusingswitch(82));
console.log("******************************************************");
//3. Write a program to determine the type of triangle (equilateral, isosceles, or scalene) based on its sides.
var a, b, c;
function checktriangle(a, b, c) {
    if (a == b && b == c && a == c)
        return "Equilateral triangle";
    else if (a == b || a == c || b == c)
        return "Isosceles Triangle";
    else
        (a !== b || b !== c || a !== c);
    return "Salene Triangle";
}
console.log(checktriangle(10, 20, 10));
console.log(checktriangle(20, 20, 20));
console.log(checktriangle(10, 20, 30));
console.log("******************************************************");
//4. Implement a program to check if a string is a palindrome or not.
var palindromecheck = 'Vicky';
var revstring = '';
for (var i = palindromecheck.length - 1; i >= 0; i--) {
    revstring += palindromecheck[i];
}
if (palindromecheck === revstring)
    console.log("Palindrome");
else
    console.log("Not a palindrome");
console.log("******************************************************");
//5. Write a program that checks if a given year is a leap year.
var year = 2024;
if (year % 4 == 0 && year % 100 !== 0 || year % 400 === 0)
    console.log(year + " it is leap year");
else
    console.log(year + "  not a leap year");
switch (true) {
    case (year % 4 == 0 || year % 400 == 0):
        console.log(year + " Leap Year");
    case (year % 100 !== 0):
        console.log(year + "It is not a leap year");
}
console.log("*********************************");
console.log("***Loops: Answers***");
//1. Write a program to print the first 10 numbers in the Fibonacci sequence.
var firstnumber = 0;
var secondnumber = 1;
for (var i = 0; i < 10; i++) {
    console.log(firstnumber);
    var Fibonacci = firstnumber + secondnumber;
    firstnumber = secondnumber;
    secondnumber = Fibonacci;
}
/*2. Create a program that prints all prime numbers between 1 and 100.

let prime: number=100;

for(let i=0;i<100;i++)
{
    if(i==0 || i==1)
        console.log("not a prime number");

    else if(prime%i===0)
    {
        let count=0;
        count++;
if(count==2)
            console.log(i+" ");

    }
        
}*/
//3. Write a program to reverse a string using a loop.
var actualstring = 'Test reverse string';
var reversestring = '';
for (var i = actualstring.length - 1; i >= 0; i--) {
    reversestring += actualstring[i];
}
console.log(reversestring);
//4. Implement a program to calculate the factorial of a given number using a loop.
var factorial = 5;
for (var i = factorial - 1; i > 0; i--) {
    factorial *= i;
    console.log(factorial);
}
//5. Write a program to generate a multiplication table for numbers 1 to 10.
for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
        console.log(i + "*" + j + "=" + i * j);
    }
    console.log("************");
}
console.log("******************************************************");
//To practice functions, named functions, and arrow functions in TypeScript:
console.log("***Functions: Answers ***");
// 1. Write a function that calculates the area of a circle given its radius.4
var radius = function (radius) {
    return Math.PI * radius * radius;
};
console.log(radius(10));
console.log("******************************************************");
//2. Create a function to check if a number is positive, negative, or zero.
var checknumber = function (chkno) {
    if (chkno > 0)
        return "Positive Number";
    else if (chkno == 0)
        return "Zero";
    else
        return "Negative Number";
};
console.log(checknumber(0));
console.log(checknumber(21));
console.log(checknumber(-20));
console.log("******************************************************");
//3. Write a function that takes an array of numbers and returns the sum of all the numbers.
var sum = 0;
var sumofarray = function (num_array) {
    for (var i = 0; i < num_array.length; i++) {
        sum += num_array[i];
    }
    return sum;
};
console.log(sumofarray([20, 10, 25, 35, 10])); //100
console.log("******************************************************");
//4. Implement a function to find the maximum value in an array.
var maxno = 0;
var maximumvalue = function (storednumbers) {
    for (var i = 0; i < storednumbers.length; i++) {
        if (storednumbers[i] > maxno)
            maxno = storednumbers[i];
    }
    return maxno;
};
console.log(maximumvalue([11, 5, 6, 18, 2]));
console.log("******************************************************");
// 5. Create a function that reverses the words in a given sentence.
var rev = '';
var reversefunction = function (sent1) {
    for (var i = sent1.length - 1; i >= 0; i--) {
        rev += sent1[i];
    }
    return rev;
};
console.log(reversefunction("testing reverse function"));
console.log("******************************************************");
console.log("***Named Functions: Answers***");
// 1. Write a named function to convert a temperature from Celsius to Fahrenheit.
function toconvertfahrenheit(celsius) {
    var fahrenheit = (9 / 5 * celsius) + 32;
    return fahrenheit;
}
console.log(toconvertfahrenheit(36));
console.log("******************************************************");
// 2. Create a named function that finds the factorial of a number.
function findfactorial(factorialvalue) {
    var answerfactorial = 1;
    for (var i = 1; i <= factorialvalue; i++) {
        answerfactorial *= i;
    }
    return answerfactorial;
}
console.log(findfactorial(5));
console.log("******************************************************");
// 3. Implement a named function that checks if a given string contains vowels.
function checkvowels(chkvowels) {
    for (var n = 0; n < chkvowels.length; n++) {
        if ("aeiouAEIOU".includes(chkvowels[n])) {
            return "Contains Vowels";
        }
    }
    return "Doesn't contain Vowels";
}
console.log(checkvowels("Apple"));
console.log("******************************************************");
// 4. Write a named function to determine if a given year is a leap year.
function tofindleapyear(chkyear) {
    if (chkyear % 4 == 0 || chkyear % 400 == 0)
        return "Leap Year";
    else if (chkyear % 100 !== 0)
        return "Not a leap year";
    else
        return "Not a leap year";
}
console.log(tofindleapyear(2029));
console.log("******************************************************");
/* 5. Create a named function that returns the greatest common divisor (GCD) of two numbers.
function tofindGCD(gcd:number,gcd1:number):number
{
    let commongcdvalue:number[];
 let highnumber=function()
 {
   if(gcd>gcd1)
       return gcd;
   else
      return gcd1;
 }

 for(let i=1;i<highnumber();i++)
 {
    if(gcd%i==0 && gcd1%i==0)
        commongcdvalue=i;
        return commongcdvalue;
 }
 
}
console.log(tofindGCD(10,20))*/
console.log("***********************************************************************");
console.log("Arrow Functions:**Answers**");
//1. Write an arrow function to find the square of a number.
var squarenumbers = function (sq_no) { return sq_no * sq_no; };
console.log(squarenumbers(10));
console.log("******************************************************");
//2. Create an arrow function that filters out even numbers from an array.
var oddoreven = function (chkstatus) {
    return chkstatus % 2 === 0;
};
console.log(oddoreven(25));
console.log("******************************************************");
//3. Implement an arrow function that calculates the average of a list of numbers.
var avgofnumbers = function (chkavg) {
    var Avg = 0;
    for (var i = 0; i < chkavg.length; i++) {
        Avg += chkavg[i];
    }
    return Avg / chkavg.length;
};
console.log("Average of list :" + avgofnumbers([10, 55, 25, 5, 6]));
console.log("******************************************************");
//4. Write an arrow function to return the length of the longest string in an array.
var longeststring = function (long) {
    var lengthystring = '';
    for (var i = 0; i < long.length; i++) {
        if (long[i].length > lengthystring.length)
            lengthystring = long[i];
    }
    return lengthystring;
};
console.log(longeststring(["test", "automation", "vky", "vicky"]));
console.log("******************************************************");
//5. Use an arrow function to map over an array and return each number squared.
var sqarr = function (arr) { return arr.map(function (num) { return num * num; }); };
console.log(sqarr([11, 13, 15, 10, 5]));
console.log("******************************************************");
