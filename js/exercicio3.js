let n1 = parseInt(prompt("Informe o primeiro valor"));
let n2 = parseInt(prompt("Informe o segundo valor"));
let n3 = parseInt(prompt("Informe o terceiro valor"));

if (n1 > n2 && n1 > n3) {
    document.write(`O maior valor é ${n1}`);
} else if (n2 > n1 && n2 > n3) {
    document.write(`O maior valor é ${n2}`);
} else {
    document.write(`O maior valor é ${n3}`);
}