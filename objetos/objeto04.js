const person = {
    age: 30,
    name: 'Alice'
}


/* Primeiro método
console.log(person.hasOwnProperty('name')) uso do método hasOwnProperty()
console.log(person.hasOwnProperty('job'))*/

/* Segundo método
console.log(Object.hasOwn(person, 'age')) // uso do método Object.hasOwn A sintaxe é Object.hasOwn(object, propertyName)— você passa o objeto como o primeiro argumento e o nome da propriedade como o segundo.
console.log(Object.hasOwn(person, 'job'))*/

// Terceiro método

console.log('name' in person)
console.log('job' in person)


