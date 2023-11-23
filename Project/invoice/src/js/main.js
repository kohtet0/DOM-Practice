// selector
// ========
const app = document.querySelector("#app");
const addRecordForm = app.querySelector("#addRecordForm");
const formSelect = app.querySelector("#formSelect");
const formInput = app.querySelector("#formInput");
const tableBody = app.querySelector("#tableBody");
const allTotal = app.querySelector(".allTotal");
const printBtn = app.querySelector("#printBtn");

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

// this code for calculate total
const calculateTotal = () => {
  allTotal.innerText = [...document.querySelectorAll(".rowTotal")].reduce(
    (pv, cv) => pv + parseFloat(cv.innerText),
    0
  );
};

// this code for table row
const createRow = (name, price, quantity) => {
  const total = price * quantity;
  const tr = document.createElement("tr");
  tr.className =
    "new group even:bg-white even:dark:bg-gray-900 odd:bg-gray-50 odd:dark:bg-gray-800 border-b dark:border-gray-700";

  tr.innerHTML = `
      <td class="px-6 py-3 text-center border-r border-neutral-200 td-counter">
      
      </td>
      <td
      class="px-6 py-3 text-center border-r border-neutral-200 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
      ${name}
      </td>
      <td class="currentPrice px-6 py-3 border-r border-neutral-200 text-end">
      ${price}
      </td>
      <td class="px-6 py-3 border-r border-neutral-200">
        <div class="flex justify-end items-center gap-3">
          <button type="button" class="decrementBtn bg-neutral-600 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-4 h-4">
            <path fill-rule="evenodd" d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
            </svg>      
          </button>
          <div class="rowQ">${quantity}</div>
          <button type="button" class="incrementBtn bg-neutral-600 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-4 h-4 pointer-events-none">
            <path fill-rule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </td>
      <td class="px-6 py-3 text-end flex justify-end items-center">
        <button class="delBtn bg-neutral-600 rounded-lg p-1 absolute hidden pointer-events-none group-hover:pointer-events-auto group-hover:translate-x-9 group-hover:block">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-4 h-4 pointer-events-none">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </button>
        <div class="rowTotal">
        ${total}
        </div> 
      </td>
      
  `;

  tableBody.append(tr);

  // const decrementBtn = app.querySelector(".decrementBtn");
  // const rowQ = app.querySelector(".rowQ");
  // const incrementBtn = app.querySelectorAll(".incrementBtn");
  // const rowTotal = app.querySelector(".rowTotal")

  // const decrementBtnHandler = () => {
  //   console.log("u click")
  // }

  // const incrementBtnHandler = () => {
  //   let incrTotal = parseFloat(rowQ.innerText) + 1;
  //   rowQ.innerText = incrTotal;
  //   rowTotal.innerText = total * incrTotal;
  // };

  // decrementBtn.addEventListener("click", decrementBtnHandler);
  // incrementBtn[0].addEventListener("click", incrementBtnHandler);

  return tr;
};

// initial render
// ==============

productOption(products);

// handler
// =======

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
  }
  addRecordForm.reset();
};

const incrementBtnHandler = (event) => {
  if (event.target.classList.contains("incrementBtn")) {
    let currentQ = parseInt(event.target.previousElementSibling.innerText);
    currentQ += 1;
    event.target.previousElementSibling.innerText = currentQ;
    const currentPrice = event.target.closest("tr").children[2].innerText;
    let currentTotal = event.target.closest("tr").lastElementChild;
    currentTotal.innerText = currentPrice * currentQ;
  }
};

const delBtnHandler = (event) => {
  if (event.target.classList.contains("delBtn")) {
    const currentRow = event.target.closest("tr");
    currentRow.remove();
  }
};

const printHandler = () => {
  print();
};

// listener
// ========

addRecordForm.addEventListener("submit", addRecordFormHandler);
tableBody.addEventListener("click", delBtnHandler);
tableBody.addEventListener("click", incrementBtnHandler);
printBtn.addEventListener("click", printHandler);

// observer
// ========

const observerCallBack = () => {
  calculateTotal();
};

const observerOptions = {
  childList: true,
  subtree: true,
};

const observer = new MutationObserver(observerCallBack);
observer.observe(tableBody, observerOptions);
