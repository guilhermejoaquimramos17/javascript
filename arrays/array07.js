let original = [1, '2', 3, 4, 5]
let copy = [...original]// isto criará uma cópia do array original. O operador de spread[...] criará uma cópia superficial dos elementos do original array em um novo array.
console.log(copy)
original.splice(2, 0, 'Banana')
console.log(original.includes('banana'))// includes() verifica se um elemento existe no array, true or false como retorno
console.log(original.includes('Banana', 1))// o 1 após a string indica a partir de qual indice vai iniciar a pesquisa. É util para achar um elemento especifico no array.
console.log(original.includes(2))// pois no array o 2 é string, no includes está como número, o includes utiliza a comparação rigorosa da igualdade (===).
