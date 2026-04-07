function contar(){
    var n1 = document.getElementById('num')
    var numTab = (n1.value)
    var res = document.getElementById('res')
    for (var c = 0; c <= 10; c++){
        var mult = Number(c) * numTab
        res.innerHTML += `${numTab} X ${c} = ${mult} <br>`
    }
}