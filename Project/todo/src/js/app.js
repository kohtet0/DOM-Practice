// selector
const main = document.querySelector("#main");
const textInput = document.querySelector(".text-input");
const addBtn = document.querySelector(".add-btn");
const doneCount = document.querySelector(".done-count");
const listCount = document.querySelector(".list-count");
const listGroup = document.querySelector(".list-group");

// function
// const doneCounter = () => {};

const listCounter = () => {
  const total = document.querySelectorAll(".list").length;
  listCount.innerText = total;
};

const createList = () => {
  const list = document.createElement("div");
  list.classList.add("list");
  list.innerHTML = `

        <div
        class="flex justify-between items-center border border-neutral-500 h-14 px-5 mb-3"
      >
        <div class="flex justify-center items-center gap-2">
          <input class="check-list w-4 h-4" type="checkbox" name="${textInput.value}" id="list" />
          <label class="text-list" for="list"> ${textInput.value} </label>
        </div>
        <div class="flex justify-center items-center gap-2">
          <button type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
          <button type="button" class="del-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 select-none"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
        
        `;

  // for del btn
  const delBtn = list.querySelector(".del-btn");
  delBtn.addEventListener("click", () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        list.remove();
        Swal.fire({
          title: "Deleted!",
          text: "Your list has been deleted.",
          icon: "success",
        });
      }
    });
  });

  // for checked text line through
  const checkList = list.querySelectorAll(".check-list");
  const textList = list.querySelectorAll(".text-list");
  checkList[0].addEventListener("click", () => {
    textList[0].classList.toggle("line-through");
    list.classList.toggle("opacity-50");
  });

  return list;
};

// handler
const btnHandler = () => {
  if (textInput.value) {
    listGroup.append(createList());
    textInput.value = null;
    // doneCounter();

    // for add list toast
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Add list successfully",
    });
  }
};

// listener
addBtn.addEventListener("click", btnHandler);

// observer
const observer = new MutationObserver(() => {
  listCounter();
});

const observerOptions = {
  childList: true,
  subtree: true,
};

observer.observe(listGroup, observerOptions);
