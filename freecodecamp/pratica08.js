function bouncer(arr){
    let newArr = []
    for(const elem of arr){
        if(!elem){
            continue
            
        }else{
            newArr.push(elem)
        }
    }
    return newArr
}

console.log(bouncer([]))