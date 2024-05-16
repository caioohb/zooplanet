document.addEventListener('DOMContentLoaded', function() {
    const formularioEditar = document.getElementById('formulario-editar');

    if (formularioEditar) {
        // Função para carregar os dados do usuário no formulário de edição
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
                document.getElementById('confirmarEmail').value = user.email;
            })
            .catch(error => {
                console.error('Erro:', error);
            });
        }

        carregarDadosUsuario(); // Carrega os dados do usuário quando a página é carregada

        formularioEditar.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita o envio padrão do formulário

            // Coletar os dados do formulário de edição
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const cpf = document.getElementById('cpf').value;

            console.log('Dados a serem enviados:', { email, nome, cpf }); // Log para verificar os dados coletados

            // Enviar os dados para o servidor
            fetch('/editar', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, nome, cpf }), // Apenas os campos que podem ser editados
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ocorreu um erro ao editar o usuário.');
                }
                return response.text();
            })
            .then(data => {
                console.log('Resposta do servidor:', data); // Mensagem de confirmação do servidor
                window.location.href = 'profile.html'; // Redireciona para profile.html
            })
            .catch(error => {
                console.error('Erro:', error);
                // Manipule o erro aqui (por exemplo, exiba uma mensagem de erro para o usuário)
                const errorMessage = document.createElement('p');
                errorMessage.textContent = 'Ocorreu um erro ao realizar a edição';
                document.body.appendChild(errorMessage); // Exemplo de como adicionar a mensagem ao corpo do documento
            });
        });
    }
});
