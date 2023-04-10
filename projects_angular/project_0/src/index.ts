const myName: string = "David"
const myAge: number = 34

function sayHelloWorld(): string {
    let message: string = "Hola Mundo, soy " + myName
    message += " y tengo " + myAge + " años"

    return message
    console.log(sayHelloWorld())
}