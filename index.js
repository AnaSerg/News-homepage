const menuButton = document.querySelector('.menu__button');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('menu__button_open');
    menu.classList.toggle('menu_open');
});