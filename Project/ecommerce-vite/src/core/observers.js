import { allTotal, productInCartGroup } from "./selectors";

const observer = () => {
  const observerCallBack = () => {
    const currentProduct =
      productInCartGroup.querySelectorAll(".product-in-cart");
    let i = 0;
    currentProduct.forEach((el) => {
      const currentProductPrice = el.querySelector(".product-in-cart-price");
      i += parseFloat(currentProductPrice.innerText);
    });
    allTotal.innerText = i;
  };

  const observerOptions = {
    childList: true,
    subtree: true,
  };

  const totalObserver = new MutationObserver(observerCallBack);
  totalObserver.observe(productInCartGroup, observerOptions);
};

export default observer;
