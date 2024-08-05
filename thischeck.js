// class Person {
//   constructor(name) {
//     this.jjj = name;
//   }

//   introduce() {
//     console.log(`Hello, my name is ${this.jjj}`);
//   }
// }

// const otto = new Person("Otto");
// const mam = new Person("Mam");

// otto.introduce();
// mam.introduce();

// class Model {
//   constructor(name) {
//     this.name = name;
//   }

//   static hello() {
//       console.log(this.name);
//   }

// //   hello() {
// //     console.log(this);
// //   }
// }

// const otto = new Model("Otto");
// const mam = new Model("Mam");

// Model.hello();

// class Student {
//   constructor(name, age, marks) {
//     this.student_name = name;
//     this.student_age = age;
//     this.student_marks = marks;
//   }
// }

// class Teacher extends Student {
//   constructor(name, age, marks, subject) {
//     super(name, age, marks);
//     this.teacher_subject = subject;
//   }
// }

// const t1 = new Teacher("kowshika", 20, 120, "java");
// const s1 = new Student("kowshika", 20, 100);
// console.log(t1);
// console.log(s1);
// const nass = "welcome"
// class Database {
//   constructor() {
//     this.model = null;
//     this.wel = nass
//     this.connectionUri = "mongodb://localhost:27017";
//   }

//   connect(dara) {
//     console.log("this.connectionUri", dara);
//   }
// }

// class User extends Database {
//   constructor() {
//     super();
//   }

// }

// const user = new User();
// user.model = "hello";
// user.console();
// user.connect("jjjjj");
// console.log(user)

// const dob = new Date(2000, 0, 1, 0, 0, 0, 0);

//     const age = new Date().getFullYear() - dob.getFullYear();

//     dob.setFullYear(new Date().getFullYear());

//     console.log(dob);

// const rootdiv = document.getElementById("root");

// const heading = document.createElement("h1");
// heading.innerHTML = "This is heading";
// rootdiv.appendChild(heading);

//button with onclick
// const btn = document.createElement("button");
// btn.innerHTML = "black";
// btn.setAttribute("id", "btn");
// rootdiv.appendChild(btn);
// btn.addEventListener("click", () => {
//     const text = document.getElementById("btn").innerText
//     if (text === "white") {
//         document.getElementById("btn").style.backgroundColor = "black";
//         document.getElementById("btn").style.color = "white";
//         document.getElementById("btn").innerText = "black";
//         document.body.style.backgroundColor = "white";
//     } else {
//         document.getElementById("btn").style.backgroundColor = "white";
//         document.getElementById("btn").style.color = "black";
//         document.getElementById("btn").innerText = "white";
//         document.body.style.backgroundColor = "black";
//     }
// })

// const inut = document.createElement("input");
// inut.type = "date";
// inut.setAttribute("class", "input");
// inut.setAttribute("id", "input");
// rootdiv.appendChild(inut);

// const para = document.createElement("p");
// para.innerText = "The class attribute was added to this element.";
// para.setAttribute("class", "democlass");
// para.setAttribute("id", "myH1");
// para.style.backgroundColor = "yellow";
// rootdiv.appendChild(para);
// const btn = document.createElement("button");
// btn.innerHTML = "click";
// btn.setAttribute("id", "btn");
// rootdiv.appendChild(btn);
// btn.addEventListener("click", () => {
//     const text = document.getElementById("input").value
//     const currentDate = new Date();
//     const birthdayDate = new Date(text);
//     let age = currentDate.getFullYear() - birthdayDate.getFullYear();
//     const month = currentDate.getMonth() - birthdayDate.getMonth();

//     if(month <0 || (month===0 && currentDate.getDate() < birthdayDate.getDate())){
//         document.getElementById("myH1").innerHTML = `your age is ${age-1}`;
//     }
//     else{
//         document.getElementById("myH1").innerHTML = `your age is ${age}`;
//     }
// })

// const mystudent = [
//     {
//         name: "kowshika",
//         age: 20
//     },
//     {
//         name: "kowshika1",
//         age: 21
//     },
//     {
//         name: "kowshika2",
//         age: 22
//     }
// ]
// class Student {
//   constructor() {
//     this.name = mystudent.map((gg) => gg.name);
//     this.age = mystudent.map((gg) => gg.age);
//   }
//   async hello() {
//     console.log("this");
//   }
// }
// class Teacher extends Student {
//   constructor() {
//     super();
//     this.subject =  "java";
//   }

//   async teacher() {
//     console.log("this subject is", this.subject);
//   }
// }

// class school extends Teacher {
//   constructor() {
//     super();
//     this.marks = 120;
//   }
// }

// const s1 = new school();
// const t1 = new Teacher();
// console.log(s1)

// const rootdiv = document.getElementById("root");

// // button with onclick
// const btn = document.createElement("button");
// btn.innerHTML = "black";
// btn.setAttribute("id", "btn");

// rootdiv.appendChild(btn);
// btn.addEventListener("click", () => {
//     const text = document.getElementById("btn").innerText
//     if (text === "white") {
//         document.getElementById("btn").style.backgroundColor = "black";
//         document.getElementById("btn").style.color = "white";
//         document.getElementById("btn").innerText = "black";
//         document.body.style.backgroundColor = "white";
//     } else {
//         document.getElementById("btn").style.backgroundColor = "white";
//         document.getElementById("btn").style.color = "black";
//         document.getElementById("btn").innerText = "white";
//         document.body.style.backgroundColor = "black";
//     }
// })

// const normal = "komathi";

// class Myclass {
//   constructor(teacher, marks) {
//     this.name = normal;
//     this.age = 20;
//     this.teacher = teacher;
//     this.marks = marks;
//     this.sayhi = function () {
//       console.log(this.name);
//     };
//   }
//   sayhi() {
//     console.log(this.name);
//   }

//   sayhi2() {
//     console.log(this.sayhi);
//   }
// }
// const obj = new Myclass("kowshika",650);

// console.log(obj)

// student  teacher   school

// class Student {
//   constructor(stdname, stdage) {
//     this.name = stdname;
//     this.age = stdage;
//   }
//   introduce() {
//     console.log(`Hello, my name is ${this.name} and my age is ${this.age}`);
//   }
// }
// class Teacher extends Student {
//   constructor(manname, stdname, stdage) {
//     super(stdname, stdage);
//     this.mam = manname;
//   }
// }

// class School extends Teacher {
//   constructor(sclname, manname, stdname, stdage) {
//     super(manname, stdname, stdage);
//     this.school = sclname;
//   }
// }

// const s = new School("scl1", "md", "kowshika", 20);
// console.log(s);

// s.introduce();




//Monolatic and microservice

//database 1  ===> android
//server 1

//microservice
// database infinity  ===> iphone
// server infinity





// const rootdiv = document.getElementById("root");

// // heading

// const heading = document.createElement("h1");
// heading.innerText = "Charcter code ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// rootdiv.appendChild(heading);


// //input
// const input = document.createElement("input");
// input.setAttribute("class", "input");
// input.type = "number";
// input.setAttribute("id", "input");
// input.setAttribute("placeholder", "Enter the number");
// rootdiv.appendChild(input);


// /// button

// const btn = document.createElement("button");
// btn.innerHTML = "click";
// btn.setAttribute("id", "btn");
// rootdiv.appendChild(btn);

// //para

// const para = document.createElement("p");
// para.setAttribute("id", "para");
// rootdiv.appendChild(para);


// btn.addEventListener("click", () => {
//     const text = document.getElementById("input").value
//     if (text === "") {
//         alert("please enter the value")
//     } 
//     else if (text <= 26) {
//         const text2 = document.getElementById("input").value
//         para.innerText = `The charcter code is ${data[text2 - 1]}`
//     }
//     else {
//         const text3 = document.getElementById("input").value
//         const reminder = text3 % 26
//         const divmod = (x, y) => [Math.floor(x / y)];
//         const qotient = divmod(text3, 26)
//         para.innerText = `The charcter code is ${data[qotient - 1]}${data[reminder - 1]}`
//     }

// })

// const differce = "hello";
// // const dara = data.split("").join("");
// // const result1 = [...dara];
// // const differce = []
// // const result = result1.forEach((value, index) => {
// //     differce[index] = value.charCodeAt(0)
// // })
// let res = 0;
// for (let i = 0; i < differce.length -1; i++) {
//     res += Math.abs(differce.charCodeAt(i) - differce.charCodeAt(i + 1))
// }
// console.log(res)
// const myfunction = () => {
//     const text = document.getElementById("input").value
//     let res = 0;


//     if(text.length == 1){
//         res = text.charCodeAt(0) - 64
//     }
//     else{
//         res = text.charCodeAt(0) - 64
//         res = res * 26
//         res = res + text.charCodeAt(1) - 64
//     }
    
//    return res
// }


// create a button

const rootdiv = document.getElementById("root");


// const btn = document.createElement("button");
// btn.innerHTML = "click";
// btn.setAttribute("id", "btn");
// rootdiv.appendChild(btn);

// const para = document.createElement("p");
// para.setAttribute("id", "para");
// para.setAttribute("class", "para");
// para.innerHTML = "The class attribute was added to this element.";

// para.style.display = "none";
// rootdiv.appendChild(para);

// btn.addEventListener("click", () => {
   
//     para.style.display = "block"
//     btn.style.display = "none"
// })

// para.addEventListener("click", () => {
//     para.style.display = "none"
//     btn.style.display = "block"
// })


const btn = document.createElement("button");
btn.setAttribute("id", "btn");
const ankerta = document.createElement("a");
ankerta.setAttribute("href", "about.html");
ankerta.innerHTML = "click";
btn.appendChild(ankerta);
rootdiv.appendChild(btn);


