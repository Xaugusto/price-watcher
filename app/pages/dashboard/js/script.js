import Prod from "./consulta.js";

document.addEventListener('DOMContentLoaded', async function () {

    const params = new URLSearchParams(window.location.search);
    const nome = params.get('nome');

    if (nome) {
        $('#nomeUsuario').text(nome);
        const modal = new bootstrap.Modal(document.getElementById('modalBoasVindas'));
        modal.show();
    }

    const products = new Prod();
    const get = await products.getValues();

    if (!get) {
        console.log('Produto não consultado.');
        return;
    }

    let cards = 0;

    function renderizarPagina() {
        products.renderizarProd1(get, cards);
        products.renderizarProd2(get, cards + 1);
        products.renderizarProd3(get, cards + 2);
        products.renderizarProd4(get, cards + 3);

        $('#paginaAnterior').prop('disabled', cards === 0);
        $('#proximaPagina').prop('disabled', cards + 4 >= get.length);
    }


    renderizarPagina();

    $('#proximaPagina').on('click', function () {

        if (cards + 4 >= get.length) {
            return;
        }

        cards += 4;
        renderizarPagina();
    });

    $('#paginaAnterior').on('click', function () {

        if (cards === 0) {
            return;
        }

        cards -= 4;
        renderizarPagina();
    });

    window.removerProduct = async function (i) {
        await products.removerProduto(i);

        const getAtualizado = await products.getValues();

        if (!getAtualizado) return;

        products.renderizarProd1(getAtualizado, cards);
        products.renderizarProd2(getAtualizado, cards + 1);
        products.renderizarProd3(getAtualizado, cards + 2);
        products.renderizarProd4(getAtualizado, cards + 3);
    }
});