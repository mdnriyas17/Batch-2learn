//InnerHTML and innerText  
// getElementById and querySelector and querySelectorAll
// setAttribute
// createElement 
// appendChild and append


//1.innerHTML

// inside the tag or text <p>hello</p> or hello
// const para = document.createElement("p");
// para.innerHTML = `<p>The class attribute was added to this element.</p>`; //it return same
// document.getElementById("root").appendChild(para);



//2.innerText
// inside the text hello

// const para = document.createElement("p");
// para.innerText = `<p>The class attribute was added to this element.</p>`; 
// document.getElementById("root").appendChild(para);



//3. getElementById
// const rootdiv = document.getElementById("root");  // it return first element

//4. querySelector
// const rootdiv = document.querySelector("#root");  //it return first element 

// console.log(rootdiv)

//5. querySelectorAll

// const rootdivs = document.querySelectorAll("#root");  //it return all element in array

// console.log(rootdivs)


//6.createElement

//heading

//  const heading = document.createElement("h1");
//  heading.innerText = "The class attribute was added to this element.";
//  heading.setAttribute("class", "democlass");
//  heading.setAttribute("id", "myH1");
//  heading.style.backgroundColor = "yellow";
// //  console.log(heading)

// //input

//7.setAttribute
// const input = document.createElement("input");
// input.type = "text";
// input.setAttribute("id", "input");
// input.setAttribute("placeholder", "Enter Value");
// input.setAttribute("class", "input");
// input.setAttribute("value", "10");
// input.setAttribute("readonly", "true");


//8.appendChild


// // heading

// const heading = document.createElement("h1");
// heading.innerText = "The class attribute was added to this element.";
// heading.setAttribute("class", "democlass");
// heading.setAttribute("id", "myH1");
// heading.style.backgroundColor = "yellow";
// rootdiv.appendChild(heading);

//9. append

//  const para = document.createElement("p");
//  para.innerText = "The class attribute was added to this element.";
//  para.setAttribute("class", "democlass");
//  para.setAttribute("id", "myH1");
//  para.style.backgroundColor = "yellow";

//  const para1 = document.createElement("p");
//  para1.innerText = "The class attribute was added to this element1.";
//  para1.setAttribute("class", "democlass");
//  para1.setAttribute("id", "myH1");
//  para1.style.backgroundColor = "red";

//  rootdiv.append(para1,para)


const rootdiv = document.getElementById("root");


// create heading

const mainheading = document.createElement("h1");
mainheading.innerHTML = "Celcius to Fahrenheit Converter";
rootdiv.appendChild(mainheading);


// create input

const input = document.createElement("input");
input.type = "number";
input.setAttribute("id", "input");
input.setAttribute("placeholder", "Enter Value in Celcius");
input.setAttribute("class", "input");
rootdiv.appendChild(input);

// create button

const btn = document.createElement("button");
btn.innerText = "Convert";
btn.setAttribute("id", "btn");
rootdiv.appendChild(btn);

// create output

const output = document.createElement("p");
output.setAttribute("id", "output");
rootdiv.appendChild(output);

// create img

const img = document.createElement("img");
img.src = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
img.setAttribute("id", "img");
img.setAttribute("class", "img");
img.setAttribute("alt", "logo");
img.setAttribute("width", "50px");
img.setAttribute("height", "50px");
img.style.marginLeft = "10px";

rootdiv.appendChild(img);

//add event listener

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  // Do something with the scroll position
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});