alert("Escreva um programa para ler o número de lados de um polígono regular e a medida do lado (em cm)");
let qtLados = parseInt(prompt("Informe a quantidade de lados"));

if(qtLados == 3){
    document.write("TRIÂNGULO<br>");
    let tamanho = parseFloat(prompt("Informe o seu tamanho"));    
    let perimetro = tamanho * 3;

    document.write(`Perímetro: ${perimetro}`);
} else if (qtLados == 4){
    document.write("QUADRADO<br>");
    let base = parseFloat(prompt("Informe o valor da base"));
    let altura = parseFloat(prompt("Informe a sua altura"));
    let area = base * altura;

    document.write(`Área: ${area}`);
} else if (qtLados == 5) {
    document.write("É UM PENTÁGONO<br>");
} else if (qtLados > 5) {
    document.write("POLÍGONO NÃO IDENTIFICADO");
} else {
    document.write("NÃO É UM POLÍGONO");
}