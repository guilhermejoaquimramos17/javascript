for(let i = 0; i < 10; i++){
    if(i === 9){
        break// break fará com que o loop seja interrompido caso a condição seja verdadeira
    }
    console.log(i)
}

for(let i = 0; i < 10; i++){
    if(i === 8){
        continue// vai pular a iteração 8.
    }
    console.log(i)
}

for(const chave in mapa){
    if(mapa[chave].length > 1){
      startIndices.push(...mapa[chave])// esse spread operator(...) espalha os elementos do array startIndices.push(mapa[chave])        // ❌ → [[0, 3]]
    //startIndices.push(...mapa[chave])     // ✅ → [0, 3]
    }
  }

