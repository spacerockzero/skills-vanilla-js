/* 
 * Demos for vanillaJS micro-badge from https://github.com/fs-webdev/skill-building-program/blob/master/badges-active/javascript/_micro_using-vanillajs.md
 */

// Selecting DOM by ID
const idElem = document.getElementById('selectByID');
idElem.style.backgroundColor = '#ddd';


// Selecting DOM by CSS selectors
const CSSElem = document.querySelector('p.css');
CSSElem.style.backgroundColor = '#44dd33';


// Selecting DOM by attribute selectors
const attrElem = document.querySelectorAll('[spam=true]');
Array.from(attrElem).forEach(el => {
  el.style.backgroundColor = 'salmon';
});


// Select parent, child, siblings of element
const parent = document.getElementById('parent');
const child = Array.from(parent.children)[0];
child.textContent = 'child injected text';
const sibling = Array.from(child.parentElement.children).filter(x => x !== child)[0];
sibling.textContent = 'sibling injected text';


// Modifying DOM text content ^^
// done. see above


// Adding and removing elements
const addTarget = document.getElementById('addTarget');
const addEl = document.createElement('div');
addEl.innerHTML = 'I added myself!';
// adds child after 2 seconds
setTimeout(() => {
    addTarget.appendChild(addEl);
}, 2000);

const removeTarget = document.getElementById('removeTarget');
// removes itself in 5 seconds
setTimeout(() => {
    removeTarget.remove();
}, 5000);


// Adding & removing classes
const addClassEl = document.getElementById('addClassEl');
addClassEl.classList.add('classyNow');

const removeClassEl = document.getElementById('removeClassEl');
removeClassEl.classList.remove('classy');


// Adding & removing attributes, a couple ways
const addAttrEl = document.getElementById('addAttrEl');
addAttrEl.setAttribute('foo','bar');

const removeAttrEl = document.getElementById('removeAttrEl');
removeAttrEl.attributes.removeNamedItem('foo');


// Adding & removing data attributes
const addDataAttrEl = document.getElementById('addDataAttrEl');
addDataAttrEl.dataset.foo = 'bar';

const removeDataAttrEl = document.getElementById('removeDataAttrEl');
removeDataAttrEl.attributes.removeNamedItem('data-foo');


// Getting input values
const inputIn = document.getElementById('inputIn');
const inputOut = document.getElementById('inputOut');
inputIn.addEventListener('keyup', function(event) {
    inputOut.textContent = inputIn.value;
});


// Using visual transition effects
const fadeInButton = document.getElementById('fade-in-button');
const fadeIn = document.getElementById('fade-in');
fadeInButton.addEventListener('click', function(event) {
    fadeIn.classList.toggle('show');
});


// Hiding/showing DOM
const showInButton = document.getElementById('show-in-button');
const showIn = document.getElementById('show-in');
showInButton.addEventListener('click', function(event) {
    showIn.classList.toggle('here');
});


// AJAX data GET & POST
const getData = document.getElementById('getData');
const showData = document.getElementById('showData');
getData.addEventListener('click', function(event) {
    const url = 'http://api.icndb.com/jokes/random';
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            // Success!
            var resp = JSON.parse(this.response);
            showData.textContent = resp.value.joke;
        } else {
            // We reached our target server, but it returned an error
             showData.textContent = 'Error getting CHUCK NORRIS JOKE, sorry.';
        }
    };
    request.onerror = function() {
    // There was a connection error of some sort
    };
    request.send();
});

const postDataInput = document.getElementById('postDataInput');
const postData = document.getElementById('postData');

postData.addEventListener('click', function(event) {
    const url = 'http://jsonplaceholder.typicode.com/posts';
    var request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send(postDataInput.value);
});

// Handling events ^^ done in several of the tasks above. done.