const express = require('express')
const app = express()

const faturamentoRoutes = require('../src/routes/faturamentoRoutes')

app.use(express.json())

app.use('/faturamento', faturamentoRoutes)
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});