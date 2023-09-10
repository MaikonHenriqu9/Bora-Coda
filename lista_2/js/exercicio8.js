alert("======= PALMEIRAS VS CORINTHIANS =======");
let palmeiras = parseInt(prompt("Quantos gols o Palmeiras marcou?"));
let corinthians = parseInt(prompt("Quantos gols o Corinthians fez?"));

document.write(`PALMEIRAS ${palmeiras} X ${corinthians} CORINTHIANS<br>`);
if(palmeiras > corinthians){
    document.write(`PALMEIRAS VENCEU <b>`);
} else if (palmeiras < corinthians) {
    document.write(`CORINTHIANS VENCEU <br>`);
} else { 
    document.write(`JOGO TERMINOU EMPATADO <br>`);
}