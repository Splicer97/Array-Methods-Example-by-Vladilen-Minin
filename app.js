const people = [
    {name: 'Владилен', age: 25, budget: 40000},
    {name: 'Елена', age: 17, budget: 3400},
    {name: 'Игорь', age: 49, budget: 50000},
    {name: 'Михаил', age: 15, budget: 1800},
    {name: 'Василиса', age: 24, budget: 25000},
    {name: 'Виктория', age: 38, budget: 2300},
]
//for let
for (let i = 0; i < people.length; i++) {
    console.log(people[i])
}
//for of
for (let person of people) {
    console.log(person)
}
//forEach
people.forEach(function(person, index, peopleArray) {
console.log(person)
console.log(index)
console.log(peopleArray)
})
people.forEach(person => console.log(person))
//map
const newPeople = people.map(person => {
    return person.name;
})
console.log(newPeople)

//filter
const adults = []
for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18) {
        adults.push(people[i])
    }
}
console.log(adults)

const adult = people.filter(person => {
    if (person.age >= 18) {
        return true
    }
})

console.log(adult)
const adult0 = people.filter(person => person.age >= 18)
console.log(adult0)

//reduce
let amount = 0
for (let i = 0; i < people.length; i++) {
    amount += people[i].budget
}
console.log(amount)

const amountReduce = people.reduce((total, person ) => {
return total + person.budget
}, 0)
console.log(amountReduce)

//find
const igor = people.find(person => person.name === 'Игорь')
console.log(igor)

//findIndex
const igorIndex = people.findIndex(person => person.name === 'Игорь')
console.log(igorIndex)

const newPeople0 = people
    .filter(person => person.budget > 3000)
    .map(person => {
        return {
            info: `${person.name} (${person.age})`,
            budget: person.budget
        }
    })
console.log(newPeople0)