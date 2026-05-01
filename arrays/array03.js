let fruits = ["apple", "banana", "orange"];
let [primeiro, segundo, terceiro] = fruits // Desestruturação
/*console.log(primeiro)
console.log(segundo)
console.log(terceiro)*/

let colors = ["red", "green", "blue", "yellow"]
let [prim,,,quarto] = colors // com a virgula é possivel ignorar os elementos que quiser, coloquei 2 virgulas extras, ignorando o segundo e terceiro elemento.
console.log(prim) // red
console.log(quarto)// yellow

//Atribuindo valor padrão pra variavel caso não exista o elemento em que a variavel quer atribuir.
let numbers = [1,2]
let [a,b,c=10] = numbers // tem apenas dois elementos no array, portanto atribui 10 para c
console.log(a)//1
console.log(b)//2
console.log(c)//10

let frutas = ["apple", "banana", "orange", "mango", "kiwi"]
let [primeiro1, segundo2, ...resto] = frutas// '...resto' guardara todos elementos restantes, que não foram guardados em variaveis especificas. Essa sintaxe de resto deve ser sempre o ultimo elemento na desestruturação.
console.log(primeiro1)
console.log(segundo2)
console.log(resto)