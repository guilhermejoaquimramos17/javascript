const user = {
  name: "John",
  profile: {
    email: "john@example.com",
    address: {
      street: "123 Main St",
      city: "Somewhere"
    }
  }
}

console.log(user?.profile?.number?.email)

// Optional Chaining Operator ?. fara com que caso não exista uma propriedade no objeto, invés de dar erro o código retornará undefined, fazendo com que o código não quebre. Lembre-se, o operador de encadeamento opcional é mais útil quando você não tem certeza se existe uma propriedade ou método. Ele ajuda a prevenir erros e torna seu código mais robusto.