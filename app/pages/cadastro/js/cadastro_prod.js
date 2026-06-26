import { Key, Host } from './../../../../assets/resourses/js/chaveapi.js'
export default class Prod {
    url;
    id_amazon;
    nome;
    preco;
    meta;
    imagem;
    id_user;

    constructor() {
        this.url = document.getElementById('amazonUrl').value;
        this.id_amazon = this.extracturl(this.url); // ← era this.id
        this.meta = document.getElementById('targetPrice').value;
        this.id_user = (JSON.parse(sessionStorage.getItem('usuarioLogado')))?.id ?? false;
    }

    extracturl(url) {
        const regex = /(?:\/dp\/|\/gp\/product\/|\/ASIN\/)([A-Z0-9]{10})/;
        const match = url.match(regex);

        if (match && match[1]) {
            return match[1];
        }
        return "ASIN não encontrado";
    }

    async buscarProducts() {
        const id_api = this.id_amazon; // ← era this.id
        const url = `https://real-time-amazon-data.p.rapidapi.com/product-details?asin=${id_api}&country=BR`;

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': Key,
                'x-rapidapi-host': Host,
                'Content-Type': 'application/json'
            }
        };

        try {
            const respose = await fetch(url, options);
            const res = await respose.json();

            this.nome = res.data.product_title;
            this.preco = res.data.product_price;
            this.imagem = res.data.product_photos[0];

            return true;
        }
        catch {
            return false;
        }
    }

    verificaUser() {
        return this.id_user;
    }

    async setInBank(product) {
        if (this.verificaUser()) {
            const response = await fetch('http://localhost:3000/product', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product)
            });
            return await response.json();
        }
        else return false;
    }
}