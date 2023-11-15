document.body.classList.add("p-10");

const createH1 = document.createElement("h1");
createH1.innerText = "Min Ga Lar Par";
createH1.classList.add("text-red-600", "text-3xl");

const createPara = document.createElement("p");
createPara.innerText = "Are u okay";
createPara.classList.add("text-sky-500");

document.body.append(createH1);
document.body.append(createPara);

// const createImg = document.createElement("img");
// createImg.src = "../img/download.jpeg";
// createImg.width = 50;

// createli

const ul = document.createElement("ul");
document.body.append(ul)

// const createli = (text) => {
//     const li = document.createElement("li");
//     li.innerText = text;

//     return li;
// };

const lis = ["apple", "orange", "mango", "banana"];

lis.map((li) => {
  console.log(li);
  const list = document.createElement("li");
  list.innerText = li;

  ul.append(list);
  return list;
});
