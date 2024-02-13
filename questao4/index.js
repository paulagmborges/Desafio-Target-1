const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

const totalFaturamento = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor, 0)

const percentuais = {};
for (let estado in faturamentoPorEstado) {
    const percentual = (faturamentoPorEstado[estado] / totalFaturamento) * 100
    percentuais[estado] = percentual.toFixed(2) 
}

for (let estado in percentuais) {
    console.log(estado + ": " + percentuais[estado] + "%")
}

