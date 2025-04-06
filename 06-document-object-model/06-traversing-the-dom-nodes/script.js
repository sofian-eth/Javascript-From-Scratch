let output;

const parent = document.querySelector('.parent');

output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerText = "Child One";
output = parent.childNodes[5].style.color = "aquamarine";

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild.textContent = "Hey Man";

// Parent nodes from the child

const child = document.querySelector('.child');
output = child.parentNode; //gives same result as parentElement

child.parentNode.style.backgroundColor = 'yellow'
child.parentNode.style.padding = '5px';

// Siblings

const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem.nextSibling;
output = secondItem.previousSibling;

console.log(output)