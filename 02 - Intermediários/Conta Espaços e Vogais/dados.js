const entradas = ["Amo a DIO","Esse desafio foi facil","Navegar nas aguas do teu mar"];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };