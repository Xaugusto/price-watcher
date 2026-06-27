const cadastroNome = document.getElementById('signupName');
const cadastroEmail = document.getElementById('signupEmail');
const cadastroTelefone = document.getElementById('signupPhone');
const cadastroSenha = document.getElementById('signupPassword');
const cadastroButton = document.getElementById('Cadastrar');

function ValidarNome() {
    if (cadastroNome.value.trim() === '') {
        cadastroNome.setCustomValidity('O nome é obrigatório');
    } else {
        cadastroNome.setCustomValidity('');
    }
    cadastroNome.reportValidity();
}

function ValidarEmail() {
    if (cadastroEmail.value === '') {
        cadastroEmail.setCustomValidity('O email é obrigatório');
    } else if (!cadastroEmail.validity.valid) {
        cadastroEmail.setCustomValidity('Digite um email válido');
    } else {
        cadastroEmail.setCustomValidity('');
    }
    cadastroEmail.reportValidity();
}

function ValidarTelefone() {
    $('#signupPhone').mask('(00) 00000-0000');
    if (cadastroTelefone.value.trim() === '') {
        cadastroTelefone.setCustomValidity('O telefone é obrigatório');
    } else {
        cadastroTelefone.setCustomValidity('');
    }
    cadastroTelefone.reportValidity();
}

function ValidarSenha() {
    if (cadastroSenha.value.trim() === '') {
        cadastroSenha.setCustomValidity('A senha é obrigatória');
    } else {
        cadastroSenha.setCustomValidity('');
    }
    cadastroSenha.reportValidity();
}

function atualizarBotaoCadastro() {
    const nomeValido = cadastroNome.value.trim() !== '';
    const emailValido = cadastroEmail.validity.valid && cadastroEmail.value.trim() !== '';
    const senhaValida = cadastroSenha.value.trim() !== '';
    cadastroButton.disabled = !(nomeValido && emailValido && senhaValida);
}

cadastroNome.addEventListener('blur', () => { ValidarNome(); atualizarBotaoCadastro(); });
cadastroEmail.addEventListener('blur', () => { ValidarEmail(); atualizarBotaoCadastro(); });
cadastroTelefone.addEventListener('blur', () => { ValidarTelefone(); atualizarBotaoCadastro(); });
cadastroSenha.addEventListener('blur', () => { ValidarSenha(); atualizarBotaoCadastro(); });

cadastroNome.addEventListener('input', () => { cadastroNome.setCustomValidity(''); atualizarBotaoCadastro(); });
cadastroEmail.addEventListener('input', () => { cadastroEmail.setCustomValidity(''); atualizarBotaoCadastro(); });
cadastroTelefone.addEventListener('input', () => { cadastroTelefone.setCustomValidity(''); atualizarBotaoCadastro(); });
cadastroSenha.addEventListener('input', () => { cadastroSenha.setCustomValidity(''); atualizarBotaoCadastro(); });