const menuzim = document.querySelector('#toggle');
const main = document.querySelector('#main');
const menu = document.querySelector('#menu')
const menuItems = document.querySelector('#menu-items')

menuzim.addEventListener('click', function(e) {
    menu.classList.toggle('menu-open');
    menuItems.classList.toggle('menu-items-open');
});

main.addEventListener('click', function() {
    menu.classList.remove('menu-open');
    menuItems.classList.remove('menu-items');
}) ;
