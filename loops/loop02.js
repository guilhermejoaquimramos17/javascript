/*Um for...inlaço de repetição é mais adequado quando você precisa percorrer as propriedades de um objeto. Esse laço irá iterar sobre todas as propriedades enumeráveis ​​de um objeto, incluindo propriedades herdadas e propriedades não numéricas.

Uma propriedade herdada é uma propriedade que é herdada da cadeia de protótipos do objeto. Uma propriedade não numérica é uma propriedade que não é um número ou uma string que pode ser convertida em um número.*/

const fruit = {
  name: 'apple',
  color: 'red',
  price: 0.99
}

for(const prop in fruit){
    console.log(fruit[prop])
}

const person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA'
  }
}

function isObject(obj){
    return typeof obj === 'object' && !Array.isArray(obj) && obj !== null
}

for(const prop in person){
    if(isObject(person[prop])){
        for(const objProp in person[prop]){
            console.log(person[prop][objProp])
        }
    }else {
        console.log(person[prop])
    }
}

