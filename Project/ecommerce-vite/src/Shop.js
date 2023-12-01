import initialRender from "./core/initialRender";
import listeners from "./core/listeners";

class Shop {
  init() {
    console.log("Shop App Start...");
    initialRender();
    listeners();
  }
}

export default Shop;
