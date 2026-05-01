let colors = ["red", "green", "blue"];
let primeiraCor = colors.shift()//O shift()método remove o primeiro elemento (red) da matriz e retorna. O original colors array é modificado para conter apenas dois elementos.
console.log(colors)// ["green", "blue"]
console.log(primeiraCor)// "red"