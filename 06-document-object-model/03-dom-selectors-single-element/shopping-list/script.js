// document.getElementById()

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute('class'))

// Set attributes

// document.getElementById('app-title').id = 'new-app-title';
document.getElementById('app-title').title = 'Shopping List'
document.getElementById('app-title').setAttribute('class','new-title-class');
document.getElementById('app-title').setAttribute('title','butt-crack');

const title = document.getElementById('title-id');

console.log(title);

// Get/change content

console.log(title.textContent);
title.textContent = 'Hello World!'
title.innerText = 'Hello Again';
title.innerHTML = '<strong>Shopping List</strong>'

// change styles

title.style.color = 'red';
title.style.backgroundColor = 'yellow';
title.style.padding = '2px'
title.style.borderRadius = '10px'

// document.querySelector()

console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = "Apple Cider";
secondItem.style.color = 'green';

// Use these methods on other elements

const list = document.querySelector('ul');
console.log(list);

const firstItem = list.querySelector('li');
firstItem.style.color = 'aquamarine';