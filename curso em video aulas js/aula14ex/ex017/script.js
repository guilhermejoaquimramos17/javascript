
function contar(){
    var n1 = document.getElementById('num')
    var tab = document.getElementById('tabuada')
    if (n1.value == 0){
        alert('Digite um número')
        res.innerHTML = 'Impossível contar'
    } else {
        var numTab = (n1.value)
        tab.innerHTML = ''
        for (var c = 0; c <= 10; c++){
        var item = document.createElement('option')
        item.text = `${numTab} X ${c} = ${numTab*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
    }
    }
    
}