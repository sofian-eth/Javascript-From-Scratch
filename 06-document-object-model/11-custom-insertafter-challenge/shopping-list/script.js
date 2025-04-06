// function insertAfter(newEl, existingEl) {
//   existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
// }

function insertAfter(newEl, existingEl) {
  existingEl.insertAdjacentElement("afterend", newEl);
}

//new element to insert
const li = document.createElement("li");
li.textContent = "Insert Me After";

//existing element to insert after
const firstItem = document.querySelector("li:first-child");

//out custom function
insertAfter(li, firstItem);
