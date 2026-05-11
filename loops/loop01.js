//Um for...oflaço é usado quando você precisa percorrer os valores de um iterável. Exemplos de iteráveis ​​incluem arrays e strings.

const numbers = [1, 2, 3, 4, 5]

for(const num of numbers){
    console.log(num)
}

const str = 'freecodecamp'

for (let char of str){
    console.log(char)
}

const people = [
    { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Jim', age: 40 }
]

for (const person of people){
    console.log(`${person.name} is ${person.age} years old`)
}