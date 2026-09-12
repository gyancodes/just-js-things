title.textContent
title.innerHTML
title.innerText

document.querySelector('h1') //Returns first H1 on the page
document.querySelector("#title")
document.querySelector('input[type="password"]')
document.querySelector("p:first-child")



document.querySelector('ul') 

const myul = document.querySelector('ul')
myul.querySelector('li ')

const styleLI = myul.querySelector("li")
styleLI.style.backgroundColor = "blue"


//NodeList and HTMLCollection

const tempList = document.querySelector("li")

tempList.style.color = 'blue' // returns error as this is not array

tempList[0].style.color = 'blue'

tempList.forEach(function (l) {
  l.style.backgroundColor = "red"
})



document.getElementsByClassName('list-item')
// Returns HTMLCollection

const tempClassList = document.getElementsByClassName('list-item')

tempClassList.forEach(function (li) {
  console.log(li)
}) // Return TypeError as forEach is not a function

// we can convert nodelist and htmlcollection to array

Array.from(tempClassList) //returns array

