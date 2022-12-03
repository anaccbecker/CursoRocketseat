const element = document.getElementById("title")
console.log(element)

const element2 = document.getElementsByClassName("one")
console.log(element2)

const element3 = document.querySelector(".one")
console.log(element3)

const element4 = document.querySelectorAll('[src]')
console.log(element4)

const element5 = document.querySelectorAll('.one')
console.log(element5)

const element6 = document.querySelectorAll('#title')
console.log(element6)

element6.forEach(el => console.log(el))