export default class Products {
    id_user;
    products;

    constructor() {
        this.id_user = (JSON.parse(sessionStorage.getItem('usuarioLogado')))?.id ?? false;
        console.log('id_user:', this.id_user);
    }

    async getValues() {
        const response = await fetch(`http://localhost:3000/product?id_user=${this.id_user}`);
        const products = await response.json();

        if (products.length == 0) {
            return false;
        }
        this.products = products;
        return products;
    }

    async removerProduto(i) {
        if (!this.products[i]) return false;

        const id = this.products[i].id;

        await fetch(`http://localhost:3000/product/${id}`, {
            method: 'DELETE'
        });

        // atualiza cache interno
        this.products = this.products.filter(p => p.id !== id);

        return true;
    }

    renderizarProd1(products, i) {
        if (!products[i]) {
            document.getElementById('product-1').innerHTML = '';
            return
        }
        document.getElementById('product-1').innerHTML = `
                <div class="card h-100 price-reached overflow-hidden">
                    <div class="row g-0 h-100">
                        <div class="col-12 col-md-4 h-100 product-img-container" id="product-1-img">
                            <img alt="PRODUTO 1" src="${products[i].imagem}"/>
                        </div>
                        <div class="col-12 col-md-8 p-4 d-flex flex-column">
                            <div
                                class="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3 mb-md-2">
                                <h3 class="h4 fw-bold mb-2 mb-md-0" id="product-1-nome">${products[i].nome}</h3>
                                <span class="badge bg-success rounded-pill text-uppercase small py-2 px-3">
                                    <span class="material-symbols-outlined fs-6 align-top">check_circle</span>
                                    Preço Atingido
                                </span>
                            </div>
                            <p class="text-muted small text-uppercase fw-medium mb-4">
                                <span class="material-symbols-outlined small align-top">schedule</span>
                                Atualizado há 15 min
                            </p>
                            <div class="row g-3 mb-auto">
                                <div class="col-sm-6 col-6">
                                    <p class="text-muted small fw-bold text-uppercase mb-1">
                                        Meta
                                    </p>
                                    <h1 class="h5 fw-bold" id="product-1-meta">${products[i].meta}</h1>
                                </div>
                                <div class="col-sm-6 col-6 order-2 order-sm-3">
                                    <p class="text-muted small fw-bold text-uppercase mb-1">
                                        Preco Amazon
                                    </p>
                                    <h1 class="h5 fw-bold" id="product-1-preco">${products[i].preco}</h1>
                                </div>
                            </div>
                            <div
                                class="d-flex flex-column flex-md-row justify-content-between align-items-center border-top mt-4 pt-3 gap-3">
                                <div class="d-flex gap-4 w-100 justify-content-center">
                                    <button
                                        class="btn btn-link text-primary text-decoration-none fw-bold p-0 small text-uppercase">
                                        <span class="material-symbols-outlined fs-6 align-middle">edit</span>
                                        Editar
                                    </button>
                                    <button
                                        onclick="removerProduct(${i})"
                                        class="btn btn-link text-danger text-decoration-none fw-bold p-0 small text-uppercase">
                                        <span class="material-symbols-outlined fs-6 align-middle">delete</span>
                                        Remover
                                    </button>
                                </div>
                                <button class="btn btn-primary px-4 fw-bold text-uppercase small w-100 w-md-auto">
                                    <a href="${products[i].url}" class="link text-white text-decoration-none">Ir para loja</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`;
        console.log(products[i].imagem);
        console.log(products[i].nome);
    }

    renderizarProd2(products, i) {
        if (!products[i]) {
            document.getElementById('product-2').innerHTML = '';
            return
        }
        document.getElementById('product-2').innerHTML = `
                <div class="card h100 overflow-hidden">
                    <img class="card-img-top" style="height: 180px; object-fit: cover"
                        src="${products[i].imagem}"
                        alt="iPhone">
                    <div class="card-body d-flex flex-column">
                        <h3 class="h5 fw-bold mb-4">${products[i].nome}</h3>
                        <div class="bg-light p-3 rounded mb-4 d-flex justify-content-between align-items-center">
                            <span class="text-muted small text-uppercase fw-bold">Meta</span>
                            <span class="fw-bold">${products[i].meta}</span>
                        </div>
                        <div class="row g-2 mb-auto">
                            <div class="col-12">
                                <p class="text-muted small fw-bold text-uppercase mb-1">
                                    Preco Amazon
                                </p>
                                <p class="fw-semibold mb-0">${products[i].preco}</p>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
                            <div class="d-flex gap-3 text-muted">
                                <span class="material-symbols-outlined cursor-pointer">edit</span>
                                <span onclick="removerProduct(${i})" class="material-symbols-outlined cursor-pointer">delete</span>
                            </div>
                            <span
                                class="badge bg-secondary bg-opacity-10 text-secondary text-uppercase py-1 px-2 small">Monitorando</span>
                        </div>
                    </div>
                </div>`
    }

    renderizarProd3(products, i) {
        if (!products[i]) {
            document.getElementById('product-3').innerHTML = '';
            return
        }
        document.getElementById('product-3').innerHTML = `
                <div class=" card h100 overflow-hidden">
                    <img class="card-img-top" style="height: 180px; object-fit: cover"
                        src="${products[i].imagem}"
                        alt="iPhone">
                    <div class="card-body d-flex flex-column">
                        <h3 class="h5 fw-bold mb-4">${products[i].nome}</h3>
                        <div class="bg-light p-3 rounded mb-4 d-flex justify-content-between align-items-center">
                            <span class="text-muted small text-uppercase fw-bold">Meta</span>
                            <span class="fw-bold">${products[i].meta}</span>
                        </div>
                        <div class="row g-2 mb-auto">
                            <div class="col-12">
                                <p class="text-muted small fw-bold text-uppercase mb-1">
                                    Preco Amazon
                                </p>
                                <p class="fw-semibold mb-0">${products[i].preco}</p>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
                            <div class="d-flex gap-3 text-muted">
                                <span class="material-symbols-outlined cursor-pointer">edit</span>
                                <span onclick="removerProduct(${i})" class="material-symbols-outlined cursor-pointer">delete</span>
                            </div>
                            <span
                                class="badge bg-secondary bg-opacity-10 text-secondary text-uppercase py-1 px-2 small">Monitorando</span>
                        </div>
                    </div>
                </div>
        `
    }

    renderizarProd4(products, i) {
        if (!products[i]) {
            document.getElementById('product-4').innerHTML = '';
            return
        }
        document.getElementById('product-4').innerHTML = `
            <div class="card price-reached h-100 overflow-hidden">
                    <div class="row g-0 h-100">
                        <div class="col-12 col-md-3 product-img-container">
                            <img src="${products[i].imagem}"
                                alt="Camera">
                        </div>
                        <div class="col-12 col-md-9 p-4 d-flex flex-column">
                            <div class="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3">
                                <h3 class="h5 fw-bold mb-2">
                                    ${products[i].nome}
                                </h3>
                                <span class="badge bg-success bg-opacity-10 text-success text-uppercase">Preco
                                    Atingido</span>
                            </div>
                            <div class="row g-3 mb-auto">
                                <div class="col-6 col-sm-6 border-end-sm">
                                    <p class="text-muted small text-uppercase fw-bold mb-1">
                                        Meta
                                    </p>
                                    <p class="fw-bold h6 mb-0">${products[i].meta}</p>
                                </div>
                                <div class="col-12 col-sm-6 border-end-sm">
                                    <div class="bg-success bg-opacity-10 rounded text-success p-2">
                                        <p class="small text-uppercase fw-bold mb-1">Preco Amazon</p>
                                        <p class="fw-bold h6 mb-0">${products[i].preco}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mt-4 border-top">
                                <div class="d-flex gap-3 mt-4">
                                    <span class="material-symbols-outlined text-muted cursor-pointer">edit</span>
                                    <span onclick="removerProduct(${i})" class="material-symbols-outlined text-muted cursor-pointer">delete</span>
                                </div>
                                <div class="mt-4">
                                    <button class="btn btn-outline-primary btn-sm fw-bold text-uppercase px-4">
                                        Detalhes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `
    }
}