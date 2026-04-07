function contar(){
    var nini = document.getElementById('ini')
    var nfim = document.getElementById('fim')
    var npasso = document.getElementById('passo')
    var inicio = Number(nini.value)
    var fim = Number(nfim.value)
    var passo = Number(npasso.value)
    var res = document.getElementById('res')

    if (passo <= 0){
        passo = 1
        alert('Passo 0 não é válido, considerando passo 1')  
    }

    res.innerText = 'Contando: '
    for (inicio; inicio <= fim; inicio = inicio + passo){
        res.innerHTML += `${inicio} &#x1F449 `
    }
    
    
}