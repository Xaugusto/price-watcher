import Prod from "./cadastro_prod.js";

const button = document.getElementById("mandar");

async function cadastrar(event) {
    event.preventDefault();

    console.log("SUBMIT BLOQUEADO");

    const produto = new Prod();

    const res = await produto.buscarProducts();
    if (!res) {
        console.error("Erro ao buscar produto");
        return;
    }

    const save = await produto.setInBank({
        nome: produto.nome,
        preco: produto.preco,
        imagem: produto.imagem,
        meta: produto.meta,
        id_amazon: produto.id_amazon,
        id_user: produto.id_user
    });

    if (save) {
        console.log("✅ Produto salvo com sucesso!");

        const modalEl = document.getElementById("modalSucessoCadastro");
        if (modalEl && typeof bootstrap !== 'undefined') {
            const modal = new bootstrap.Modal(modalEl);
            modal.show();
        }
    }
}

button.addEventListener("click", cadastrar);