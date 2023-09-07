let numero = parseInt(prompt("Informe um valor"));

if (numero > 0) {
    document.write(`<h3> ${numero} é positivo </h3>`);
} else if (numero < 0) {
    document.write(`<h3> ${numero} é negativo </h3>`);
} else {
    document.write(`<h3> ${numero} é igual a 0  </h3>`);
}