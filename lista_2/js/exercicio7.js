alert("COMPRANDO MAÇAS!!!");
let quantMaca = parseInt(prompt("Quantas maças você comprou?"));
let preco;

document.write(`Quantidade de maças compradas: ${quantMaca}<br>`);

if(quantMaca >= 12){
    preco = quantMaca * 2.50;
    preco = preco.toFixed(2);

    document.write(`Valor da compra: R$ ${preco}<br>`);
    document.write(`Comprou meia dúzia ou mais`);
} else {
    preco = quantMaca * 3.50;
    preco = preco.toFixed(2);

    document.write(`Valor da compra: R$ ${preco}<br>`);
    document.write(`Comprou menos de meia dúzia`);
}