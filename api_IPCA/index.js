import express from 'express';
import { historicoIPCA, buscarAno,  buscarID} from './servicos/servico.js';

const app = express();

app.get('/ufs', (req, res) => {
    const historicoInflacao = req.query.ano;
    const resultado = historicoInflacao ? buscarAno(historicoInflacao) : historicoInflacao();
    if (resultado) {
      res.json(resultado);
    } else {
      res.status(404).send({ "erro": "Nenhum histórico encontrado para o ano especificado" });
    }
  });
  
app.get('/ufs/:idIPCA', (req, res) => {
    const id = buscarID(req.params.idIPCA);
    if (id) {
      res.json(uf);
    }else{(isNaN(parseInt(req.params.idIPCA))) 
      res.status(400).send({ "erro": "Requisição inválida" });
    }
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});