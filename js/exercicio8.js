let nota1 = parseInt(prompt("Informe a primeira nota"));
let nota2 = parseInt(prompt("Informe a segunda nota"));
let nota3 = parseInt(prompt("Informe a terceira nota"));
let nota4 = parseInt(prompt("Informe a quarta nota"));

let sum = 0;

if (nota1 > 0 && nota1 < 10) {
    sum = sum + nota1;
}

if (nota2 > 0 && nota2 < 10) {
    sum = sum + nota2
}

if (nota3 > 0 && nota3 < 10) {
    sum = sum + nota3
}

if (nota4 > 0 && nota4 < 10) {
    sum = sum + nota4
}

let average = sum / 4;

document.write(`Média final: ${average} <br>`);

average > 5 ? document.write(`Você passou no teste`) : document.write(`Tente novamente`);