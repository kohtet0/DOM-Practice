import { addRecordFormHandler, rowBtnHandler } from "./handlers";
import { addRecordForm, tableBody } from "./selectors";

const listener = () => {
  addRecordForm.addEventListener("submit", addRecordFormHandler);
  tableBody.addEventListener("click", rowBtnHandler);
};

export default listener;
