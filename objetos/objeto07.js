const person = {
  name: "Alice",
  age: 30,
  addresses: [
    { type: "home", street: "123 Main St", city: "Anytown" },
    { type: "work", street: "456 Market St", city: "Workville" }
  ]
}

console.log(person.addresses[0].street)// person.addressesrefere-se à matriz de endereços. Para acessar o segundo endereço nesse array, usamos notação e índice de suporte 1. Em seguida, usamos a notação de ponto para acessar o citydesse objeto de endereço.
