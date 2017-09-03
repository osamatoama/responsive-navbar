var header__icon = document.querySelector('#header__icon');
header__icon.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.classList.toggle('with--sidebar');
});