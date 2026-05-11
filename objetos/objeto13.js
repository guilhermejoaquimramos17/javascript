//Você pode desestruturar propriedades aninhadas dentro de outros objetos usando outro conjunto de aparelhos

const recipe = {
  name: "Chocolate Cake",
  ingredients: {
    flour: "2 cups",
    sugar: "1 cup"
  }
}

const {ingredients: {sugar}} = recipe
console.log(sugar)

// Taquigrafia

let age = 30
let name = 'Gui'
let person = {age, name}
console.log(person)

//O código acima leva as propriedades com o mesmo nome que nossas variáveis e atribui-lhes os valores dessas variáveis.

// Esta notação de taquigrafia é particularmente útil quando você está retornando objetos de funções ou criando objetos com várias propriedades.

const createPerson = (name, age) => {
    return {name, age}
}

let person2 = createPerson('Gui', 17)
console.log(person2)