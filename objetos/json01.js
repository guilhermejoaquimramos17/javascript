const developerObj = {
  firstName: "Jessica",
  isAwesome: true,
  isMusician: true,
  country: "USA",
}

console.log(JSON.stringify(developerObj, ['isAwesome', 'isMusician'])) // JSON.stringify() vai transformar um objeto js em um JSON formato. ['isAwesome', 'isMusician'] esses parâmetros são opcionais, com esse parametro é possivel escolher quais propriedades quer converter.
console.log(JSON.stringify(developerObj, null, 2)) // esses parametros permitem que você controle o espaçamento.