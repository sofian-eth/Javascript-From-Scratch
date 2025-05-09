//insertAdjacentElement Example
function insertElement() {
  const filter = document.querySelector(".filter");

  const h1 = document.createElement("h1");

  //   const text = document.createTextNode("insertAdjacentElement");

  //   h1.appendChild(text);

  h1.textContent = "insertAdjacentElement";

  filter.insertAdjacentElement("beforebegin", h1);
}

insertElement();

//insertAdjacentText Example

function insertText() {
  const item = document.querySelector(".filter");

  item.insertAdjacentText("afterend", "insertAdjacentText");
}

insertText();

//insertAdjacentHTML Example

function insertHTML() {
  const clearBtn = document.querySelector("#clear");

  clearBtn.insertAdjacentHTML("afterend", "<h3>insertAdjacentHTML</h3>");
}

insertHTML();

//insertBefore Example

function insertBeforeItem() {
  const ul = document.querySelector("ul");

  const li = document.createElement("li");
  li.textContent = "insertBefore";

  const thirdItem = document.querySelector("li:nth-child(3)");

  ul.insertBefore(li, thirdItem);
}

insertBeforeItem();
/*
<!-- beforebegin -->
<p>
    <!-- afterbegin -->
    foo
    <!-- beforeend -->
</p>
<!-- afterend -->
*/
