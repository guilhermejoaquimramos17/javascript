function titleCase(str){
    let split = str.split(" ")
    console.log(split)
    for(let i = 0; i < split.length; i++){
        split += split[i][0].toUpperCase()
    }
}

titleCase("I like to code")