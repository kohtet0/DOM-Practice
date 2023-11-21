const textInput = document.querySelector("#textInput");
const listGroup = document.querySelector("#listGroup");
const listItem = document.querySelectorAll(".list-item");

// listItem.forEach((list) => {
//     list.addEventListener("click", () => {
//         console.log(list.innerText)
//     })
// })

textInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const li = document.createElement("li");
    li.innerText = textInput.value;
    listGroup.append(li);
    textInput.value = null;
  }
});

listGroup.addEventListener("click", (event) => {
  console.log(event.target.innerText);
});
