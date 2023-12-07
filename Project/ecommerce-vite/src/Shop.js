import { wow } from "./app/product";
import initialRender from "./core/initialRender";
import listeners from "./core/listeners";
import observer from "./core/observers";

class Shop {
  init() {
    console.log("Shop App Start...");
    observer();
    initialRender();
    wow.init();
    listeners();
  }
}

export default Shop;
