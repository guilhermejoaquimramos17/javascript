function reverseString(str){
    let splitStr = str.split("")
    let reverseString = splitStr.reverse()
    let joinStr = reverseString.join("")
    return joinStr
}

console.log(reverseString("hello"))