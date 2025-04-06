function onClear() {
  alert("Clear now");
}

const clearBtn = document.querySelector(".btn-clear");

const itemList = document.querySelector("ul");
const items = document.querySelectorAll("li");

function clearAll() {
  // items.forEach((e) => e.remove());

  //the following is the most performant
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

//Semi recommended method
// clearBtn.onclick = function () {
//   alert("Clear via button");
// };

// clearBtn.onclick = () => {
//   console.log("Hello Sir");
// }

// //Most recommended method
// clearBtn.addEventListener("click", function () {
//   alert("Most recommended event listener");
// });
// clearBtn.addEventListener("click", () => console.log("Hey King"));

// clearBtn.addEventListener("click", onClear);

clearBtn.addEventListener("click", clearAll);

// setTimeout(() => clearBtn.removeEventListener("click", onClear), 5000);

setTimeout(() => clearBtn.click(), 5000);
