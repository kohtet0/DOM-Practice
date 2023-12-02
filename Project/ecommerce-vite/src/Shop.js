import initialRender from "./core/initialRender";
import listeners from "./core/listeners";
import observer from "./core/observers";

class Shop {
  init() {
    console.log("Shop App Start...");
    observer();
    initialRender();
    listeners();
  }
}

export default Shop;
