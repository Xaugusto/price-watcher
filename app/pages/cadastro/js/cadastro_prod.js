export default class Prod {
    url;
    id;
    nome;
    preco;
    imagem;

    constructor() {
        url = $('amazonUrl');
        id = this.extracturl(url);
    }

    extract(url) { }
}