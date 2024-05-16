document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario-cadastro');

    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita o envio padrão do formulário

            // Coletar os dados do formulário
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const cpf = document.getElementById('cpf').value;
            const confirmarEmail = document.getElementById('confirmarEmail').value;
            const senha = document.getElementById('senha').value;

            // Enviar os dados para o servidor
            fetch('/cadastrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome, email, cpf, confirmarEmail, senha }),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ocorreu um erro ao cadastrar o usuário.');
                }
                return response.text();
            })
            .then(data => {
                console.log(data); // Mensagem de confirmação do servidor
                document.getElementById('formulario-cadastro').reset(); // Limpa o formulário
                document.getElementById('cadastro-sucesso').style.display = 'block'; // Mostra a seção de cadastro realizado com sucesso
            })
            .catch(error => {
                console.error('Erro:', error);
                // Manipule o erro aqui (por exemplo, exiba uma mensagem de erro para o usuário)
                const errorMessage = document.createElement('p');
                errorMessage.textContent = 'Ocorreu um erro ao realizar o cadastro';
                document.body.appendChild(errorMessage); // Exemplo de como adicionar a mensagem ao corpo do documento
            });
        });
    }
});
