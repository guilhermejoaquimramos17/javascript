function frankenSplice(arr1, arr2, index){
    let firstArr = arr1.slice()
    let secondArr = arr2.slice()
    secondArr.splice(index, 0, ...firstArr)
    console.log(secondArr) 
}

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)