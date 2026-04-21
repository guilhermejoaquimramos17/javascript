/*Posso manipular os objetos adicionando novas propriedades fora do objeto

cliente.rua = 'Jacy'
cliente.sexo = 'Masculino'

mudei a rua e adicionei o sexo do cliente, e mandei mostrar

delete cliente.rua
Para deletar a propriedade rua do objeto

console.log(cliente.endereco.numero.nome?.numero)
Elvis operator = ?
o ? não vai permitir com que o código continue, fazendo com que o código não quebre.

faleMeuNome: function(){
        console.log(cliente.rua)
    }
cliente.faleMeuNome()
Função dentro da propriedade fale meu nome, depois chamei ela.

Desestruturação

let { rua: clienteRua, sexo, idade, endereco } = cliente
console.log(rua)
É colocar as chaves antes do objeto e é possivel criar variaveis com os valores das propriedades dentro do objeto, então foi criado variaveis de rua, sexo, idade, endereco.
Também não é preciso depender do nome especifico da propriedade, basta colocar dois pontos e outro nome, pois esse outro nome vai receber o valor da propriedade rua por exemplo

let { rua: clienteRua, sexo, idade, endereco, altura = 'Não informado' } = cliente
Colocar com pré valor de altura faz com que o código não quebre, e se for informado no objeto a prioridade será o que está dentro de objeto.

Spread operator
let {rua, sexo, ...resto} = cliente
fiz as variaveis rua e sexo, e '...resto' pega todo o restante do objeto que não foi declarado.

Object.freeze(cliente) // Congela o objeto, não pode ser mudado
const valores = Object.values(cliente) // pega os valores de cliente
const chaves = Object.keys(cliente) // pega as chaves de cliente, ex: idade, rua, endereço
*/

const cliente = {
    rua: 'Jatobá',
    sexo: 'Masculino',
    idade: 30,
    altura: '1.7m',
    endereco: {
        numero: 104,
        bairro: 'Guanandi'
    },
    faleMeuNome: function () {
        console.log(cliente.rua)
    }
}

