const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

// Servindo arquivos estáticos na pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
