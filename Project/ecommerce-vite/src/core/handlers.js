import { productRender } from "../app/product";
import { products } from "./data";
import { searchBtn, searchInput } from "./selectors";

export const searchBtnHandler = () => {
  // searchInput.classList.toggle("hidden");
  searchInput.classList.toggle("translate-x-1/2");
  searchInput.classList.toggle("scale-0");
  searchInput.classList.toggle("opacity-0");
  searchInput.classList.toggle("-translate-x-0");
  searchInput.classList.toggle("scale-100");
  searchInput.classList.toggle("opacity-100");
  searchInput.focus();
  if (searchInput.classList.contains("scale-100")) {
    searchBtn.innerHTML = `
      <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  `;
  } else {
    searchBtn.innerHTML = `
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1"
    stroke="currentColor"
    class="w-6 h-6 pointer-events-none"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    />
  </svg>
    `;
  }
  searchInput.value = "";
  if (searchInput.classList.contains("scale-0")) {
    productRender(products);
  }
};

export const inputBoxHandler = (event) => {
  productRender(
    products.filter((product) => {
      return (
        product.title.toLowerCase().search(event.target.value.toLowerCase()) !=
          -1 ||
        product.description
          .toLowerCase()
          .search(event.target.value.toLowerCase()) != -1 ||
        product.category
          .toLowerCase()
          .search(event.target.value.toLowerCase()) != -1
      );
    })
  );
};

export const productInCartGroupHandler = (event) => {
  if (event.target.classList.contains("product-in-cart-del")) {
    const currentProduct = event.target.closest(".product-in-cart");
    const currentProductPrice = currentProduct.querySelector(
      ".product-in-cart-price"
    );
    const currentProductQ = currentProduct.querySelector(
      ".product-in-cart-quantity"
    );
    currentProduct.remove();
  } else if (event.target.classList.contains("product-in-cart-Qdecrease")) {
    const currentProduct = event.target.closest(".product-in-cart");
    const currentProductPrice = currentProduct.querySelector(
      ".product-in-cart-price"
    );
    const currentProductQ = currentProduct.querySelector(
      ".product-in-cart-quantity"
    );
    if (currentProductQ.innerText > 1) {
      const decrease = currentProductQ.innerText - 1;
      currentProductPrice.innerText = currentProductPrice.innerText * decrease;
    }
  } else if (event.target.classList.contains("product-in-cart-Qincrease")) {
    const currentProduct = event.target.closest(".product-in-cart");
    const currentProductPrice = currentProduct.querySelector(
      ".product-in-cart-price"
    );
    const currentProductQ = currentProduct.querySelector(
      ".product-in-cart-quantity"
    );
    console.log("inc");
  }
};
