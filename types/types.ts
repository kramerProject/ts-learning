let personName:string = 'John KRAMER'
console.log(personName)

let age: number = 20
console.log(age)

let hasPets:boolean = true
console.log(hasPets)

let otherPerson: any
otherPerson = 25
console.log(otherPerson)

let hobbies: string[] = ["Cook", "Play"]
console.log(hobbies)

// tupla
let address: [string, number] = ["Avenida jardim", 1234]
console.log(address)

// enums
enum Cor {
    Verde,
    Amarelo,
    Azul
}

let currentColor: Cor = Cor.Amarelo
console.log(currentColor)

currentColor = Cor.Azul
console.log(currentColor)

// any
let car: any = "BMW"
console.log(car)
car = {marca: "Mercedes", year: 2018}
console.log("car object--", car)

// funções

function returnMyAge(): number {
    return age
}
console.log(returnMyAge())

function myVoid(): void {
    console.log("it will not return anything")
}

function multiplier(numA: number, numB: number): number {
    return numA * numB
}

console.log(multiplier(12, 12))

// function type
let calculate: (x: number, y: number) => number
calculate = multiplier
console.log(calculate(100, 20))

console.log("endsss")

// objetos
let user: {name: string, age: number} = {
    name: "joao",
    age: 27
}
console.log(user)

function baterPonto(horario:number): string {
    if (horario <= 8) {
        return "Ponto normal"
    }
    return "Fora do horario"
}

// desafio objeto
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

let funcionario1: Funcionario = {
    supervisores: ["John", "Paulo"],
    baterPonto
}

let funcionario2: Funcionario = {
    supervisores: ["ric", "alo"],
    baterPonto
}

console.log(funcionario1.supervisores)

console.log(funcionario1.baterPonto(12))


console.log(funcionario2.supervisores)

console.log(funcionario2.baterPonto(1))


// Union types
let nota: number | string = 10
console.log(`Minha nota e ${nota}`)

// Checando tipos
let valor = true

if (typeof valor == "number") {
    console.log("e number")
} else {
    console.log(typeof valor)
}

// never
function fail(msg: string): never {
    throw new Error
}

