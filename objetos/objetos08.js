// Métodos de objeto. Métodos, no entanto, são vinculados ao seu objeto e podem acessar suas propriedades e outros métodos usando o thispalavra-chave.

const person = {
    age:30,
    name: 'Bob',
    digaOi: function() {
        return 'Sou o ' + this.name + ' e tenho ' + this.age + ' anos'
    }
}

console.log(person.digaOi())