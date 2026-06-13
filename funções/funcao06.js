// Parâmetros REST

function getArg(...arg){// regras pra usar REST: o parâmetro REST tem que ser sempre o ultimo, não pode ter vírgula após ele e não deve ter mais de um REST.
    console.log(arg)
}

getArg(1, 2, 3)

// Won't work

//function badFunction(...args, ...moreArgs) {
  // some code here
//}