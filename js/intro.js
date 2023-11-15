// console.log("Bom");

// let name = window.prompt("what is your name");
// window.alert(`My name is ${name = "hello"}`);

// const area = (width, breadth) => {
//   return width * breadth;
// };

// const width = window.prompt("enter your room width in ft")
// const breadth = window.prompt("enter your room breadth in ft")
// window.alert(`My room area is ${area(width, breadth)}`)

// const ask = window.confirm("are you ready to go to school");
// window.alert(ask ? "I'm ready" : "not yet");

console.log(document);

// selector
const heading = document.getElementById("heading");
// heading.innerText = "Min Ga "
// console.log(heading);
// console.log(heading.innerText);
// console.log(heading.innerHTML);

const para = document.getElementById("para");
// console.log(para);
// console.log(para.innerText);
// console.log(para.innerHTML);

const google = document.getElementById("google");
// console.log(google);
// console.log(google.innerText);
// console.log(google.innerHTML);

const mmsIt = document.getElementById("mmsIt");
// console.log(mmsIt);
// console.log(mmsIt.innerText);
// console.log(mmsIt.innerHTML);

const lists = document.getElementById("lists");
// console.log(lists);
// console.log(lists.textContent);
// console.log(lists.innerText);
// console.log(lists.innerHTML);

const textInput = document.getElementById("textInput");
// console.log(textInput);
// console.log(textInput.innerText);
// console.log(textInput.innerHTML);

const btn = document.getElementById("btn");
// console.log(btn);
// console.log(btn.innerText);
// console.log(btn.innerHTML);

// function
btn.addEventListener("click", (event) => {
  console.log("U click");
  lists.innerHTML += `<li>${textInput.value}</li>`;
  textInput.value = null;
});


