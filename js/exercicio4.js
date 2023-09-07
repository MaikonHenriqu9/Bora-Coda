let n1 = parseInt(prompt("Informe o primeiro número"));
let n2 = parseInt(prompt("Informe o segundo número"));

if (n1 == n2) {
    document.write(`<h3>Números iguais</3>`);
} else if (n1 > n2) {
    document.write(`<h3>Primeiro número é maior que o segundo</3>`);
} else {
    document.write(`<h3>Segundo número é maior que o primeiro</3>`);
}