function getAverage(gradesArr){
    let soma = 0
    for(const grade of gradesArr){
        soma += grade
    }
    let media = soma/gradesArr.length
    return media
}

function getGrade(grade){
    if(grade === 100){
        return "A+"
    }else if(grade >= 90 && grade <= 99){
        return "A"
    }else if(grade >= 80 && grade <= 89){
        return "B"
    }else if(grade >= 70 && grade <= 79){
        return "C"
    }else if(grade >= 60 && grade <= 69){
        return "D"
    }else if(grade >= 0 && grade <= 59){
        return "F"
    }
}

function hasPassingGrade(pont){
    if(getGrade(pont) !== "F"){
        return true
    }else{
        return false
    }
}

function studentMsg(gradeArr2, grade2){
    if(hasPassingGrade(grade2) === true){
        return `Class average: ${getAverage(gradeArr2)}. Your grade: ${getGrade(grade2)}. You passed the course.`
    }else if(hasPassingGrade(grade2) === false){
        return `Class average: ${getAverage(gradeArr2)}. Your grade: ${getGrade(grade2)}. You failed the course.`
    }
    
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37))