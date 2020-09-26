const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo: "Tenho mania de escrever pra ler em voz alta meus pensamentos. Com conteúdos absorvidos de API HTTP e NodeJS, te conto sobre alguns de meus acervos. Pra quem embarcar nessa, vai conhecer um pouco sobre linguagens, cafeteria, literatura, música, gastronomia, séries, pontos turísticos de Recife...",
        data: "26/09/2020"
    })
});

module.exports =  router;