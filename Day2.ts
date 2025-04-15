/*const avegofnumbers=(chkavg:number[]):number=>{
    let Avg:number=0;for(let i=0;i=chkavg.length-1;i++)
     {Avg+=chkavg[i];}
     return Avg/chkavg.length;
}
console.log("Average of list :" +avegofnumbers([10,55,25,5,6]));
//******************************************************************************************* 
function tofindGCD(gcd:number,gcd1:number):number
{
 let highnumber=function() { 
   if(gcd>gcd1)
       return gcd;
   else 
      return gcd1;
 }
 let commongcdvalue:number=1;
 for(let i=1;i<=highnumber();i++)
 {
    if(gcd%i==0 && gcd1%i==0)
            commongcdvalue= i;}
        return commongcdvalue;
 }
 

console.log(tofindGCD(12,18))*/
/*//Print pattern 

for (let i=0;i<5;i++)
{
    for (let j=0;j<5;j++)
    {
        if(j<=i)
           *"
    }
   console.log(" ")
}
let findmo:number[]=[11,19,38,15,33];
const findnumber = findmo.find((search: number): boolean => { return search == 15; });

const searchhigh = findmo.filter((searchfor: number):boolean =>{ return searchfor >30});
console.log(findnumber)
console.log(searchhigh);

//let num1:number;
//let num2:number;
let count=1;
let ans:number;
function findgcd(num1:number,num2:number): number
{
    while(num2<=count)
    {
        if(num1%count==0 && num2%count==0)
        {
            ans=count;
            console.log(count);
        }
   count++;
    }
return ans;
}


console.log(findgcd(10,25))


let prime: number=100;let count=0;

for(let i=0;i<100;i++)
{
    if(i==0 || i==1)
        console.log("not a prime number");

    else 
    {
        for (let j=0;j<i;j++)
        {
            if (prime%i==0)
                 count++;
        }
               if(count<=1)
                     console.log(i+" ");            

    }
        
}*/

/*/functions --> 1. Named function 2. Anonyumous function 3. Arrrow function 
//usage of functions ---> code reusability ->to reduce the number of codes

//1.Named Function 
function addtwonumbers(add1:number,add2:number):number
{
   let sum=add1+add2;
    return sum;
} 

console.log(addtwonumbers(10,20));

//2. Anonymous function 

const multians=function (multi1:number,multi2:number):number
{
  let  multi=multi1*multi2;
    return multi;
}
console.log(multians(5,15));

//3 Arrow function -> compare to normal functions it will help to reduce the line of codes and most important 
// usage to filter, Map or search the array

let findmo:number[]=[11,19,38,15,33];
const findnumber = findmo.find((search: number): boolean => { return search == 15; });
console.log(findnumber);
const searchhigh = findmo.filter((searchfor: number):boolean =>{ return searchfor >30});
console.log(searchhigh);

const sqarr1=(arr:number[]):number[]=> arr.map(num => num * num);
console.log(sqarr1([11,13,15,10,5]));

//sqarr//andha method name/variable name 
//arr//list of array pass pandra , ulla variable vemum adhu variavle assign pandra dhu dan arr
//:number=> // return type 
//arr.map(num=>num*num)*/


let prime: number=100;
let count:number=0;
let chk:number=13;

for(let i=1;i<prime;i++)
{
  if (i==0 || i==1)
        console.log("not a prime number"); 
    for (let j=1;j<=i;j++)
    {
        if (prime%j===0)
        {count++;}
    }
  
  if(count==2)
            console.log(i+" is a prime number ");
  else
            console.log("not a prime number");
 }
        