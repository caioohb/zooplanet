/*document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.form-signin');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('inputEmail').value;
        const senha = document.getElementById('inputPassword').value;

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('E-mail ou senha inválidos.');
            }
            return response.json(); // Esperamos um objeto JSON como resposta
        })
        .then(data => {
            console.log(data);
            // Atualiza a página de perfil com os dados do usuário
            updateProfile(data); // Chamando a função updateProfile com os dados do usuário
            alert('Login realizado com sucesso!');
            // Redirecione para outra página, se necessário
        })
        .catch(error => {
            console.error('Erro:', error);
            const errorMessage = document.createElement('p');
            errorMessage.textContent = error.message;
            errorMessage.style.color = 'red';
            loginForm.appendChild(errorMessage);
        });
    });
});

// Função para atualizar a página de perfil com os dados do usuário
function updateProfile(user) {
    const profileName = document.getElementById('profile-name');
    const profileCPF = document.getElementById('profile-cpf');
    const profileEmail = document.getElementById('profile-email');

    profileName.textContent = `Nome: ${user.nome}`;
    profileCPF.textContent = `CPF: ${user.cpf}`;
    profileEmail.textContent = `E-mail: ${user.email}`;
}
*/


document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.form-signin');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('inputEmail').value;
        const senha = document.getElementById('inputPassword').value;

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('E-mail ou senha inválidos.');
            }
            return response.text();
        })
        .then(data => {
            console.log(data);
            alert('Login realizado com sucesso!');
            window.location.href = 'logado.html'; // Redireciona para logado.html
        })
        .catch(error => {
            console.error('Erro:', error);
            const errorMessage = document.createElement('p');
            errorMessage.textContent = error.message;
            errorMessage.style.color = 'red';
            loginForm.appendChild(errorMessage);
        });
    });
});
