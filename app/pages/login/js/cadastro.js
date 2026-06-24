export default class Cadastro {
    nome;
    email;
    telefone;
    senha;
    constructor() {
        this.nome = $('#signupName');
        this.email = $('#signupEmail');
        this.telefone = $('#signupPhone');
        this.senha = $('#signupPassword');
    }

    getNome() {
        return this.nome.val();
    }

    getEmail() {
        return this.email.val();
    }

    getSenha() {
        return this.senha.val();
    }

    getTelefone() {
        return this.telefone.val();
    }

    getObject() {
        const object = {
            nome: this.getNome(),
            email: this.getEmail(),
            telefone: this.getTelefone(),
            senha: this.getSenha()
        }
        return object;
    }

    async cadastrarUsuario() {
        try {
            const user = this.getObject();
            const insert = await this.setUser(user);

            return insert
        }
        catch (err) {
            this.mostraErroCadastrar(err);
            console.error('Erro capturado:', err);
        }
    }

    mostraErroCadastrar(err) {
        const erro = $('#erroAoCadastrar');
        erro.text('Falha ao carregar as informações tente novamente mais tarde')
    }

    async setUser(user) {
        console.log('Enviando:', user);

        const res = await fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });

        console.log('Status:', res.status);

        if (!res.ok) {
            const erro = await res.text();
            console.log('Erro do servidor:', erro);
            throw new Error(`Erro: ${res.status}`);
        }

        return res.json();
    }
}