// selector
// ========
const app = document.querySelector("#app");
const addRecordForm = app.querySelector("#addRecordForm");
const formSelect = app.querySelector("#formSelect");
const formInput = app.querySelector("#formInput");
const tableBody = app.querySelector("#tableBody");
const printBtn = app.querySelector("#printBtn");
const allTotal = app.querySelector(".allTotal");
const productShow = app.querySelector(".productShow");
const forProductUi = app.querySelector(".forProductUi");
const newProductForm = app.querySelector(".newProductForm");

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
  // items => products => forEach loop
  items.forEach((item) => {
    const option = new Option(item.name, item.id); // new Option web api
    formSelect.append(option); // append to ui
  });
};

// this code for store product render function
const storeProduct = (items) => {
  items.forEach((item) => {
    const forProductUiClone = forProductUi.content.cloneNode(true);
    const productUi = forProductUiClone.querySelector(".productUi");
    const productUiName = productUi.querySelector(".productUiName");
    const productUiPrice = productUi.querySelector(".productUiPrice");
    productUiName.innerText = item.name;
    productUiPrice.innerText = item.price;

    productShow.append(productUi);
  });
};

// this code for calculate total
const calculateTotal = () => {
  /* this code for all row total calculate and spread arr change, reduce => pv + cv */
  allTotal.innerText = [...document.querySelectorAll(".rowTotal")].reduce(
    (pv, cv) => pv + parseFloat(cv.innerText),
    0
  );
};

// this code for table row
const createRow = (id, name, price, quantity) => {
  const total = price * quantity; // row total
  const tr = document.createElement("tr"); // create tr
  tr.setAttribute("product-id", id); // tr => attribute
  tr.className =
    "new group even:bg-white even:dark:bg-gray-900 odd:bg-gray-50 odd:dark:bg-gray-800 border-b dark:border-gray-700";

  tr.innerHTML = `
      <td class="px-3 sm:px-6 py-2 sm:py-3 text-center border-r border-neutral-200 td-counter">
      
      </td>
      <td
      class="px-3 sm:px-6 py-2 sm:py-3 text-center border-r border-neutral-200 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
      ${name}
      </td>
      <td class="currentPrice px-3 sm:px-6 py-2 sm:py-3 border-r border-neutral-200 text-end">
      ${price}
      </td>
      <td class="px-3 sm:px-6 py-2 sm:py-3 border-r border-neutral-200">
        <div class="flex justify-end items-center gap-3">
          <button type="button" class="active:scale-75 duration-300 decrementBtn bg-neutral-600 rounded-lg opacity-0 group-hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-4 h-4 pointer-events-none">
            <path fill-rule="evenodd" d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
            </svg>      
          </button>
          <div class="currentQuantity">${quantity}</div>
          <button type="button" class="active:scale-75 duration-300 incrementBtn bg-neutral-600 rounded-lg opacity-0 group-hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-4 h-4 pointer-events-none">
            <path fill-rule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </td>
      <td class="px-3 sm:px-6 py-2 sm:py-3 text-end flex justify-end items-center">
        <button class="delBtn active:scale-75 duration-300 bg-neutral-600 rounded-lg p-1 absolute hidden pointer-events-none group-hover:pointer-events-auto group-hover:translate-x-9 group-hover:block">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-4 h-4 pointer-events-none">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </button>
        <div class="rowTotal">
        ${total}
        </div> 
      </td>
      
  `;

  tableBody.append(tr); // tbody => tr append

  return tr;
};

// initial render
// ==============

productOption(products); // productOption => items = products data
storeProduct(products); // product render => items = products data

// handler
// =======

// add record form handle
const addRecordFormHandler = (event) => {
  event.preventDefault(); // page not jump

  if (formSelect.value != "Choose a fruit") {
    const currentProduct = products.find(
      (product) => product.id == formSelect.value
    );

    const isExist = app.querySelector(`[product-id="${currentProduct.id}"]`);

    if (isExist) {
      const existRow = isExist;
      const currentRowPrice = existRow.querySelector(".currentPrice");
      const currentRowQuantity = existRow.querySelector(".currentQuantity");
      const rowTotal = existRow.querySelector(".rowTotal");

      currentRowQuantity.innerText =
        parseFloat(currentRowQuantity.innerText) + formInput.valueAsNumber;
      rowTotal.innerText =
        currentRowPrice.innerText * currentRowQuantity.innerText;
    } else {
      createRow(
        currentProduct.id,
        currentProduct.name,
        currentProduct.price,
        formInput.valueAsNumber
      );
    }

    // this is toast
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Signed in successfully",
    });
  }
  addRecordForm.reset();
};

const decrementBtnHandler = (event) => {
  if (event.target.classList.contains("decrementBtn")) {
    const currentRow = event.target.closest("tr");
    const currentRowPrice = currentRow.querySelector(".currentPrice");
    const currentRowQuantity = currentRow.querySelector(".currentQuantity");
    const rowTotal = currentRow.querySelector(".rowTotal");

    if (parseFloat(currentRowQuantity.innerText) > 1) {
      currentRowQuantity.innerText =
        parseFloat(currentRowQuantity.innerText) - 1;
      rowTotal.innerText =
        currentRowPrice.innerText * currentRowQuantity.innerText;
    }
  }
};

const incrementBtnHandler = (event) => {
  if (event.target.classList.contains("incrementBtn")) {
    const currentRow = event.target.closest("tr");
    const currentRowPrice = currentRow.querySelector(".currentPrice");
    const currentRowQuantity = currentRow.querySelector(".currentQuantity");
    const rowTotal = currentRow.querySelector(".rowTotal");

    currentRowQuantity.innerText = parseFloat(currentRowQuantity.innerText) + 1;
    rowTotal.innerText =
      currentRowPrice.innerText * currentRowQuantity.innerText;
  }
};

// record del handle
const delBtnHandler = (event) => {
  if (event.target.classList.contains("delBtn")) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const currentRow = event.target.closest("tr");
        currentRow.remove();
      }
    });
  }
};

// print handle
const printHandler = () => {
  print();
};

// this code is new product form handler
const newProductFormHandler = (event) => {
  event.preventDefault();
  const formData = new FormData(newProductForm);
  const newProduct = formData.get("newProduct");
  const newPrice = parseFloat(formData.get("price"));
  let index = products.length + 1;
  products.push({
    id: index++,
    name: newProduct,
    price: newPrice,
  });

  formSelect.innerHTML = `<option selected>Choose a fruit</option>`;
  productOption(products);

  productShow.innerHTML = "";
  storeProduct(products);

  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-start",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "success",
    title: "Signed in successfully",
  });

  newProductForm.reset();
};

// listener
// ========

addRecordForm.addEventListener("submit", addRecordFormHandler);
tableBody.addEventListener("click", decrementBtnHandler);
tableBody.addEventListener("click", incrementBtnHandler);
tableBody.addEventListener("click", delBtnHandler);
printBtn.addEventListener("click", printHandler);
newProductForm.addEventListener("submit", newProductFormHandler);

// observer
// ========

// this observer is calculate total when tbody changing
const observerCallBack = () => {
  calculateTotal();
};

const observerOptions = {
  childList: true,
  subtree: true,
};

const observer = new MutationObserver(observerCallBack);
observer.observe(tableBody, observerOptions);
