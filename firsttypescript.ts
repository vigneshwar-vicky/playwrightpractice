/*let x: number=10;
console.log('x=' + x);
let y1='hello demo';
console.log('y1=' + y1);

let name1:String="Vicky";

function add(x:number,y1:number):number
{
    return x+y1;
}
console.log(add(5,10));*/
//reverse number 

let chk:number=4321;
let rev=0;

while (chk!==0)
{
    
    let rem=chk%10;   // 4 ; 3 ; 1 ; 
    chk=Math.floor(chk/10);  // 123 ; 12
    rev=rev*10+rem;  // 0+4=4; 4*10+3=43
       
} //123>9; 
console.log(rev)