// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - ".split()": esse método transforma uma string em um array de substrings;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// TODO: faça um programa que retorne a data da entrada com o mês por extenso;
const { gets, print } = require('./dados');

let data = gets();
let dataSplit = data.split('/');
print(dataSplit[1]);


// print(dataSplit);
switch (dataSplit[1]) {
    case "01":
        console.log(dataSplit[0]+" de Janeiro de "+dataSplit[2]);
        break;
    case "02":
        console.log(dataSplit[0]+" de Fevereiro de "+dataSplit[2]);
        break;
    case "03":
        console.log(dataSplit[0]+" de Março de "+dataSplit[2]);
        break;
    case "04":
        console.log(dataSplit[0]+" de Abril de "+dataSplit[2]);
        break;
    case "05":
        console.log(dataSplit[0]+" de Maio de "+dataSplit[2]);
        break;
    case "06":
        console.log(dataSplit[0]+" de Junho de "+dataSplit[2]);
        break;
    case "07":
        console.log(dataSplit[0]+" de Julho de "+dataSplit[2]);
        break;
    case "08":
        console.log(dataSplit[0]+" de Agosto de "+dataSplit[2]);
        break;
    case "09":
        console.log(dataSplit[0]+" de Setembro de "+dataSplit[2]);
        break;
    case "10":
        console.log(dataSplit[0]+" de Outubro de "+dataSplit[2]);
        break;
    case "11":
        console.log(dataSplit[0]+" de Novembro de "+dataSplit[2]);
        break;
    case "12":
        console.log(dataSplit[0]+"de Dezembro de "+dataSplit[2]);
        break;
}

