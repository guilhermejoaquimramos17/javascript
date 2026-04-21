/*function digaMeuNome(nome){
    console.log(nome)
}

digaMeuNome('Caio')*/

/*function soma(num1, num2){
    const res = num1 + num2
    console.log(res)
}

soma(10, 80)
soma(50,32)*/

/*function divida(receita, gasto){
    if (receita > gasto){
        return 'Não está com divida'
    } else{
        return 'Está com dívida'
    }
}

const João = divida(10000, 6000)
const Maria = divida(5000, 8000)

console.log(João)
console.log(Maria)
*/

// Arrow function
const divida = (receita, gastos) => {
    if (receita > gastos){
        return 'Não está com divida'
    } else{
        return 'Está com dívida'
    }
}

const João = divida(10000, 6000)
const Maria = divida(5000, 8000)

console.log(João)
console.log(Maria)


