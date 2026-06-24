const loginEmail = document.getElementById('loginEmail');
const loginSenha = document.getElementById('loginPassword');
const loginButonn = document.getElementById('Logar');
const erroEmailLogin = document.getElementById('erroEmail');
const erroSenhaLogin = document.getElementById('erroSenha');

function verificarEmail() {
    if (loginEmail.value === '') {
        erroEmailLogin.textContent = 'O email é obrigatório';
    }
    else if (!loginEmail.validity.valid) {
        erroEmailLogin.textContent = 'Digite um email válido';
    }
    else {
        erroEmailLogin.textContent = '';
    }
}

function verificarSenha() {
    if (loginSenha.value.trim() === '') {
        erroSenhaLogin.textContent = 'A senha é obrigatória';
    }
    else {
        erroSenhaLogin.textContent = '';
    }
}

function atualizarBotaoLogin() {
    const loginEmailValid = loginEmail.validity.valid && loginEmail.value !== '';
    const loginSenhaValid = loginSenha.value.trim() !== '';

    loginButonn.disabled = !(loginEmailValid && loginSenhaValid);
}

loginEmail.addEventListener('input', () => {
    verificarEmail();
    atualizarBotaoLogin();
});

loginSenha.addEventListener('input', () => {
    verificarSenha();
    atualizarBotaoLogin();
});
