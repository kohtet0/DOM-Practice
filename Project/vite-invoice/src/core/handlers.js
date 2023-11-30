import { createTableBodyUi } from "./functions";
import { addRecordForm, formSelect } from "./selector";
import { products } from "./variables";

export const addRecordFormHandler = (event) => {
  event.preventDefault();

  const formData = new FormData(addRecordForm);

  const condition = formData.get("formSelect");

  if (condition != "Choose a fruit") {
    const currentProduct = products.find(
      (product) => product.id == formSelect.value
    );

    console.log(currentProduct);
    createTableBodyUi(
      currentProduct.id,
      currentProduct.name,
      currentProduct.price,
      formData.get("formInput")
    );
  }

  addRecordForm.reset();
};
