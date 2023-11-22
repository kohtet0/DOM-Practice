// selector
const app = document.querySelector("#app");
const addRecordForm = app.querySelector("#addRecordForm");
const formSelect = app.querySelector("#formSelect");
const formInput = app.querySelector("#formInput");
const addBtn = app.querySelector("#addBtn");
const tableBody = app.querySelector("#tableBody");

// function

// handler
const addBtnHandler = (event) => {
  event.preventDefault();
  console.log("u click");
};

// listener
addBtn.addEventListener("click", addBtnHandler);
