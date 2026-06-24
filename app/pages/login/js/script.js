import './validacao_cadastro.js';
import './validacao_login.js';
import Cadastro from './cadastro.js';
import Login from './login.js';

$('#Cadastrar').on('click', async function () {
    const user = new Cadastro();
    const cadastro = await user.cadastrarUsuario();

    if (cadastro) {
        window.location.href = `./../login/login_signup.html`;
    }
})

$('#Logar').on('click', async function () {
    const user = new Login();
    const login = await user.login();

    if (login) {
        window.location.href = `./../dashboard/dashboard.html?nome=${login.nome}`;
    }
})