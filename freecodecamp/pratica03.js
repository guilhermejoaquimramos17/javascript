function findElement(arr, func){
    for(const elem of arr){
        if(func(elem) === true){
            return elem
        }
    }
    return undefined
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))