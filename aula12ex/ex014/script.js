function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var horadia = window.document.getElementById('horadodia')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 4 && hora < 12){
        // dia
        img.src = 'manha.png'
        document.body.style.background = '#F5DFBA'
    } else if (hora >= 12 && hora < 18){
        // tarde
        img.src = 'tarde.png'
        document.body.style.background = '#bd8735'
    } else {
        // noite
        img.src = 'noite.png'
        document.body.style.background = '#1F2C3C'
    }
}