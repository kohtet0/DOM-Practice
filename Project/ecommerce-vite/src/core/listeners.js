import { categoryHandler } from "../app/category";
import { productHandler } from "../app/product";
import {
  inputBoxHandler,
  productInCartGroupHandler,
  searchBtnHandler,
} from "./handlers";
import {
  categoryListGroup,
  productGroup,
  productInCartGroup,
  searchBtn,
  searchInput,
} from "./selectors";

const listeners = () => {
  categoryListGroup.addEventListener("click", categoryHandler);
  searchBtn.addEventListener("click", searchBtnHandler);
  searchInput.addEventListener("keyup", inputBoxHandler);
  productGroup.addEventListener("click", productHandler);
  productInCartGroup.addEventListener("click", productInCartGroupHandler);
};

export default listeners;
