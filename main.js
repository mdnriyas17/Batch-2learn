// const rootelement = document.getElementById("root");

// const inputbox = document.createElement("input");
// rootelement.appendChild(inputbox);
// inputbox.setAttribute("id", "inputbox");
// inputbox.setAttribute("type", "text");
// inputbox.setAttribute("readonly", "true");

// // button div

// const parentbtn = document.createElement("div");
// rootelement.appendChild(parentbtn);
// parentbtn.setAttribute("id", "buttons");

// // buttons

// const btn = [ "CE", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];

// for (let i = 0; i < btn.length; i++) {
//     const button = document.createElement("button");
//     button.innerText = btn[i];
//     parentbtn.appendChild(button);
// }

// const buttonall = document.querySelectorAll("button");
// const inputval = document.getElementById("inputbox");

// for (let i = 0; i < buttonall.length; i++) {
//     buttonall[i].addEventListener("click", () => {
//         if (buttonsEl[i] == "CE") {
//             inputval.value = "";
//         }
//         else if (buttonsEl[i] == "=") {
//             inputval.value = eval(inputval.value); // 5 + 8 - 0 = 13
//         }
//         else {
//             inputval.value += buttonsEl[i];  // 5 + 8 - 0
//         }
//     });
// }

// function sumno(num){
//     let sum = 0;

//     while(num > 0){
//         const rem = num % 10;
//         num = Math.floor(num / 10);
//         sum = sum + rem;
//     }
//     return sum
// }

// console.log(sumno(1234))

// const name1 = "demo user";

// const val = async (name) => {
//     console.log(name);
//     console.log("starting");
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("finished");
//             resolve();
//         }, 2000);
//     });
//     console.log("end");
// };

// val(name1);

//MERN == MongoDB,Express.js,React.js,Node.js

//MongoDB == NoSQL Database

//Express == Node.js web application framework

//React == JavaScript library for building user interfaces

//Node.js == JavaScript runtime environment for server-side JavaScript

//MEAN == MongoDB,Express.js,Angular.js,Node.js

//MongoDB == NoSQL Database

//Express == Node.js web application framework

//Angular == JavaScript framework for building web applications

//Node.js == JavaScript runtime environment for server-side JavaScript

//Callback function == function passed as an argument to another function

// const btn =(a,b)=>{
//    const result = document.getElementById("root")
//    result.innerHTML = a + b
// }

// const sum = (a, b) => {
//     btn(a, b)
// }

// sum(50, 20)

// function sum(a, b) {
//   return a + b;
// }
// function sum(a, b, Callback) {
//   return Callback(a, b);
// }

// sum(10, 20, (a, b) => {
//   console.log(a + b);
// });

// const sum1 = (a, b) => {
//     return a + b
// }

// const sum2 = (a, b, Callback) => {
//   return Callback(a, b);
// };

// sum2(10, 20, (a, b) => {
//   console.log(a + b);
// });

//synchronous function and asynchronous function

//javascript is Async

// line by line execution

// const ff = (a, b) => {
//   setTimeout((a, b) => {
//     return new Promise((resolve, reject) => {
//       if (a > b) {
//         resolve();
//       } else {
//         reject();
//       }
//     });
//   }, 2000);
// };
// const val = async (a, b) => {
//   console.log("starting");
//   await new Promise((resolve) => {
//   });
//   await ff(a, b);
//   console.log("end");
// };

// console.log(val(10, 20));




// const bt = (a, b) => {
//     return a + b
// }

// const bt1 = (a, b) => {
//     return bt(a, b);
// }

// console.log(bt1(10, 20))

// const ff = (a, b,Callback) => {
//     return Callback(a, b);
// }

// console.log(ff(10, 20, (a, b) => {
//     console.log(a + b)
// }))


// const name1 = "demo user";

// const val = async (name) => {
//     console.log(name);
//     console.log("starting");
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("finished");
//             resolve();
//         }, 2000);
//     });
//     console.log("end");
// }

// val(name1)