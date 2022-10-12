console.log('Bem vindos')
// Comentário

/*
Comentário
de
várias
linhas
*/

var weight

console.log(typeof weight)

weight = 85.3

console.log(typeof weight)

var person

person = {
    name: "Ana",
    age: 27,
    stars: 5.0,
    isSubscribed: true,

}

console.log(typeof person.stars)


console.log(`${person.name} de idade ${person.age} tem ${person.stars} estrelas` )

let students = []

students = [
    person
]

console.log(students[0])

const person2 = {
    name: "Gustavo",
    age: 29,
    stars: 4.0,
    isSubscribed: false,

}

students = [
    person,
    person2
]

console.log(students)