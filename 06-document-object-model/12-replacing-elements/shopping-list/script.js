function replaceFirstItem() {
  const firstItem = document.querySelector("li:first-child");

  const li = document.createElement("li");
  li.textContent = "Replaced First";

  firstItem.replaceWith(li);
}

replaceFirstItem();

function replaceSecondItem() {
  const secondItem = document.querySelector("li:nth-child(2)");

  secondItem.outerHTML = "<li>Replaced Second</li>";
}

replaceSecondItem();

function replaceAllItems() {
  const lis = document.querySelectorAll("li");

  lis.forEach((e, index) => {
    // e.outerHTML = "<li>Replace All</li>";
    // e.innerHTML = "Replace All";
    index === 1 ? (e.innerHTML = "Second Item") : (e.innerHTML = "Replace All");
  });
}

replaceAllItems();

function replaceChildHeading() {
  const header = document.querySelector("header");

  const h1 = document.querySelector("header h1");

  const h2 = document.createElement("h2");
  h2.setAttribute("id", "app-title");
  h2.textContent = "Shopping List h2";

  header.replaceChild(h2, h1);
}

replaceChildHeading();
