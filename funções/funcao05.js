//Função variádica: quando nos argumentos que o user passa excede o numero de parametros já definidos.

function getArgs(){
    for(const arg of arguments){
        console.log(arg)
    }
    console.log(arguments.length)
    console.log(arguments[1])
    console.log(typeof arguments)
}

getArgs(1, 2, 3)

function hasCat(){
    return [...arguments].includes("cat")

}

console.log(hasCat("dog", "chicken", "cat"))