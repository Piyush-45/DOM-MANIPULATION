//  DOM MANIPULATION

// *********  TOPIC 1 : - styling an  element ***********

const football = document.querySelector("#football")
football.style.color = 'red'

const basketball = document.querySelector("#basketball")
basketball.style.color = 'blue'
basketball.style.fontSize = '2rem'

//  *********** TOPIC 2 :- CREATING AND ADDING ELEMENTS ********

// >>>>> creating elements 
const ul = document.querySelector('ul')
const li = document.createElement('li')

// >>>>>> adding elements
ul.append(li)
li.innerText = "hello there"



//  ********* TOPIC 3 :- MODIFYING ELEMENTS ATTRIBUTES AND CLASSES*******

const unorderedList = document.querySelector("#sports")

// textContents =>  is all text contained by an element and all its children that are for formatting purposes only.
console.log(unorderedList.textContent)


// innerText => returns all text contained by an element and all its child elements.
console.log(unorderedList.innerText)

// innerHtml => returns all text, including html tags, that is contained by an element
console.log(unorderedList.innerHTML)


// // >>>>> MODIFYING ELEMENTS ATTRIBUTES AND CLASSES ******

const li = document.querySelector('#boxing')
//  +++++ adding elements ++++
li.classList.add('#boxing')
console.log(li.classList.contains('#boxing'))

//  +++++ removing elements +++++
li.classList.remove('#boxing')
console.log(li.classList.contains('#boxing'))
