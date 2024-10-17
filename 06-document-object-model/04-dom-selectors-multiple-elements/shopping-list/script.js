//querySelector()

const listItems = document.querySelectorAll('li')
console.log(listItems[1].innerText);

listItems.forEach((element, index) => {
    element.style.color = 'red';

    if(index === 2) {
        element.remove();
    }

    if(index === 1) {
        element.innerHTML = `
          Char Mix
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`
    }
}
)

const listItems2 = document.getElementsByClassName('items')
console.log(listItems2);

const listItemsArray = Array.from(listItems2);

listItemsArray.forEach(item => {
    console.log(item.innerText);
});

const listItems3 = document.getElementsByTagName('li');

console.log(listItems3[0].innerText)