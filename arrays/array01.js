const fruits = ["apple", "banana", "cherry"];
let lastFruit = fruits.pop() // ele remove o ultimo elemento e guarda na váriavel.
console.log(fruits) // "apple", "banana"
console.log(lastFruit) //  "cherry"

let numbers = [2, 3];
let comp = numbers.unshift(30)
console.log(numbers)//[30, 2, 3] Adiciona um novo número no início
console.log(comp)// 3 O método retorna o novo comprimento do array, que é 3.