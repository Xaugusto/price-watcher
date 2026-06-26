import Prod from "./cadastro_prod.js";

$('#form').on('submit', async function (event) {
    event.preventDefault();
    const produto = new Prod();
    const res = await produto.buscarProducts();

    if (res) {
        console.log(`
            nome = ${produto.nome}
            preco = ${produto.preco}
            imagem = ${produto.imagem}
            `);
        const save = await produto.setInBank(produto);

        if (save) {
            console.log("Produto salvo com sucesso!");
        }
        else {
            console.error("Usuário não logado — produto não salvo.");
        }
    }
    else {
        console.error("Erro ao buscar produto. Verifique a URL.");
    }
});