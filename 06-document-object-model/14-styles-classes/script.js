const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = itemList.querySelectorAll("li");

function run() {
  //className
  //   console.log(itemList.className);
  //   text.className = "card dark";

  //classList
  //console.log(itemList.classList);

  itemList.classList.forEach((e) => console.log(e));

  //   text.classList.add("dark");
  //   text.classList.remove("card");

  //   text.classList.toggle("dark");
  //   text.classList.toggle("hidden");
  //   text.classList.replace("card", "dark");

  //change style
  //   itemList.style.lineHeight = "3";

  items.forEach((e, index) => {
    e.style.color = "red";

    if (index === 2) {
      e.style.color = "aquamarine";
    }
  });
}

document.querySelector("button").onclick = run;
