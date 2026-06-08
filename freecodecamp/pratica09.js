let inventory = []

function findProductIndex(name){
    let nameLower = name.toLowerCase()

    for(let i = 0; i < inventory.length; i++){
        if(inventory[i]["name"] === nameLower){
            return i
        }
    }

    return -1

}

function addProduct(objProduct){
    let found = false
    for(let i = 0; i < inventory.length; i++){
        if(objProduct["name"].toLowerCase() === inventory[i]["name"]){
            inventory[i]["quantity"] += objProduct["quantity"]
            console.log(`${inventory[i]["name"]} quantity updated`)
            found = true
        }
    }

    if(!found){
        objProduct["name"] = objProduct["name"].toLowerCase()
        inventory.push(objProduct)
        console.log(`${objProduct["name"]} added to inventory`)
    }
    
}

function removeProduct(nameProduct, qtd){
    let index = findProductIndex(nameProduct)
    if(findProductIndex(nameProduct) !== -1){
        
        

        if(inventory[index]["quantity"] < qtd){
        console.log(`Not enough ${nameProduct.toLowerCase()} available, remaining pieces: ${inventory[index]["quantity"]}`)
        }

        inventory[index]["quantity"] -= qtd

        if(inventory[index]["quantity"] === 0){
        inventory.splice(index, 1)
        }

        if(inventory[index]["quantity"] > 0){
            console.log(`Remaining ${nameProduct.toLowerCase()} pieces: ${inventory[index]["quantity"]}`)
        }

        

    }

    if(!inventory[index]){
        console.log(`${nameProduct.toLowerCase()} not found`)
    }

    
}