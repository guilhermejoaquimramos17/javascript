function uniteUnique(arr1, arr2, ...arr3){
    let joinArr = arr1.concat(arr2, ...arr3)

    const unico = []

    for(let i = 0; i < joinArr.length; i++){
        if(!unico.includes(joinArr[i])){
            unico.push(joinArr[i])
        }
    }

    return unico
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))
