function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    if (fano.value == 0 || fano.value > ano){
        alert('Tente novamente')
    }else {
        var fsexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsexo[0].checked){
            genero = 'Homem'
            if (idade >= 16 && idade <= 21){
                // Jovem
                img.setAttribute('src', 'jovem-h.png')
            }else if (idade >= 18 && idade < 65){
                // Adulto
                img.setAttribute('src', 'adulto-h.png')
            } else if (idade >= 65){
                // Idoso
                img.setAttribute('src', 'idoso-h.png')
            }
        } else if (fsexo[1].checked){
            genero = 'Mulher'
            if (idade >= 16 && idade <= 21){
                // Jovem
                img.setAttribute('src', 'jovem-m.png')
            }else if (idade >= 18 && idade < 65){
                // Adulto
                img.setAttribute('src', 'adulto-m.png')
            } else if (idade >= 65){
                // Idoso
                img.setAttribute('src', 'idoso-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}