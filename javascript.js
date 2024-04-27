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

// Date M