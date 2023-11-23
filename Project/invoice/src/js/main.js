// selector
// ========
const app = document.querySelector("#app");
const addRecordForm = app.querySelector("#addRecordForm");
const formSelect = app.querySelector("#formSelect");
const formInput = app.querySelector("#formInput");
const tableBody = app.querySelector("#tableBody");
const allTotal = app.querySelector(".allTotal");

// data
// ====
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
// ========
// this code for option function => item loop and append option
const productOption = (items) => {
  items.forEach((item) => {
    const option = new Option(item.name, item.id);
    formSelect.append(option);
  });
};

// this code for table row
const createRow = (name, price, quantity) => {
  const total = price * quantity;
  const tr = document.createElement("tr");
  tr.className =
    "group even:bg-white even:dark:bg-gray-900 odd:bg-gray-50 odd:dark:bg-gray-800 border-b dark:border-gray-700";

  tr.innerHTML = `
      <td class="px-6 py-3 text-center border-r border-neutral-200 td-counter">
      
      </td>
      <td
      class="px-6 py-3 text-center border-r border-neutral-200 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
      ${name}
      </td>
      <td class="px-6 py-3 border-r border-neutral-200 text-end">
      ${price}
      </td>
      <td class="px-6 py-3 border-r border-neutral-200 text-end">
      ${quantity}
      </td>
      <td class="px-6 py-3 text-end flex justify-end items-center">
        <button class="delBtn bg-neutral-600 rounded-lg p-1 absolute hidden pointer-events-none group-hover:pointer-events-auto group-hover:translate-x-9 group-hover:block">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-4 h-4 pointer-events-none">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </button>
        <div class="totalRowTotal">
        ${total}
        </div> 
      </td>
      
  `;

  tableBody.append(tr);
  
  const calculateTotal = () => {
    const totalRow = tr.querySelectorAll(".totalRowTotal");
    console.log(totalRow);
    return;
  };

  return tr;
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

    createRow(
      currentProduct.name,
      currentProduct.price,
      formInput.valueAsNumber
    );

    addRecordForm.reset();
  }
};

// listener
addRecordForm.addEventListener("submit", addRecordFormHandler);
