// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.


let valor = gets();

round = Math.round(valor);

if((valor-round)==0){
    console.log("Inteiro");
}
else{
    console.log("Decimal");
}

//TODO: Descubra se o valor é inteiro ou decimal