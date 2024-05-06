/*
1.Data types

Primitive data types easyly understand

1.String "", '' , ` ` , "apple", "25","true", "false","null","undefined","NaN","Infinity","-Infinity", "@#$%"
2.Number 1234567890 , 12.3, 12.345 ,
3.Boolean   true , false   true = 1 , false = 0
4.Null  nothing else is null
5.Undefined nothing is undefined  let x

non primitive data types
1.Array 
["aas0",122,true,{},[{
    "kow":true
}]]

2.Object {
    [
        {
            "kow":true,
            "kow1":false
        }
    ]
}


variable declaration

var kowsalya = "kowsalya" String
let kowsalya = "kowsalya" String
const kowsalya = "kowsalya" String

var is declared 
var is re assignable

let is not declared
let is re assign

const is not declared
const is not re assign


2.Operator

+ add
- sub
* mul
/ div
% mod Lcm 
> get max
< get min
>= greater then or equal
<= less then or equal
== comparison equal and value  5 == "5"  //true true=="true" //true
! not 
=== comparison equal value and type  5 === "5" //false 5===5 //true true==="true" //false

bitwise operator
& and (1=="1" && 1==="1") //false
| or (1=="1" || 1==="1") //true
! not !(1=="1") //false

// 3.function

normal function
fat arrow function or arrow function or callback function


function add(a,b){
    return (a+b) or  a+b return a+b
    return {
        sum:a+b,
        sub:a-b,
        mul:a*b,
        div:a/b
    }
}
const kow = add(10,20)
console.log(kow)
*/

// function kow(a, b) {
//   return ( a / b) ;
// }

// const result = kow(30, 5);
// console.log(result.sum);  //Object accessing . access

// const kow = (a, b) => {
//   return (a / b);
// };

// let a = 10;
//if else syntax 1
// if(!(a % 2 == 0))
// {
// console.log("kow")
// }
// else{
// console.log("kow1")
// }

// if else syntax 2

// let a = 7;

// if(a % 2 == 0)
// {
// console.log("its divisible by 2")
// }
// else if (a == 5)
// {
// console.log("its number 5")
// }
// else{
// console.log("it is an odd number")
// }

// switch case

// let a = "close";

// switch (a) {
//     case "open":
//     case "click":
//     case "hi":
//     case "demo":
//     const ress = (a, b) => {
//      return(a+b);
//     }
//     console.log(ress(10, 20));
//     break;
//     case "close":
//     case "close1":
//     case "close2":
//     case "close3":
//     const resss = (a, b) => {
//      return(a-b);
//     }
//     console.log(resss(10, 20));
//     break;
//   default:
//     console.log("Hi test User");
// }

// const kow = (a) => {
//   // fat arrow function
//   switch (a) {
//     case 0:
//       console.log("kow");
//       break;
//     case 1:
//       console.log("kow1");
//       break;
//     case 2:
//       console.log("kow2");
//       break;
//     default:
//       console.log("kow3");
//   }
// };

// kow();

// ++ before and after  n =5;   ++n = 6;   after n++ = 5;
// --

// let n = 5;

// console.log(n);  // Normal it will print 5
// console.log(++n); // before it will print 6
// //console.log(n++); // after it will print 6
// console.log(n);  // Normal it will print 6

// const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let even = [];
// let odd = [];
// for (let i = 0; i < n.length; i++) {
//     if(n[i] % 2 == 0){
//         even.push(n[i]);
//     }
//     else{
//         odd.push(n[i]);
//     }
// }
// console.log(even);
// console.log(odd)

//array Method

// 1.length
// 2.push
// 3.pop
// 4.shift
// 5.unshift
// 6.splice split
// 7.sort
// 8.reverse
// 9.concat
// 10.indexOf
// 11.lastIndexOf
// 12.find
// 13.filter
// 14.map
// 15.some
// 16.every
// 17.reduce
// 19.ForEach
// 20.reduce

// length

// let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,554];

// console.log(n.length)

// // 2.push
// let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// n.push(12,695,987);

// console.log(n);

// 3.pop

//  let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//  n.pop();

//  console.log(n)

// 4.shift

//  let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//  n.shift();

//  console.log(n)

// 5.unshift

//   let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   n.unshift(66, 44, 88, 99, 11, 22, 33);

//   console.log(n)

// 6.splice

// let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// n.splice(1,2,66,44,88,99,11,22,33);

// console.log(n)

// 7.sort

// let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,13,100];

// n.sort();

// console.log(n)

// 8.reverse

//  let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//  n.reverse();

//  console.log(n);

// 9.concat

// let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let m = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// let result = m.concat(n);

// console.log(result)

// 10.indexOf

// let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = n.indexOf(9);

// console.log(result);
// function add(a,b){
//     return a+b
//     return{
//     sum:a+b,
//     sub:a-b
//     }
//     }

//     const resul = add(10,60)

//     console.log(resul)

// 11.lastIndexOf
// 12.find
// 13.filter
// 14.map
// 15.some
// 16.every
// 17.reduce
// 19.ForEach

// const n = [1, 3, 5, 7, 9];

//lastIndexOf

// console.log(n.indexOf(1)) // First
// console.log(n.lastIndexOf(1)) // Last

//find
// const result = n.find((element) => {
//     // console.log(element);
//   return element % 2 == 0;
// });
// console.log(result);

//filter

// const result = n.filter((element) => {
//   console.log(element);
//   return element % 2 == 0;
// });

// console.log(result);

//map

// const result = n.map((element) => {
//     return element * 2;
// })
// console.log(result) // map return new array

//ForEach

// const result1 = n.forEach((element) => {
// //   return element * 2; // forEach return undefined its not return new array
//   console.log(element * 2);
// });

// // console.log(result1);

//some

//  const result = n.some((element) => {
//  return element % 2 == 0;
// })

// console.log(result)

//every

//  const result = n.every((element) => {
//    return element % 2 == 1;
// })

// console.log(result)

//reduce
// const n1 = [1, 2, 3, 4, 5];
// const result = n1.reduce((accumulator, currentValue) => {
// //   console.log(accumulator, currentValue);
//   return accumulator + currentValue;
// });

// console.log(result);


//DOM manipulation (HTML and CSS inbuilt) js add element  = DOM Means Document Object Model