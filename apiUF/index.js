const express = require('express');
const colecaoUF = require('./dados/dados');

const app = express();

app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf)
    const uf = colecaoUF.colecaoUf.find(u => u.id === idUF);
    res.json(uf);
});

app.listen(8080, () =>{
    console.log('Servidor iniciado na porta 8080');
});