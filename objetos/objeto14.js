const greetingObject = new String("Hello, World!");

console.log(typeof greetingObject); // "object"
//Isso vai transformar a string primitiva em um objeto de string

const arr = [1, 2, 3]
console.log(arr.toString())

const num = 10
console.log(num.toString())

const person = {
  name: "John",
  age: 30,
  isStudent: true
};

const str = JSON.stringify(person)
console.log(str)

console.log(str.toString());
