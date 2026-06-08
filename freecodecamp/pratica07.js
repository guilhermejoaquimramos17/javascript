function titleCase(str){
    let split = str.split(" ")
    let result = ""
    
    for(let i = 0; i < split.length; i++){
        result += split[i][0].toUpperCase()
        result += split[i].slice(1).toLowerCase()
        result += " "
    }
    return result.trim()// vai remover os espaços do inicio e final.
}

console.log("***" + titleCase("I'm a little tea pot") + "***")