import { app, categoryListGroup, categoryUiTemplate } from "../core/selectors";

const categoryUi = (text) => {
  const category = categoryUiTemplate.content.cloneNode(true);

  category.querySelector(".category-list").innerText = text;

  return category;
};

export const categoryRender = (lists) => {
  lists.forEach((list) => categoryListGroup.append(categoryUi(list)));
};

export const categoryHandler = (event) => {
  if (event.target.classList.contains("category-list")) {
    const currentCategory = event.target;
    categoryListGroup.querySelectorAll(".category-list").forEach((item) => {
      item.classList.remove("active")
      currentCategory.classList.add("active");
    });

    
  }
};
