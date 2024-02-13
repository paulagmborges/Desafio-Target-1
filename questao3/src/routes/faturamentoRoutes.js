const express = require('express')
const router = express.Router()

const {
    getMenorFaturamento,
    getMaiorFaturamento,
    getDiasAcimaMedia
} = require('../controller/faturamentoController')

// Rota para o menor valor de faturamento
router.get('/menor-faturamento', getMenorFaturamento)

// Rota para o maior valor de faturamento
router.get('/maior-faturamento', getMaiorFaturamento)

// Rota para o número de dias com faturamento acima da média mensal
router.get('/dias-acima-media', getDiasAcimaMedia)

module.exports = router


