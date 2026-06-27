const loginEmail = document.getElementById('loginEmail');
const loginSenha = document.getElementById('loginPassword');
const loginButton = document.getElementById('Logar');

function verificarEmail() {
    if (loginEmail.value === '') {
        loginEmail.setCustomValidity('O email é obrigatório');
    } else if (!loginEmail.validity.valid) {
        loginEmail.setCustomValidity('Digite um email válido');
    } else {
        loginEmail.setCustomValidity('');
    }
    loginEmail.reportValidity();
}

function verificarSenha() {
    if (loginSenha.value.trim() === '') {
        loginSenha.setCustomValidity('A senha é obrigatória');
    } else {
        loginSenha.setCustomValidity('');
    }
    loginSenha.reportValidity();
}

function atualizarBotaoLogin() {
    const emailValido = loginEmail.validity.valid && loginEmail.value !== '';
    const senhaValida = loginSenha.value.trim() !== '';
    loginButton.disabled = !(emailValido && senhaValida);
}

loginEmail.addEventListener('blur', () => { verificarEmail(); atualizarBotaoLogin(); });
loginSenha.addEventListener('blur', () => { verificarSenha(); atualizarBotaoLogin(); });

loginEmail.addEventListener('input', () => { loginEmail.setCustomValidity(''); atualizarBotaoLogin(); });
loginSenha.addEventListener('input', () => { loginSenha.setCustomValidity(''); atualizarBotaoLogin(); });