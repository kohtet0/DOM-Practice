// selector
const app = document.querySelector("#app");
app.classList.add("m-10");

// create ui

// h1
const h1 = document.createElement("h1");
h1.innerText = "Create Table with JS";
h1.title = "create table";
h1.classList = "text-3xl mb-10";

// table
const table = document.createElement("table");
table.classList = "text-center"

// table head
const thead = document.createElement("thead");
table.append(thead);

// thead > table row
const tr1 = document.createElement("tr");
tr1.className = "border-b";
thead.append(tr1);

// tr > th
const createTh = (text) => {
  const th = document.createElement("th");
  th.innerText = text;
  th.className = "w-32";
  tr1.append(th);

  return th;
};

createTh("#");
createTh("Name");
createTh("Phone");
createTh("Gender");

// table body
const tbody = document.createElement("tbody");
table.append(tbody);

// tbody > table row
const tr2 = document.createElement("tr");
tbody.append(tr2);

// tr > td
const createTableD = (text) => {
  const td = document.createElement("td");
  td.innerText = text;
  tr2.append(td);
  return td;
};

createTableD("1")
createTableD("Mg Mg")
createTableD("09112121545")
createTableD("male")


// append
app.append(h1);
app.append(table);
