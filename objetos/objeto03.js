const person = {
  name: "Bob",
  age: 25,
  job: "Designer",
  city: "New York"
}

const {age, job, ...novoObjeto} = person //usamos a desestruturação para extrair job e age do person objeto, e coletar as propriedades restantes em um novo objeto 

console.log(novoObjeto)