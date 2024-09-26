const express = require('express');
const colecaoNOME = require('./dados/dados');

const app = express();

app.get('/nms/:idnome', (req, res) => {
    const idNOME =  parseInt(req.params.idnome)
    let mensagemErro = '';
    let nome;

    if (!(isNaN(idNOME))) {
        nome = colecaoNOME.colecaoNOME.find(u => u.id === idNOME);
        if (!nome) {
            mensagemErro = 'UF não encontrada';
        }
        }else{
            mensagemErro = 'Requisição inválida';
        }
    if(nome){
        res.json(nome);
    
    } else{
        res.status(404).json({"erro": mensagemErro});
    }
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});