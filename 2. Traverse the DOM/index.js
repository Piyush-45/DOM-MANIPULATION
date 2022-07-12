// traverse the dom

// ********  TOPIC :- 1 Parent Node Traversal *********

// +++++++ First of all, you need to know the difference between an element and a node. In summary, an element is a special type of node which represents a single node in our DOM tree. It can be not only an element but also a comment, a document, a text node, etc. +++++++

// The parentElement and parentNode properties in most cases return the same node: +++++++++ 

const ul = document.querySelector('#sports')
console.log(ul.parentElement)
console.log(ul.parentNode)

const li = document.querySelector("#boxing")
console.log(li.parentElement)
console.log(li.parentNode)

const html = document.documentElement;
console.log(html.parentElement) 


// *********  TOPIC :-2 Child Node Traversal ***********

const ul = document.querySelector('#sports')
console.log(ul.childNodes)

console.log(ul.firstChild)

console.log(ul.lastChild)


  
//  >>> we can modify properties of elements using childNodes

console.log(ul.childNodes[3].innerText = "hello nodes")

console.log(ul.children)
console.log(ul.children[3].innerText = "hello nodes")

ul.childNodes[1].style.backgroundColor = 'blue'

ul.childNodes[3].style.color = 'red'





// ********* TOPIC :- 3 Sibling Node Traversal *********

const li = document.querySelector("#boxing")
console.log(li.previousElementSibling)
console.log(li.nextElementSibling)