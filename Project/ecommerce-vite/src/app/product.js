import WOW from "wow.js/src/WOW";
import { products } from "../core/data";
import {
  app,
  bagBtn,
  productGroup,
  productInCartLength,
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

    products.filter((product) => {
      if (product.id == currentProductId) {
        cartProductRender(product);
        productInCartLength.forEach(
          (el) =>
            (el.innerText = app.querySelectorAll(".product-in-cart").length)
        );
      }
    });

    const currentProductImg = currentProduct.querySelector(".product-img");
    const bagPosition = bagBtn.getBoundingClientRect();
    const imgPosition = currentProductImg.getBoundingClientRect();

    const img = new Image();
    img.src = currentProductImg.src;
    img.classList.add("fixed", "h-32", "cloneImg", "z-50");
    img.style.top = imgPosition.top + "px";
    img.style.left = imgPosition.left + "px";

    const keyFrame = [
      {
        top: imgPosition.top + "px",
        left: imgPosition.left + "px",
      },
      {
        top: bagPosition.top + "px",
        left: bagPosition.left + "px",
        height: 10 + "px",
        rotate: "3turn",
      },
    ];

    const option = {
      duration: 1000,
      iterations: 1,
    };

    app.append(img);

    const imgAnimation = img.animate(keyFrame, option);
    imgAnimation.addEventListener("finish", () => {
      document.querySelector(".cloneImg").remove();
      bagBtn.classList.add("animate__animated", "animate__rubberBand");
      bagBtn.addEventListener("animationend", () => {
        bagBtn.classList.remove("animate__rubberBand");
      });
    });
  }
};

export const wow = new WOW({
  boxClass: "wow", // animated element css class (default is wow)
  animateClass: "animate__animated",
  offset: 50,
  mobile: true, // default
  live: true, // default
  iterations: 10,
});
