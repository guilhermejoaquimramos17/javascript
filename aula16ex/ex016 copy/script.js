let num = window.document.getElementById('num')
let valores = []

function add(){
    let valorNum = Number(num.value)
    if (valorNum >= 1 && valorNum <= 100) {

        if (valores.includes(valorNum)){
            alert('O número já existe na lista.')
            return
        }

        let tab = document.getElementById('tab')
        let item = document.createElement('option')
        item.text = `Valor ${valorNum} adicionado.`
        item.value = `tab${valorNum}`
        tab.appendChild(item)
        valores.push(valorNum)
        res.innerHTML = ''
    } else if (num.value.length == 0){
        alert('Digite um número.')
        return
    } else {
        alert('O número tem que estar entre 1 e 100.')
    }

    
    num.value = ''
    num.focus()
}


function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let res = document.getElementById('res')
    
    
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for (let pos in valores){
        soma += valores[pos]
        if (valores[pos] > maior)
            maior = valores[pos]
        if (valores[pos] < menor)
            menor = valores[pos]
    }
    media = soma / valores.length
    res.innerHTML = ''
    res.innerHTML = `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor cadastrado é ${maior}.</p>`
    res.innerHTML += `<p>O menor valor cadastrado é ${menor}.</p>`
    res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
    

    
    

}
