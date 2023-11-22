// selector
const app = document.querySelector("#app");
const addRecordForm = app.querySelector("#addRecordForm");
const formSelect = app.querySelector("#formSelect");
const formInput = app.querySelector("#formInput");

// data
const products = [
  {
    id: 1,
    name: "Apple",
    price: 500,
  },
  {
    id: 2,
    name: "Mango",
    price: 1500,
  },
  {
    id: 3,
    name: "Banana",
    price: 200,
  },
  {
    id: 4,
    name: "Orange",
    price: 600,
  },
  {
    id: 5,
    name: "Lime",
    price: 100,
  },
];

// function
const productOption = (items) => {
  items.forEach((item) => {
    const option = new Option(item.name, item.id);
    console.log(option);
    formSelect.append(option);
  });
};

// initial render
productOption(products);

// handler
const addRecordFormHandler = (event) => {
  event.preventDefault();
  if (formSelect.value != "Choose a fruit") {
    const currentProduct = products.find(
      (product) => product.id == formSelect.value
    );
    console.log(currentProduct)


    addRecordForm.reset()
  }
};

// listener
addRecordForm.addEventListener("submit", addRecordFormHandler);
