//Loop while será executado enquanto a condição for verdadeira. São úteis quando você não sabe quantas vezes precisa executar o bloco de código.

let counter = 0
while(counter < 5){
    console.log(counter)
    counter++
}

//Loop do while será executado pelo menos uma vez antes da condição ser verificada.

let counter2 = 0
do{
    console.log(counter2)
    counter2++
}while(counter2 < 5)