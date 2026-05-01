// Métodos de cópia de arrays
//Vamos começar pelo concat()método. Este método cria uma nova matriz, mesclando dois ou mais arrays.
let original = [1, '2', 3, 4, 5]
let fruits = ["apple", "banana", "orange", "banana"]
const copyArray = [].concat(original, fruits)
console.log(copyArray)
console.log(copyArray === original)// false, são objetos de array diferentes

//slice() Quando chamado sem argumentos, slice()retorna uma cópia superficial de toda a matriz. São objetos de array diferentes
let original2 = [1, '2', 3, 4, 5]
let copy1 = original2.slice()
console.log(copy)

let copy2 = [...original]// isto criará uma cópia do array original. O operador de spread[...] criará uma cópia superficial dos elementos do original array em um novo array.

//É importante notar que todos esses métodos criam novos objetos de matriz, o que significa que você pode modificar a cópia sem afetar o array original. 


