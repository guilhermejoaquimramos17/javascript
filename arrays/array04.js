// Revertendo uma string

let string = "The quick brown fox jumped over the lazy dog"
let separar = string.split(' ')// Transformou a string em array, separando ela por elementos ["h", "e", "l", "l", "o"]
let arrayReversa = separar.reverse()// vai reverter os elementos do array ["o", "l", "l", "e", "h"]
let stringReversa = arrayReversa.join('-') // vai reunir os elementos do array em uma única string sem separa-los por virgula, que vai ser realizado pelo argumento de join como string vazia: join('')
console.log(separar) // 'olleh'