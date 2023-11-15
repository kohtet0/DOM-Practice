// selector id
// const heading = document.getElementById("headingId")
// const para = document.getElementById("paraId") => html paragraph element

// selector class
// const heading = document.getElementsByClassName("headingClass") => html collection
// const para = document.getElementsByClassName("paraClass") => html collection

// selector tagname
// const heading = document.getElementsByTagName("h1") => html collection
// const para = document.getElementsByTagName("p") => html collection

// const heading = document.getElementsByName("headingName"); => node list
// const para = document.getElementsByName("paraName"); => node list

// console.log(heading.className);
// console.log(heading.classList.add("hello"));
// console.log(heading.classList.remove("hello"));
// console.log(heading.classList.add("hello"));
// console.log(heading.classList.contains("hello"));
// console.dir(heading.classList.forEach((el) => {
//     console.dir(el.concat(" aa"))

//     return;
// }));

// console.log(heading.classList)

// console.dir(para);

// const img = document.getElementById("img")

// console.dir(img);
// console.dir(img.src);
// console.dir(img.setAttribute("src", "./img/download.jpeg"));

// // img.src = "./img/download.jpeg"

// console.dir(img.src);

// const inputFile = document.querySelectorAll(".inputFile")


// inputFile[0].addEventListener("change", (event) => {
//     // console.log(inputFile[0].files[0].webkitRelativePath)
//     console.log("U Change")
//     let url = inputFile[0].files[0].webkitRelativePath
//     console.log(url)
//     img.setAttribute("src", `../${url}`)
// })