import { formSelect, tableBodyUi } from "./selector";

// for form selectbox ui
export const inputSelectUi = (items) => {
  items.forEach(({ id, name }) => {
    const options = new Option(name, id);
    formSelect.append(options);
  });
};

export const createTableBodyUi = (id, name, price, quantity ) => {
  const total = price * quantity;

  const clone = tableBodyUi.content.cloneNode(true);

  const currentRow = clone.querySelector(".currentRow");
  const currentRowProductName = currentRow.querySelector(".product-name");
  const currentRowProductPrice = currentRow.querySelector(".product-price");
  const currentRowProductQuantity =
    currentRow.querySelector(".product-quantity");
  const currentRowProductTotal = currentRow.querySelector(".product-total");

  currentRow.setAttribute("product-id", id);
  currentRowProductName.innerText = name;
  currentRowProductPrice.innerText = price;
  currentRowProductQuantity.innerText = quantity;
  currentRowProductTotal.innerText = total;
};
