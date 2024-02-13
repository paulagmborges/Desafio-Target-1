function inverterString(string) {
    let resultado = '';
    for (let i = string.length - 1; i >= 0; i--) {
        resultado += string[i];
    }
    return resultado;
}

const stringOriginal = prompt("Digite uma palavra:");

const stringInvertida = inverterString(stringOriginal);

alert("Palavra original: " + stringOriginal);
alert("Palavra invertida: " + stringInvertida);
