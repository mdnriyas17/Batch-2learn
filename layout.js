// const btn = document.getElementById("btn");

// // btn.addEventListener("click", ()=>arr());

// // function myfuction() {
// //     document.getElementById("result").innerHTML = "Hello World"
// // }

// // btn.addEventListener("click", function () {
// //     document.getElementById("result").innerHTML = "Hello World"
// // })

// // btn.addEventListener("dblclick", () => {
// //     document.getElementById("result").innerHTML = "Hello World"
// // })

// //fat arrow function syntax

// // const arr = () => {
// //     console.log("hiii");
// // }



// celius to fahrenheit converter in DOM


const rootdiv = document.getElementById("root");


// create heading
const mainheading = document.createElement("h1");
mainheading.innerHTML = "CM Converter";
rootdiv.appendChild(mainheading);

// create input

const input = document.createElement("input");
input.type = "number";
input.setAttribute("id", "input");
input.setAttribute("placeholder", "Enter Value in CM");
input.setAttribute("class", "input");
rootdiv.appendChild(input);


// create button

const btn = document.createElement("button");
btn.innerText = "Convert";
btn.setAttribute("id", "btn");
// btn.setAttribute("onclick", "myFunction()");
rootdiv.appendChild(btn);

// create output

const output = document.createElement("p");
output.setAttribute("id", "output");
rootdiv.appendChild(output);


//add event listener

btn.addEventListener("click", () => {
     const celsius = document.getElementById("input").value;
     if(celsius == ""){
        output.innerText = "Please enter a value";
     }else{
        const fahrenheit = celsius/2.54
        output.innerText = `${celsius} CM is ${fahrenheit.toFixed(2)} Inch`;
     }
})


// const myFunction = () => {
//     const celsius = document.getElementById("input").value;      //<input id="input" placeholder="enternumber"/> 100 10 ""
//     if(celsius == ""){
//         const output = document.getElementById("output");
//         output.innerText = "Please enter a value";
//     }else{  
//         const fahrenheit = (celsius * 9/5) + 32;
//         const output = document.getElementById("output");
//         output.innerText = `${celsius}°C is ${fahrenheit}°F`;
//     }
// }

 