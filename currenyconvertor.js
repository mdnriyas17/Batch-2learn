 const rootdiv = document.getElementById("root");

// // create heading
// const mainheading = document.createElement("h1");
// mainheading.innerHTML = "Currency Converter";
// rootdiv.appendChild(mainheading);

// // create input

// const input = document.createElement("input");
// input.type = "number";
// input.setAttribute("id", "input");
// input.setAttribute("placeholder", "Enter Value in Currency");
// input.setAttribute("class", "input");
// rootdiv.appendChild(input);

// // create output

// const selectElement = document.createElement("select");//<select></select>

// // Create options and add them to the select element
// const option1 = document.createElement("option");
// option1.text = "INR to USD";
// selectElement.appendChild(option1);

// const option2 = document.createElement("option");
// option2.text = "USD to INR";
// selectElement.appendChild(option2);

// // Add the select element to the DOM
// rootdiv.appendChild(selectElement).innn


// // create button

// const btn = document.createElement("button");
// btn.innerText = "Convert";
// btn.setAttribute("id", "btn");
// btn.setAttribute("onclick", "myFunction()");
// rootdiv.appendChild(btn);

// // create output
// const output = document.createElement("p");
// output.setAttribute("id", "output");
// rootdiv.appendChild(output);

// btn.addEventListener("click", () => {
//     const selectedOption = selectElement.value;
//     const output = document.getElementById("output");
//      if(selectedOption == "INR to USD"){  

//       const inrtousd = document.getElementById("input").value;
//       if(inrtousd == ""){
//         output.innerText = "Please enter a value";
//       } else{
//         output.innerText = `${inrtousd} INR is ${inrtousd/83.50} USD`;
//       }
//     }else{
//         const usd = document.getElementById("input").value;
//         output.innerText = `${usd} USD is ${usd*83.50} INR`;}
// })


const head = document.createElement("h1");
 head.innerHTML = " My Currency Converter";
 head.style.color="white";
 rootdiv.appendChild(head);
  
 // create input
  
 const input = document.createElement("input");
 input.type = "number";
 input.setAttribute("id", "input");
 input.setAttribute("placeholder", "Enter Value in Currency");
 input.setAttribute("class", "input");
 rootdiv.appendChild(input);

 // create output
 
const selectElement = document.createElement("select");//<select></select>
 
 // Create options and add them to the select element
 const option1 = document.createElement("option");
 option1.text = "INR to USD";
 selectElement.appendChild(option1);
  
 const option2 = document.createElement("option");
 option2.text = "USD to INR";
 selectElement.appendChild(option2);

 const option3 = document.createElement("option");
 option3.text = "INR to EURO";
 selectElement.appendChild(option3);

 const option4 = document.createElement("option");
 option4.text = "EURO to INR";
 selectElement.appendChild(option4);

 const option5 = document.createElement("option");
 option5.text = "INR to THAI BAHT";
 selectElement.appendChild(option5);

 const option6 = document.createElement("option");
 option6.text = "THAI BAHT to INR";
 selectElement.appendChild(option6);
  
 // Add the select element to the DOM
 rootdiv.appendChild(selectElement);

 // create button
 
const btn = document.createElement("button");
btn.innerText = "Convert";
btn.setAttribute("id", "btn");
rootdiv.appendChild(btn);
 
// create output
const output = document.createElement("p");
output.setAttribute("id", "output");
rootdiv.appendChild(output);

btn.addEventListener("click", () => {
    const selectedOption = selectElement.value;
    const output = document.getElementById("output");

     if(selectedOption == "INR to USD"){  
     const inrtousd = document.getElementById("input").value;
      output.innerText = `${inrtousd} INR is ${inrtousd/83.50} USD`;
     }

     else if(selectedOption == "USD to INR"){  
     const usd = document.getElementById("input").value;
     output.innerText = `${usd} USD is ${usd*83.50} INR`;}

     else if(selectedOption == "INR to EURO"){ 
     const inr = document.getElementById("input").value;
     output.innerText = `${inr} INR is ${inr*90.78} EURO`;
    }
    else if(selectedOption == "EURO to INR"){
        const eur = document.getElementById("input").value;
        output.innerText = `${eur} EURO is ${eur/90.78} INR`;
    }
    else if(selectedOption == "INR to THAI BAHT"){
        const inr1 = document.getElementById("input").value;
        output.innerText =` ${inr1} INR is ${inr1/0.43} THAI BAHT`;
    }
    else if(selectedOption == "THAI BAHT to INR"){
        const thai = document.getElementById("input").value;
        
        output.innerText = `${thai} THAI BAHT is ${thai*0.43} INR`;
    }
    else {
            output.innerText = "Please enter a value";
          }
        });