const butonLogout = $('#logout');

butonLogout.on('click', function () {
    sessionStorage.removeItem('usuarioLogado');
    window.location.href = './../login/login_signup.html';
})