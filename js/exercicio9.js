let anoNascimento = parseInt(prompt("Informe o ano do seu nascimento"));
const anoAtual = 2023;

let resultado = anoAtual - anoNascimento;

document.write(`Idade atual: ${resultado}<br>`);

resultado >= 18 ? document.write(`Você pode votar neste ano`) : document.write(`Você não pode votar neste ano`);