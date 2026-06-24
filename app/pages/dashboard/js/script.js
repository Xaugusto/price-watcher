document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const nome = params.get('nome');

    if (nome) {
        document.getElementById('nomeUsuario').textContent = nome;
        const modal = new bootstrap.Modal(document.getElementById('modalBoasVindas'));
        modal.show();
    }
});