let n1 = parseInt(prompt("Informe o primeiro valor"));
let n2 = parseInt(prompt("Informe o segundo valor"));
let n3 = parseInt(prompt("Informe o terceiro valor"));
let n4 = parseInt(prompt("Informe o quarto valor"));
let n5 = parseInt(prompt("Informe o quinto valor"));
let n6 = parseInt(prompt("Informe o sexto valor"));

let sum = 0;

if (n1 < 72) {
    sum = sum + n1;
}

if (n2 < 72) {
    sum = sum + n2;
}

if (n3 < 72) {
    sum = sum + n3;
}

if (n4 < 72) {
    sum = sum + n4;
}

if (n5 < 72) {
    sum = sum + n5;
}

if (n6 < 72) {
    sum = sum + n6;
}

document.write(`Resultado: ${sum}`);