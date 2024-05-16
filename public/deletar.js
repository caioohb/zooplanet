document.addEventListener('DOMContentLoaded', function() {
    // Carregar os dados do usuário no formulário
    function carregarDadosUsuario() {
        fetch('/perfil')
        .then(response => {
            if (!response.ok) {
                throw new Error('Não foi possível carregar os dados do usuário.');
            }
            return response.json();
        })
        .then(user => {
            document.getElementById('nome').value = user.nome;
            document.getElementById('email').value = user.email;
            document.getElementById('cpf').value = user.cpf;
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    }

    carregarDadosUsuario(); // Carrega os dados do usuário quando a página é carregada

    const btnDeletar = document.getElementById('btn-deletar');

    btnDeletar.addEventListener('click', function() {
        const email = document.getElementById('email').value;

        fetch('/deletar', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Ocorreu um erro ao deletar o usuário.');
            }
            return response.text();
        })
        .then(data => {
            console.log(data); // Mensagem de confirmação do servidor
            alert('Usuário deletado com sucesso!');
            window.location.href = 'index.html'; // Redireciona para a página inicial
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao deletar o usuário.');
        });
    });
});
