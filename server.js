const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const userRoutes = require('./src/routes/userRoutes.js'); // Certifique-se de que o caminho está correto

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Servir arquivos HTML da pasta 'views'
app.use(express.static(path.join(__dirname, 'src/views')));

// Usar as rotas do userRoutes
app.use('/', userRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
