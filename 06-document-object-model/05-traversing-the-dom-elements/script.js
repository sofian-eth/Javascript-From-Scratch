let output;

// Get child elements

const parent = document.querySelector('.parent')

output = parent.children;

output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = "Child Two";
parent.children[1].style.color = "lightpink";

parent.firstElementChild.innerText = "Child One";
parent.lastElementChild.innerText = "Child Three"
parent.lastElementChild.style.color = "blue"

// Get parent element from the child

const child = document.querySelector('.child');
output = child.parentElement;

child.parentElement.style.border = '1px solid #ddd';
child.parentElement.style.padding = '10px'

// Sibling elements

const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem;
output = secondItem.nextElementSibling;

console.log(output);