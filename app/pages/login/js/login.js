export default class Login {
    email;
    senha;
    constructor() {
        this.email = $('#loginEmail');
        this.senha = $('#loginPassword');
    }

    getEmail() {
        return this.email.val();
    }

    getSenha() {
        return this.senha.val();
    }

    async procurarUsuario() {
        const resposta = await fetch(`http://localhost:3000/user?email=${this.getEmail()}`);
        return resposta;
    }

    async refazObjeto(resposta) {
        const object = await resposta.json();
        return object;
    }

    verificaUsuario(object) {
        return (object.length > 0);
    }

    erroUsuario() {
        $('#erroAoLogar').text('Usuário não encontrado')
    }

    verificaSenha(object) {
        return (object.senha == this.getSenha());
    }

    erroSenha() {
        $('#erroAoLogar').text('Senha incorreta')
    }

    setarEmSession(object) {
        sessionStorage.setItem('usuarioLogado', JSON.stringify(object));
    }

    async login() {
        const res = await this.procurarUsuario();
        const users = await this.refazObjeto(res);

        if (!this.verificaUsuario(users)) {
            this.erroUsuario();
            return
        }

        const user = users[0];

        if (!this.verificaSenha(user)) {
            this.erroSenha();
            return
        }

        this.setarEmSession(user);

        return user;
    }

}