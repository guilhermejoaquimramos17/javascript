/*marca, modelo, ano e placa são propriedades.
 Usamos const pois o objeto tem um conteudo fechado, pronto, que não sera mudado.
 Método é uma função dentro de uma propriedade no objeto.
 this significa este, neste objeto quero puxar o valor da propriedade*/

const carro = {
    marca: "ford",
    modelo: "ka",
    ano: 2015,
    placa: "ABC-1234",
    buzina: function(){
        alert('biiiii')
    },
    completo: function(){
        return `A marca é ${this.marca} e o modelo é: ${this.modelo}`
    }
}

console.log(carro.completo())




