import { allRowTotal, formSelect, tableBody } from "./selectors";

export const createOption = (items) => {
  items.forEach(({ id, name, price }) => {
    const option = new Option(name, id);
    formSelect.append(option);
  });
};

export const createTableRow = (id, name, price, quantity) => {
  const tableUi = document.querySelector(".tableUi").content.cloneNode(true);

  const total = price * quantity;

  const tableRow = tableUi.querySelector(".tableRow");
  tableRow.setAttribute("product-id", id);
  const productName = tableRow.querySelector(".product-name");
  const productPrice = tableRow.querySelector(".product-price");
  const productQuantity = tableRow.querySelector(".product-quantity");
  const productTotal = tableRow.querySelector(".product-total");

  productName.innerText = name;
  productPrice.innerText = price;
  productQuantity.innerText = quantity;
  productTotal.innerText = total;

  tableBody.append(tableRow);

  return tableRow;
};

export const calculateAllTotal = () => {
  const currentProductPrice = app.querySelectorAll(".product-total");

  let total = 0;
  currentProductPrice.forEach((price) => {
    total += parseFloat(price.innerText);
  });
  allRowTotal.innerText = total;
};
