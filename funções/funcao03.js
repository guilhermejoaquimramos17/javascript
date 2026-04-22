function local() {
    let msg = 'Olá' // escopo local
    console.log(msg)
}

//local()

let msg = 'Olá' // escopo global
function global() {
    console.log(msg)
}

//global() 

if (true){
    let bloco = 'Oi' // escopo de bloco. if, for, while
    console.log(bloco)
}

