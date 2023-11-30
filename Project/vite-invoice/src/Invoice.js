import initialRender from "./core/initialRenders";
import listener from "./core/listeners";
import observer from "./core/observers";

class Invoice {
  init() {
    console.log("Invoice App Start...!");
    observer();
    initialRender();
    listener();
  }
}

export default Invoice;
