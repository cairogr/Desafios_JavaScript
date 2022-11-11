// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - ".split()": esse método transforma uma string em um array de substrings;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// TODO: faça um programa que retorne a data da entrada com o mês por extenso;
const { gets, print } = require('./dados');

let data = gets();
let dataSplit = data.split('/');
//print(dataSplit[1]);

const tableMonth = [
    {month: "Janeiro", number: 1},
    {month: "Fevereiro", number: 2},
    {month: "Março", number: 3},
    {month: "Abril", number: 4},
    {month: "Maio", number: 5},
    {month: "Junho", number: 6},
    {month: "Julho", number: 7},
    {month: "Agosto", number: 8},
    {month: "Setembro", number: 9},
    {month: "Outubro", number: 10},
    {month: "Novembro", number: 11},
    {month: "Dezembro", number: 12},
]

const searchMonth = tableMonth.filter(function( value){
    if (value.number==dataSplit[1])
     
    return value.month;

    
}).map(obj => obj.month);

// print (searchMonth);

console.log(dataSplit[0]+" de "+searchMonth+" de "+dataSplit[2]);
