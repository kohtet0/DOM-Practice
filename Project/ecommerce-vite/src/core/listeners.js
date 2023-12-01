import { categoryHandler } from "../app/category";
import { categoryListGroup } from "./selectors";

const listeners = () => {
  categoryListGroup.addEventListener("click", categoryHandler);
};

export default listeners;
