// Desestruturação de objetos.

let person = { name: "Alice", age: 30, city: "New York" }
//const {name, age} = person
let {name: personName, age: personAge} = person// Um dos aspectos poderosos da desestruturação de objetos é que você pode atribuir os valores extraídos a variáveis com nomes diferentes. 
console.log(personName)
console.log(personAge)
