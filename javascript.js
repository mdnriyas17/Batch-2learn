// document.getElementById("btn").addEventListener("mouseover", function () {
//     document.getElementById("result").innerHTML = "Hello World"
// })

// let data = "A"
// switch(data){
//     case "A"||"a":{
//         console.log("kaviya")
//         break;
//     }
//     case "jim":{
//         console.log("hbbb")
//         break
//     }
//     default:
//         console.log("null")
// }

// if(learn == "Batch 2learn"){
//     document.getElementById("result").innerHTML = "Batch 2learn"
// }
// else if(learn == "Batch 3learn"){
//     document.getElementById("result").innerHTML = "Batch 3learn"
// }
// else{
//     document.getElementById("result").innerHTML = "Not found"
// }

// Array method
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

// const arr = ["a","z","q","b","a"]
// const arr1 = ["M","N","O","P","Q"]
// const resz = arr.splice(3, 3,"5455")
// console.log(arr.indexOf("11"))   // first index
// console.log(arr.lastIndexOf("11"))

//     const tesy = [1, 2, 3, 4]

// let result1 = 0

// for (let i = 0; i < tesy.length; i++) {
//     result1 += tesy[i]
// }
// console.log(result1)
// const some = ["app","app",54]

// const rest = some.some((value) => {
//     return value  == "app"
// })

// console.log("is not an even number",rest)

// const test = [1, 2, 3, 4, 5]

// const result = test.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue
// })

// console.log(result)

// let result1 = 0

// for (let i = 0; i < test.length; i++) {
//     result1 += test[i]
// }

// console.log(result1)

// let test = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// let result = "";
// for (let i = 0; i < test.length; i++) {
//     result += test[i]
// }
// console.log(result);

// let tes = ""
// const rest = test.forEach((value) => {
//     tes += value.split("").join("")
// })
// console.log(tes)

// const tes1 = test.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// })
// console.log(tes1)

// let arr = [2, 4, 8, 16, 32, 64, 118, 256, 512];

// let res = [];
// for (let i = 1; i <= arr.length; i%=2) {
//     console.log([i]);
//     // res.push(arr[i]);
// }
// console.log(res);

// const result = arr.filter((value) => {
//     return value % 2 == 0
// })
// console.log(result)

/*
1.data types

Primitive
non-primitive

Primitive
1.String "aaa","555","true", "&65"
2.Number 1,2,3
3.Boolean true, false
4.Undefined
5.Null 

non-primitive
1.Array ["a","b","c",1223, true, undefined, null,{name:"kaviya"},[{name:"kaviya"}]]
2.Object {
    [
        {
            name:"kaviya"
        }
    ]
}

2.Operators

++  before and after
 m = 5
 console.log(m) //5
before
++m
console.log(++m) //6
 1+5
 console.log(m) //6

after
console.log(m)//5
m++ 5+1
console.log(m++) //5
console.log(m) //6
--


comparison operator =  
 
== values types not check  5 == "5"  //true
=== values types and check  5 === "5" //false 5===5 //true
!=  !true //false 5
> greater 4
< less
>= greater or equal  5
<= less or equal


bitwise operator 

& and (1=="1" && 1==="1")
| or (1=="1" || 1==="1")
! not !(1=="1")



function

function add(a,b){
    return a+b
} 

const resu = add(10,20)

console.log(resu)


arrow function or fat arrow function or call back function

const name = (a,b)=>{
    return (a+b)
}
const resu = name(10,20)
console.log(resu)


//if else

const m = 2

if(m % 2 == 0){
    console.log("even")
}
else{
    console.log("odd")
}



switch

const learn = "Batch 2learn"

switch(learn){
    case "Batch 2learn":{
        console.log("Batch 2learn")
    } break

    default:{
        console.log("Not found")
    }
}





array Method



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

const sss = ["apple","banana","kiwi","mango","orange","lime","lemeon"]

const result = sss.filter((value)=> value.charAt(0) == "l")

console.log(result)



*/

// const ff = "komathi"

// const result = ff.split("").join("**")
// console.log(result)

// const ff ="hello";
//         const results = ff.split("").reverse().join("*")
//         console.log(results)

//   let A="long"
// const aa= A.repeat("3").join("*")
// console.log(aa)
// console.log(A.split("").join("#"))
// ForEach map filter for find 2 methods

// String Method
// 1.split
// 2.join
// 3.toUpperCase
// 4.toLowerCase
// 5.charAt
// 6.length
// 7.replace
// 8.trim
// 9.slice
// 10.substr
// 11.includes
// 12.startsWith
// 13.endsWith
// 14.repeat
// 15.lastIndexOf

// let name = "abhishek";

//1.split
// console.log(name.split(" "))
//2.join
// console.log(name.split(" ").join("-"))
//3.toUpperCase
// console.log(name.toUpperCase())
//4.toLowerCase
// console.log(name.toLowerCase())

//5.charAt
// console.log(name.charAt(0))
// 8.slice
// const res = name.slice(0,3)
// console.log(res)
//6.length

// console.log(name.length);

//7.replace

// console.log(name.replace("a","k"))

//8.trim
// let name1 = "    abhishek    "

// console.log(name1.trim())
// console.log(name1.trimStart())
// console.log(name1.trimEnd())

//9.slice

// console.log(name.slice(0,3))
// console.log(name)

//10.substr

// console.log(name.substr(0,3))  //deprecated
// console.log(name)

//11.includes

// console.log(name.includes("a"))

//12.startsWith

// console.log(name.startsWith("a"))

//13.endsWith

// console.log(name.endsWith("h"))

//14.repeat
// let name1 = "abhishek "
// console.log(name1.repeat(1000))

//15.lastIndexOf

// console.log(name1.lastIndexOf("l"))

// Date Method

// const date = new Date();
// console.log(date.toString()); //date and time with local timezone
// console.log(date.toDateString()); //date with local timezone
// console.log(date.toTimeString()); //time with local timezone
// const date1 = date.toLocaleString()
// console.log(date1.split(",")[1])
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleTimeString())
// console.log(date.getTime())
// console.log(date.toUTCString()) // date and time with UTC timezone UTC = universal time zone
// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getMilliseconds())
// console.log(date.getTimezoneOffset())
// console.log(date.getUTCFullYear())
// console.log(date.getUTCMonth())
// console.log(date.getUTCDate())
// console.log(date.getUTCDay())
// console.log(date.getUTCHours())
// console.log(date.getUTCMinutes())
// console.log(date.getUTCSeconds())
// console.log(date.getUTCMilliseconds())

// Math Method

//1.random
//2.ceil  //ceiling
//3.floor //floor
//4.round
//5.max
//6.min
//7.abs
//8.pow
//9.sqrt

// console.log(Math.random()*100)//30 29

// console.log(Math.ceil(10))

// console.log(Math.floor(10))

// console.log(Math.round(10.5)) //01234 = same number 56789 = number+1

// console.log(Math.max(10,20,30,40,50))

//  console.log(Math.min(10,20,30,40,50))

//  console.log(Math.abs(-10))  // ABS means Absolute value

// console.log(Math.pow(2,12)) // POW means power 2*2*2

// console.log(Math.sqrt(49)) //SQRT means square root

// Spread Operator

//  let arr = [1,2,3,4,5,6,7,8,9,10]

//  let arr1 = [11,12,13,14,15,16,17,18,19,20]

//  let arr2 = [...arr,...arr1]
//  console.log(arr2)

// let golas = {
//     name:"abhishek",
//     age:20,
//     phone:"1234567890",
//     address:"kollam"
// }

// let aim = {...golas,name:"kowshika"}// spread operator copy

// console.log(aim)
// console.log(golas)

// let n = {
//   name: "abhishek",
// };
// let res = { ...n};

// console.log(n);
// console.log(res);


// ternary operator


// let a = 9

// if(a>5){
//     console.log("a is greater than 5")
// }
// else if(a<5){
//     console.log("a is less than 5")
// }
// else{
//     console.log("a is less than 5")
// }

// const result = a%2 == 0 ? "a is greater than 5" : "a is less than 5";
// console.log(result)



//array method
//1.Map
//2.Filter
//3.Reduce
//4.Find
//5.for loop
//6.forEach
//7. if else
//8. switch case


// const names = "lax";

// const result = names ? names=="abhishek" ? "name is abhishek" : `name is not ${names}` : "not found";

// console.log(result);


// document.getElementById("result").innerHTML = result
//innerHTML or innerText
//createElement, 
// setAttribute
// querySelector vs querySelectorAll
// appendChild vs append


// const para = document.createElement("p");  // <p></p> para tag
// para.innerHTML = "<b>hello</b><i>world</i>";
// document.getElementById("result").appendChild(para);
// const headingtag = document.createElement("h1");
// headingtag.innerText = "The class attribute was added to this element.";
// document.getElementById("result").appendChild(headingtag);


// const para = document.createElement("p");
// para.innerText = "The class attribute was added to this element.";
// document.getElementById("result").appendChild(para);
// para.setAttribute("class", "democlass");
// para.setAttribute("id", "myH1");
// const single = document.querySelector("#result");  // body tag 1st tag 
// console.log(single);
// document.querySelector(".democlass").style.backgroundColor = "yellow";  //id
// const stye = document.querySelectorAll("p");   //body tag all tag

// for (let i = 0; i < stye.length; i++) {
//   stye[i].style.backgroundColor = "yellow";
// }

// document.querySelector(".democlass").style.backgroundColor = "yellow";

// const raa = document.querySelector("p")
// console.log("querySelector",raa)
// const ta = document.querySelectorAll("p")
// console.log("querySelectorAll",ta)


//createElement //4 
// appendChild //2
// append //2
// setAttribute //4 class and id
// querySelector // 1 vs querySelectorAll // 4

const maindiv = document.createElement("div");
maindiv.setAttribute("id", "root");
maindiv.setAttribute("class", "root");
document.body.appendChild(maindiv);

const root = document.getElementById("root");

//create heading
const heading = document.createElement("h1");
heading.innerText = "Calculator";
root.appendChild(heading);
const headingstyle = document.querySelector("h1");
headingstyle.style.textAlign = "center";
headingstyle.style.marginBottom = "20px";

//create input
const input = document.createElement("input");
input.type = "text";
input.setAttribute("id", "input");
input.setAttribute("readonly", "true");
root.appendChild(input);
const inputstyle = document.querySelector("#input");
inputstyle.style.width = "100%";
inputstyle.style.padding = "10px";
inputstyle.style.fontSize = "20px";
inputstyle.style.textAlign = "right";
inputstyle.style.boxShadow = " 0 2px 5px rgba(0, 0, 0, 0.3) inset";
inputstyle.style.borderRadius = "5px";
//create buttons

const parentbtn = document.createElement("div");
parentbtn.setAttribute("id", "buttons");

root.appendChild(parentbtn);
const styleforbtn = document.querySelector("#buttons");
styleforbtn.style.display = "grid";
styleforbtn.style.gridTemplateColumns = "repeat(4, 1fr)";
styleforbtn.style.gridGap = "10px";
styleforbtn.style.margin = "10px";
//create button
const btn = [
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  "00",
  ".",
  "/",
  "C",
  "←",
  "%",
  "=",
];

for (let i = 0; i < btn.length; i++) {
  const button = document.createElement("button");
  button.innerText = btn[i];
  button.setAttribute("id", btn[i]);
  button.setAttribute("value", btn[i]);
  parentbtn.appendChild(button);
}
const buttonall = document.querySelectorAll("button");
for (let i = 0; i < buttonall.length; i++) {
 buttonall[i].style.width = "100%";
 buttonall[i].style.padding = "10px";
buttonall[i].style.fontSize = "24px";
buttonall[i].style.boxShadow = " 0 2px 5px rgba(0, 0, 0, 0.3) inset";
buttonall[i].style.borderRadius = "5px";
buttonall[i].style.border = "none";
buttonall[i].style.cursor = "pointer";
buttonall[i].style.textAlign = "center";
buttonall[i].style.backgroundColor = "#f2f2f2";
buttonall[i].style.color = "#333";
buttonall[i].style.transition = "all 0.3s ease";
buttonall[i].style.outline = "none";
buttonall[i].style.userSelect = "none";
buttonall[i].style.boxSizing = "border-box";
buttonall[i].style.fontFamily = "Arial, sans-serif";

buttonall[i].addEventListener("onmousehover", function() {
  this.style.backgroundColor = "lightgray"; 
  this.style.color = "black";
});

buttonall[i].addEventListener("onmouseleave", function() {
  if(this.value !== "=") {
    this.style.backgroundColor = ""; 
  this.style.color = ""; 
  } else {
    this.style.backgroundColor = "orange";
    this.style.color = "white";
  }
});     
}

const equl = document.querySelector("#buttons > button[value='=']");
equl.style.backgroundColor = "orange";
equl.style.color = "white";
const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("input"); 

for (let i = 0; i < buttonsEl.length; i++) {
buttonsEl[i].addEventListener("click", () => {
const buttonValue = buttonsEl[i].innerText; 
if (buttonValue === "C") {
inputFieldEl.value = "";
}  else if (buttonValue === "DEL") {
inputFieldEl.value = inputFieldEl.value.slice(0, -1);
}

else if (buttonValue === "=") {
inputFieldEl.value = eval(inputFieldEl.value);
} else {
inputFieldEl.value += buttonValue; 
}
});
}
