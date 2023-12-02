import { products } from "../core/data";
import {
  app,
  productGroup,
  productUiTemplate,
  starFillTemplate,
  starOutlineTemplate,
} from "../core/selectors";
import { cartProductRender } from "./cartProduct";

const starUi = (rate) => {
  const star = document.createDocumentFragment();
  for (let i = 1; i <= 5; i++) {
    const starFill = starFillTemplate.content.cloneNode(true);
    const starOutline = starOutlineTemplate.content.cloneNode(true);

    if (i <= rate.toFixed(0)) {
      star.append(starFill);
    } else {
      star.append(starOutline);
    }
  }
  return star;
};

export const productUi = ({
  id,
  title,
  price,
  description,
  // category,
  image,
  rating: { rate, count },
}) => {
  const product = productUiTemplate.content.cloneNode(true);
  product.querySelector(".product").setAttribute("product-id", id);
  product.querySelector(".product-img").src = image;
  product.querySelector(".product-name").innerText = title;
  product.querySelector(".product-para").innerText = description;
  product.querySelector(".product-star").append(starUi(rate));
  product.querySelector(".rating-rate").innerText = rate;
  product.querySelector(".rating-count").innerText = count;
  product.querySelector(".product-price").innerText = price;

  return product;
};

export const productRender = (products) => {
  productGroup.innerHTML = "";
  products.forEach((product) => {
    productGroup.append(productUi(product));
  });
};

export const productHandler = (event) => {
  if (event.target.classList.contains("product-add-btn")) {
    const currentProduct = event.target.closest(".product");
    const currentProductId = currentProduct.getAttribute("product-id");
    const currentBtn = event.target;
    currentBtn.toggleAttribute("disabled", true);
    currentBtn.innerText = "Cart Added...";
    const productInCartLength = app.querySelectorAll(".product-in-cart-length");

    products.filter((product) => {
      if (product.id == currentProductId) {
        cartProductRender(product);
        productInCartLength.forEach(
          (el) =>
            (el.innerText = app.querySelectorAll(".product-in-cart").length)
        );
      }
    });
  }
};
