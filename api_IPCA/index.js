import express from 'express';
import { historicoIPCA, buscarAno,  buscarID} from './servicos/servico';



const app = express();

app.get('/ufs', (req, res) => {
    const historicoInflacao= req.query.ano;
    const resultado = historicoInflacao ? buscarAno(historicoInflacao) : buscarAno();
    if (resultado) {
      res.json(resultado);
    } else {
      res.status(404).send({ "erro": "Nenhum histórico encontrado para o ano especificado" });
    }
  });
  
app.get('/ufs/:idIPCA', (req, res) => {
    const id = buscarID(req.params.idIPCA);
  
    if (uf) {
      res.json(uf);
    } else if (isNaN(parseInt(req.params.idIPCA))) {
      res.status(400).send({ "erro": "Requisição inválida" });
    } else {
      res.status(404).send({ "erro": "UF não encontrada" });
    }
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});