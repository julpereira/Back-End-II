const express = require('express');
const colecaoUF = require('./dados/dados');

const app = express();

app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf)
    let mensgemErro = '';
    let uf;

    if (!(isNaN(idUF))) {
        uf = colecaoUF.colecaoUf.find(u => u.id === idUF);
        if (!uf) {
            mensagemErro = 'UF não encontrada';
        }
        }else{
            mensgemErro = 'Requisição inválida';
        }
    if(uf){
        res.json(uf);
    
    } else{
        res.status(404).json({"erro": mensagemErro});
    }
});

app.listen(8080, () =>{
    console.log('Servidor iniciado na porta 8080');
});