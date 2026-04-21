/*
JSON é usado para transportar dados entre front e back-end. É fácil para as máquinas lerem e humanos entenderem.
Como transformar um objeto em JSON: 
const user = {
    nome: 'Gui',
    idade: 18,
    sexo: 'M'
}

const objectToJSON = JSON.stringify(user)
Como fazer o inverso: 
const json = '{"nome":"Gui","idade":18,"sexo":"M"}'

const JSONtoObject = JSON.parse(json)

Então stringify transforma em JSON e o parse retorna para objeto.

JSON suporta strings(entre ""), números, booleanosn null, arrays e objetos.
JSON utiliza "" na propriedade e no valor
*/

const user = {
    nome: 'Gui',
    idade: 18,
    sexo: 'M'
}

const objectToJSON = JSON.stringify(user)
//console.log(objectToJSON)

const json = '{"nome":"Gui","idade":18,"sexo":"M"}'

const JSONtoObject = JSON.parse(json)
console.log(JSONtoObject)