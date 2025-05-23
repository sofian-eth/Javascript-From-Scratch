// Quick and dirty
function createListItem(item) {
  const li = document.createElement("li");

  li.innerHTML = `
          ${item}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
        </button>
    `;

  document.querySelector(".items").appendChild(li);
}

// Clean & Performant
function createNewItem(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";

  const button = document.createElement("button");
  button.className = "remove-item btn-link text-red";

  button.appendChild(icon);
  li.appendChild(button);

  document.querySelector(".items").appendChild(li);
}

createListItem("Butter");
createNewItem("Cheese");
