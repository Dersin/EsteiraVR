const express = require('express');

const app = express();

app.use(express.json());

let rpmAtual = 0;

app.post('/rpm', (req, res) => {
    rpmAtual = req.body.rpm || 0;

    console.log("RPM:", rpmAtual);

    res.sendStatus(200);
});

app.get('/rpm', (req, res) => {
    res.json({
        rpm: rpmAtual
    });
});

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});