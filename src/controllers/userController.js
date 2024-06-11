// Simulação de banco de dados na memória
let users = [];

exports.cadastrar = (req, res) => {
    const { nome, email, cpf, confirmarEmail, senha } = req.body;
    if (email !== confirmarEmail) {
        return res.status(400).send('Os e-mails não correspondem.');
    }
    const user = { nome, email, cpf, senha };
    users.push(user);
    console.log(users); // Apenas para verificar o armazenamento de usuários
    res.send('Cadastro realizado com sucesso!');
};

exports.login = (req, res) => {
    const { email, senha } = req.body;
    const user = users.find(user => user.email === email && user.senha === senha);
    if (user) {
        res.json(user);
    } else {
        res.status(401).send('E-mail ou senha inválidos.');
    }
};

exports.editar = (req, res) => {
    const { email, nome, cpf } = req.body;
    const userIndex = users.findIndex(user => user.email === email);
    if (userIndex === -1) {
        return res.status(404).send('Usuário não encontrado.');
    }
    users[userIndex].nome = nome;
    users[userIndex].cpf = cpf;
    res.send('Edição realizada com sucesso!');
};

exports.perfil = (req, res) => {
    if (users.length > 0) {
        res.json(users[0]); // Retorna o primeiro usuário da lista como JSON
    } else {
        res.status(404).send('Nenhum usuário encontrado.');
    }
};

exports.deletar = (req, res) => {
    const { email } = req.body;
    const userIndex = users.findIndex(user => user.email === email);
    if (userIndex === -1) {
        return res.status(404).send('Usuário não encontrado.');
    }
    users.splice(userIndex, 1); // Remove o usuário da lista
    res.send('Usuário deletado com sucesso!');
};
