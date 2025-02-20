import express from 'express';
import cors from 'cors';
import { validaUsuario } from './validacao/valida.js';
import { cadastraLead } from './servicos/cadastra_servico.js';

const app = new express();

app.use(express.json());
app.use(cors());

app.post('/usuarios', async (req, res) => {
    const { nome, email, telefone } = req.body;
    const validacao = await validaUsuario({ nome, email, telefone });

    if (validacao) {
        return res.status(400).send({"Mensagem": "Erro de validação. Verifique os dados fornecidos." });
    }

    await cadastraLead(nome, email, telefone);
    res.status(200).send({ "Mensagem": "Cadastro efetivado com sucesso!" });
});

app.listen(9000, async () => {
    const data = new Date();
    console.log("Servidor node iniciado em:" + data);
});
