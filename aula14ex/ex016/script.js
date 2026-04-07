function contar(){
    var nini = document.getElementById('ini')
    var nfim = document.getElementById('fim')
    var npasso = document.getElementById('passo')
    var inicio = Number(nini.value)
    var fim = Number(nfim.value)
    var passo = Number(npasso.value)
    var res = document.getElementById('res')

    if (nini.value == 0 || nfim.value == 0 || npasso.value == 0){
        res.innerHTML = 'Impossível contar.'
        alert('Erro. Digite números válidos')
    } 

    if (passo <= 0){
        passo = 1
        alert('Passo 0 não é válido, considerando passo 1')  
    } 

    res.innerHTML = 'Contando: <br>'
    if (inicio < fim){
        // Contagem crescente
       for (inicio; inicio <= fim; inicio += passo){
        res.innerHTML += `${inicio} &#x1F449 `
        
    } 
    }else {
        // Contagem regressiva
        for(inicio; inicio >= fim; inicio -= passo){
            res.innerHTML += `${inicio} &#x1F449 `
        }
    }
    
    res.innerHTML += `\u{1F3C1}`
    
    
}