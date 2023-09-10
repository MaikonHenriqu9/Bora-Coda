alert("CALCULADORA");
let num1 = parseInt(prompt("Digite um valor"));
let num2 = parseInt(prompt("Digite outro valor"));
let opcao = parseInt(prompt("ESCOLHA UMA OPÇÃO: 1- ADIÇÃO  2- SUBTRAÇÃO 3- MULTIPLICAÇÃO 4-DIVISÃO"));

switch(opcao){
    case 1:
        document.write(`Você escolheu a operação ADIÇÃO <br>`);
        let sum = 0;
        sum = num1+num2;

        document.write(`RESULTADO: ${sum}`);
        break;
    case 2:
        document.write(`Você escolheu a operação SUBTRAÇÃO <br>`);
        let sub = 0;
        sub = num1 - num2;

        document.write(`RESULTADO: ${sub}`);
        break;
    case 3:
        document.write(`Você escolheu a operação MULTIPLICAÇÃO <br>`);
        let multi = 0;
        multi = num1*num2;

        document.write(`RESULTADO: ${multi}`);
        break;
    case 4:
        document.write(`Você escolheu a operação MULTIPLICAÇÃO <br>`);
        let div = 0;
        div = num1/num2;

        document.write(`RESULTADO: ${div}`);
        break;
    default:
        document.write(`Opções inválidas`);
}