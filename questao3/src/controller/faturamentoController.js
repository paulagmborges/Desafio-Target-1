const dadosFaturamento = require('../data/faturamento.json')

const getMenorFaturamento = (req, res) => {
    
    try {

    const valoresFaturamento = dadosFaturamento.map(dia => dia.valor)
    const menorFaturamento = Math.min(...valoresFaturamento)
    res.status(200).json({ menorFaturamento })
    } catch (error) {
        res.status(500).json({error:"Erro interno do servidor"})
    }
    
}
const getMaiorFaturamento =(req, res) => {
    try {

    const valoresFaturamento = dadosFaturamento.map(dia => dia.valor)
    const maiorFaturamento = Math.max(...valoresFaturamento)
    res.status(200).json({ maiorFaturamento })  

    } catch (error) {
        res.status(500).json({ error: "Erro interno do servidor" })
    }
    
}
const getDiasAcimaMedia=(req, res) => {
    try {

    const valoresFaturamento = dadosFaturamento.map(dia => dia.valor)
    const mediaMensal = valoresFaturamento.reduce((acc, valor) => acc + valor, 0) / valoresFaturamento.length
    const diasAcimaMedia = dadosFaturamento.filter(dia => dia.valor > mediaMensal).length
    res.status(200).json({ diasAcimaMedia })
    } catch (error) {
        res.status(500).json({ error: "Erro interno do servidor" })
    }
   
}

module.exports = {
    getMenorFaturamento,
    getMaiorFaturamento,
    getDiasAcimaMedia
}
