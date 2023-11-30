import { addRecordFormHandler } from "./handlers";
import { addRecordForm } from "./selector";

const listener = () => {
    addRecordForm.addEventListener("submit", addRecordFormHandler)
};

export default listener();
