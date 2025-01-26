"use strict";
let personName = 'John KRAMER';
console.log(personName);
let age = 20;
console.log(age);
let hasPets = true;
console.log(hasPets);
let otherPerson;
otherPerson = 25;
console.log(otherPerson);
let hobbies = ["Cook", "Play"];
console.log(hobbies);
// tupla
let address = ["Avenida jardim", 1234];
console.log(address);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
let currentColor = Cor.Amarelo;
console.log(currentColor);
currentColor = Cor.Azul;
console.log(currentColor);
// any
let car = "BMW";
console.log(car);
car = { marca: "Mercedes", year: 2018 };
console.log("car object--", car);
// funções
function returnMyAge() {
    return age;
}
console.log(returnMyAge());
function myVoid() {
    console.log("it will not return anything");
}
function multiplier(numA, numB) {
    return numA * numB;
}
console.log(multiplier(12, 12));
// function type
let calculate;
calculate = multiplier;
console.log(calculate(100, 20));
console.log("endsss");
// objetos
let user = {
    name: "joao",
    age: 27
};
console.log(user);
function baterPonto(horario) {
    if (horario <= 8) {
        return "Ponto normal";
    }
    return "Fora do horario";
}
let funcionario1 = {
    supervisores: ["John", "Paulo"],
    baterPonto
};
let funcionario2 = {
    supervisores: ["ric", "alo"],
    baterPonto
};
console.log(funcionario1.supervisores);
console.log(funcionario1.baterPonto(12));
console.log(funcionario2.supervisores);
console.log(funcionario2.baterPonto(1));
// Union types
let nota = 10;
console.log(`Minha nota e ${nota}`);
// Checando tipos
let valor = true;
if (typeof valor == "number") {
    console.log("e number");
}
else {
    console.log(typeof valor);
}
// never
function fail(msg) {
    throw new Error;
}
