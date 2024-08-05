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

// async function myDisplay() {
//     console.log("start")
//       let myPromise = new Promise(function(resolve) {
//         setTimeout(function() {resolve("I love You !!");}, 3000);
//       });
//       console.log(await myPromise)
//       console.log("end")
//     }

//     myDisplay();

// const sum = (a, b) => {
//   return a + b;
// };

// const sum1 = async (a, b) => {
//   console.log("starting");
//   let result = await new Promise((resolve) => {  /// wait for 2 second then resolve
//     setTimeout(() => {
//       resolve(sum(a, b));
//     }, 2000);
//   });
//   console.log(result);
//   console.log("end");
// };

// sum1(10, 20);

// const sum2 = (a, b) => {
//   console.log("starting");
//   let result = setTimeout(() => {
//     console.log("sum(a, b)");
// }, 2000);
//   console.log(result);
//   console.log("end");
// };

// sum2(10, 20);

// javascript is Async is line by line execution

//set timeout  set interval

//set timeout  ==  some second after which the function will be executed

// window.setTimeout(function(){console.log('Hello')}, 3000)
// window.console.log('Hello')
// window.alert('Hello')
// window.prompt('Hello')
// window.confirm('Hello')
// window.setInterval(function(){console.log('Hello')}, 3000)

// window.console.log("Hello");
// console.log("Hello1");

// setTimeout(() => {
//   console.log("Hello");
// }, 10000);

// setInterval(() => {
//   console.log("Hello");
// }, 1000);  // every 1 sec it will execute until we stop it

// setTimeout(() => {
//   console.log("Hello=======>");
// },1000);

//user login user name password login check if correct or not logout key password remove suppse screen off more then 30 mins session expired login again

//api call

//http request
//ajax
//fetch
//axios

//fetch

// const url = "https://restcountries.com/v3.1/al?fields=name,flags";

// const data = fetch(url)
// .then((gg) => {
//   return gg.json();
// })

// data.then((gg) => {
//   console.log(gg);   //success
// })

// data.catch((gg) => {
//   console.log(gg);   //error
// })

// axios

// HTTP METHODS
// GET  --> Read data
// POST  ---> Create data send data
// PUT  ---> Update data
// DELETE  ---> Delete data
// PATCH ---> Update part of data

// const data = axios.post(url, {
//   name: "kowshika",
//   password: "kowshika123",
// })

// const data = axios.get(url, {
//   _id: "6250d2a6e7e7b6b7a7b7b7b7",
//   name: "kowshika",
// })
// data.then((gg) => {
//   console.log(gg);
// })

// data.catch((gg) => {
//   console.log(gg);
// })

// JSON ==> javascript object notation

// const data = [
//   {
//     name: "kowshika",
//     password: "kowshika123",
//     age: 20,
//     address: [
//       {
//         city: "kollam",
//         state: "kollam",
//         country: "india",
//       },
//     ],
//     isaboveage18: true,
//   },
//   {
//     name: "kowshika2",
//     password: "kowshika123",
//     age: 20,
//     address: [
//       {
//         city: "kollam",
//         state: "kollam",
//         country: "india",
//       },
//     ],
//     isaboveage18: true,
//   },
//   {
//     name: "kowshika1",
//     password: "kowshika123",
//     age: 20,
//     address: [
//       {
//         city: "kollam",
//         state: "kollam",
//         country: "india",
//       },
//     ],
//     isaboveage18: true,
//   },
// ];
// object in json format each key value pair is seperated by : easy to read and access

// const data1 = JSON.stringify(data);
// console.log(data1);

// data.forEach((gg) => {
//   console.log(gg.name);
// });

/*
if(condition){
    line of execution
} else if(condition){
    line of execution
} else{
    line of execution
}
*/

// else if(this.innertext =="="){
//     if(this.innertext==""){
//         input.value = "0";
//     }
//     input.valur = eval(innertext.value);
// }

// const btn = [
//   "7",
//   "8",
//   "9",
//   "*",
//   "4",
//   "5",
//   "6",
//   "-",
//   "1",
//   "2",
//   "3",
//   "+",
//   "0",
//   "00",
//   ".",
//   "/",
//   "C",
//   "←",
//   "%",
//   "=",
//   "ftyfffut",
// ];

// for (let i = 0; i < btn.length; i++) {
//   console.log(btn[i]);
// }



var typr = new Typed    ("#typed", {
  strings: ["kowshika", "neew", "demo"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
  })