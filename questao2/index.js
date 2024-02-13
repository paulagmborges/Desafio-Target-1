function fibonacciCheck(numero) {
    let nAnterior = 0;
    let nAtual = 1;
    let nContador = 0;

    while (nContador < 100) {
        let nProximo = nAtual + nAnterior;
        nAnterior = nAtual;
        nAtual = nProximo;
        nContador++;
        if (numero === nAtual) {
            return true;
        }
    }
    return false;
}


let numero = parseInt(prompt("Digite um número inteiro e positivo:"));

if (fibonacciCheck(numero)) {
    alert(numero = true +" pertence à sequência de Fibonacci.");
} else {
    alert(numero=false + " não pertence à sequência de Fibonacci.");
}


