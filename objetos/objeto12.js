let person = { name: "Alice", age: 30, city: "New York", country: 'Brasil' }
let {name, age, country = 'Unknown'} = person// Valor padrão ao country caso não exista uma propriedade country.

console.log(country)