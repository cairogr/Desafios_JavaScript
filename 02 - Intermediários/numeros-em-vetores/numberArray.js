// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.


const { gets, print } = require('./funcoes-auxiliares');

let vetor = [];
let pares = [];
let impares = [];

//TODO: Implemente uma condição para o armazenamento dos números PARES e ÍMPARES:
//const {gets, print} = require();



for (let i=0; i<5;i++){
    const numeros = gets();
    vetor.push(numeros);
}


for(const element of vetor){
    if(element%2==0){
        pares.push(element);
    }
    else{
        impares.push(element);
    }
}

console.log("Vetor: " + vetor);
console.log("Par(es): " + pares);
console.log("Impar(es): " + impares);

console.log("Vetor: " + vetor);
console.log("Par(es): " + pares);
console.log("Impar(es): " + impares);

//TODO: Imprima os valores dos três vetores um em cada linha: