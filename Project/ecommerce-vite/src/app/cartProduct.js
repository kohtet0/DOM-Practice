import { products } from "../core/data";
import { productInCartGroup, productInCartTemplate } from "../core/selectors";

export const cartProductUi = ({ id, image, title, price }) => {
  const cartProduct = productInCartTemplate.content.cloneNode(true);
  cartProduct
    .querySelector(".product-in-cart")
    .setAttribute("cartProduct-id", id);
  cartProduct.querySelector(".product-in-cart-img").src = image;
  cartProduct.querySelector(".product-in-cart-name").innerText = title;
  cartProduct.querySelector(".product-in-cart-price").innerText = price;
  // cartProduct.querySelector(".product-in-cart-quantity").innerText = price;

  return cartProduct;
};

export const cartProductRender = (item) => {
  productInCartGroup.append(cartProductUi(item));
};
