import Prod from "./consulta.js";

document.addEventListener('DOMContentLoaded', async function () {
    const params = new URLSearchParams(window.location.search);
    const nome = params.get('nome');

    if (nome) {
        document.getElementById('nomeUsuario').textContent = nome;
        const modal = new bootstrap.Modal(document.getElementById('modalBoasVindas'));
        modal.show();
    }

    const products = new Prod();
    const get = await products.getValues();

    if (get) {
        products.renderizarProd1(get, 0);
        products.renderizarProd2(get, 1);
        products.renderizarProd3(get, 2);
        products.renderizarProd4(get, 3);
    }

    else {
        console.log('produto não consultado' + get);
    }
});

