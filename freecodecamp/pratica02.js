const largestOfAll = arrays => {
    let result = []
    for(let i = 0; i < arrays.length; i++){
        let array = arrays[i]
        let inicio = array[0]
        
        
        for(let j = 0; j < array.length; j++){
            if(array[j] > inicio){
                inicio = array[j]
               
            }
        }
        result.push(inicio)
        
    }
    return result
}

console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))