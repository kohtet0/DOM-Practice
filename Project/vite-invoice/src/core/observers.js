import { calculateAllTotal } from "./functions";
import { tableBody } from "./selectors";

const observer = () => {
  const observerCallBack = () => {
    calculateAllTotal();
  };

  const observerOptions = {
    childList: true,
    subtree: true,
  };

  const tableBodyObserver = new MutationObserver(observerCallBack);

  tableBodyObserver.observe(tableBody, observerOptions);
};

export default observer;
