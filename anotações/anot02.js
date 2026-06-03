const sparseArray = [1, , , 4];
console.log(sparseArray.length); // 4

const emptyArr = new Array(5)//cria um array com comprimento especifico
console.log(emptyArr.length)
console.log(emptyArr)

const emptyArr2 = Array.from({length: 10})// cria um array com 10 de comprimento
console.log(emptyArr2)

const emptyArr3 = Array.from({length: 10}).fill(3)// cria um array com 10 de comprimento e preenche todos com 3
console.log(emptyArr3)

//ESlint e Prettier são boas ferramentas para os códigos