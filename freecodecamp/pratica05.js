function pyramid(char, num, boolean){
    //console.log("\n   o\n  ooo\n ooooo\nooooooo\n")

    let result = "\n"

    if(boolean === false){
        for(let i = 1; i <= num*2; i+=2){
        result += `${" ".repeat(num-(i+1)/2)}${char.repeat(i)}\n`
        
        }
        return result
    }
    

    let resultInversed = "\n"

    if(boolean === true){
        for(let i = num*2; i > 1; i-=2){
            resultInversed += `${" ".repeat((num-(i/2)))}${char.repeat(i-1)}\n`
        
        }
        return resultInversed
    }

}

console.log(pyramid("o", 5, true))