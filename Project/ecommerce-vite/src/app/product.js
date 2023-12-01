import { productGroup, productUiTemplate } from "../core/selectors";

const productUi = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating: { rate, count },
}) => {
  const product = productUiTemplate.content.cloneNode(true);
  product.querySelector(".product-img").src = image;
  product.querySelector(".product-name").innerText = title;
  product.querySelector(".product-para").innerText = description;
  product.querySelector(".rating-rate").innerText = rate;
  product.querySelector(".rating-count").innerText = count;
  product.querySelector(".product-price").innerText = price;

  return product;
};

export const productRender = (products) => {
  products.forEach((product) => {
    productGroup.append(productUi(product));
  });
};
