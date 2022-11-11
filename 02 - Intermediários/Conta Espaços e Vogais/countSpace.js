// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - ".split()": esse método transforma uma string em um array de substrings;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// TODO: faça um programa que contabilize quantos espaços em branco e quantas vogais existem
//na string de entrada;
const { gets, print } = require('./dados');

let str = gets();
let strSplit = str.split('');
let countSpace = 0;
let countVog = 0;

print(str);

print(strSplit);
for (let i = 0; i < strSplit.length; i++) {
    if ((strSplit[i] == "a") | (strSplit[i] == "e") | (strSplit[i] == "i") | (strSplit[i] == "o") | (strSplit[i] == "u")|(strSplit[i] == "A") | (strSplit[i] == "E") | (strSplit[i] == "I") | (strSplit[i] == "O") | (strSplit[i] == "U")) {
        countVog++;
    }
    if (strSplit[i] == " ") {
        countSpace++;
    }
}

print("Espaços em branco: "+countSpace+" Vogais: "+countVog);
