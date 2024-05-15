const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

let users = []; // Simulação de banco de dados na memória

app.post('/cadastrar', (req, res) => {
    const { nome, email, cpf, confirmarEmail, senha } = req.body;
    if (email !== confirmarEmail) {
        return res.status(400).send('Os e-mails não correspondem.');
    }
    const user = { nome, email, cpf, senha };
    users.push(user);
    console.log(users); // Apenas para verificar o armazenamento de usuários
    res.send('Cadastro realizado com sucesso!');
});

app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    const user = users.find(user => user.email === email && user.senha === senha);
    if (user) {
        // Retorna os dados do usuário como um objeto JSON
        res.json(user);
    } else {
        res.status(401).send('E-mail ou senha inválidos.');
    }
});

app.patch('/editar', (req, res) => {
    const { email, nome, cpf } = req.body;

    const userIndex = users.findIndex(user => user.email === email);

    if (userIndex === -1) {
        return res.status(404).send('Usuário não encontrado.');
    }

    // Atualiza os campos relevantes
    users[userIndex].nome = nome;
    users[userIndex].cpf = cpf;

    res.send('Edição realizada com sucesso!');
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'perfil.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/logado', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'logado.html'));
});

app.get('/perfil', (req, res) => {
    // Aqui você pode adicionar a lógica para buscar os dados do perfil do usuário
    // No caso, vou apenas retornar o primeiro usuário da lista como exemplo
    if (users.length > 0) {
        res.json(users[0]); // Retorna o primeiro usuário da lista como JSON
    } else {
        res.status(404).send('Nenhum usuário encontrado.'); // Se não houver usuários na lista
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
