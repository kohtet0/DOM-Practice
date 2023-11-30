import { calculateAllTotal, createTableRow } from "./functions";
import { addRecordForm, app } from "./selectors";
import { products } from "./variables";

export const addRecordFormHandler = (event) => {
  event.preventDefault();

  const formData = new FormData(addRecordForm);
  const productId = formData.get("formSelect");

  if (productId != "Choose a fruit") {
    const currentProduct = products.find((product) => product.id == productId);
    const productName = currentProduct.name;
    const productPrice = currentProduct.price;
    const productQuantity = formData.get("formInput");

    const isExist = app.querySelector(`tr[product-id="${productId}"]`);

    if (productId != "Choose a fruit") {
      if (isExist) {
        const currentProductPrice = isExist.querySelector(".product-price");
        const currentProductQuantity =
          isExist.querySelector(".product-quantity");
        const currentProductTotal = isExist.querySelector(".product-total");

        const totalOfQuantity =
          parseFloat(currentProductQuantity.innerText) +
          parseFloat(formData.get("formInput"));

        const rowTotal = currentProductPrice.innerText * totalOfQuantity;

        currentProductQuantity.innerText = totalOfQuantity;
        currentProductTotal.innerText = rowTotal;
      } else {
        createTableRow(productId, productName, productPrice, productQuantity);
      }
    }
  }

  addRecordForm.reset();
};

export const rowBtnHandler = (event) => {
  if (event.target.classList.contains("delBtn")) {
    const currentRow = event.target.closest("tr");
    currentRow.remove();
  } else if (event.target.classList.contains("decrementBtn")) {
    const currentRow = event.target.closest("tr")
    const currentProductPrice = currentRow.querySelector(".product-price")
    const currentProductQuantity = currentRow.querySelector(".product-quantity")
    const currentProductTotal = currentRow.querySelector(".product-total")

    
    const currentQuantity = event.target.nextElementSibling;
    console.log(currentQuantity)
  } else if (event.target.classList.contains("incrementBtn")) {
    console.log("u click incrementBtn");
  }
};
