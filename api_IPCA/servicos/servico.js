import historicoInflacao from '../dados/dados.js';

export const historicoIPCA = () => {
    return  historicoInflacao;
}

export const buscarAno = (anoIPCA) => {
    return historicoInflacao.filter(IPCA => IPCA.ano === anoIPCA); 
}

export const buscarID = (id) => {
    const idIPCA = parseInt(id);
    return historicoInflacao.find(IPCA => IPCA.id === idIPCA);
}