const cadastroNome = document.getElementById('signupName');
const cadastroEmail = document.getElementById('signupEmail');
const cadastroTelefone = document.getElementById('signupPhone');
const cadastroSenha = document.getElementById('signupPassword');
const erroNomeCadastro = document.getElementById('erroNomeCadastro');
const erroEmailCadastro = document.getElementById('erroEmailCadastro');
const erroTelefoneCadastro = document.getElementById('erroTelefoneCadastro');
const erroSenhaCadastro = document.getElementById('erroSenhaCadastro');
const cadastroButton = document.getElementById('Cadastrar');

function ValidarNome() {
    if (cadastroNome.value.trim() == '') {
        erroNomeCadastro.textContent = 'O nome é obrigatório'
    }
    else {
        erroNomeCadastro.textContent = ''
    }
}

function ValidarEmail() {
    if (cadastroEmail.value == '') {
        erroEmailCadastro.textContent = 'O email é obrigatório'
    }
    else if (!cadastroEmail.validity.valid) {
        erroEmailCadastro.textContent = 'Digite um email válido'
    }
    else {
        erroEmailCadastro.textContent = ''
    }
}

function ValidarTelefone() {
    $('#signupPhone').mask('(00) 00000-0000')
    if (cadastroTelefone.value.trim() == '') {
        erroTelefoneCadastro.textContent = 'A senha é obrigatório'
    }
    else {
        erroTelefoneCadastro.textContent = ''
    }
}

function ValidarSenha() {
    if (cadastroSenha.value.trim() == '') {
        erroSenhaCadastro.textContent = 'A senha é obrigatório'
    }
    else {
        erroSenhaCadastro.textContent = ''
    }
}

function atualizarBotaoCadastro() {
    const cadastroNomeValid = cadastroNome.value.trim() !== '';
    const cadastroEmailValid = cadastroEmail.validity.valid && cadastroEmail.value.trim() !== '';
    const cadastroSenhaValid = cadastroSenha.value.trim() !== '';

    cadastroButton.disabled = !(cadastroNomeValid && cadastroEmailValid && cadastroSenhaValid);
}

cadastroNome.addEventListener('input', () => {
    ValidarNome();
    atualizarBotaoCadastro();
});

cadastroEmail.addEventListener('input', () => {
    ValidarEmail();
    atualizarBotaoCadastro();
});

cadastroTelefone.addEventListener('input', () => {
    ValidarTelefone();
    atualizarBotaoCadastro();
});

cadastroSenha.addEventListener('input', () => {
    ValidarSenha();
    atualizarBotaoCadastro();
})