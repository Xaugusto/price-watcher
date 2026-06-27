const Key = 'e011e1c3aemsh3cc122a84507531p18ef16jsn4eb4489532fb';
const Host = 'real-time-amazon-data.p.rapidapi.com';
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
            console.log(match[1]);
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

            console.log("📡 Resposta completa da API:", res);
            console.log("📦 Nome:", res.data.product_title);
            console.log("💰 Preço:", res.data.product_price);
            console.log("🖼️ Imagem:", res.data.product_photos[0]);
            console.log("📝 Descrição:", res.data.product_description);

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