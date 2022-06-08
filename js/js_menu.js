const menuzim = document.querySelector('#toggle');
const main = document.querySelector('#main');
const menu = document.querySelector('#menu')
const menuItems = document.querySelector('#menu-items')
const link= document.querySelector('.link-menu');
const back = document.querySelector('#check')

menuzim.addEventListener('click', function(e) {
    menu.classList.toggle('menu-open');
    menuItems.classList.toggle('menu-items-open');
    back.classList.toggle('checkbox-open');
});

main.addEventListener('click', function() {
    menu.classList.remove('menu-open');
    menuItems.classList.remove('menu-items-open');
    back.classList.remove('checkbox-open');
    $("#toggle").removeAttr('checked');
}) ;

link.addEventListener('click', function(e){
    menu.classList.remove('menu-open');
    menuItems.classList.remove('menu-items-open');
    back.classList.remove('checkbox-open');
    $("#toggle").removeAttr('checked');
})