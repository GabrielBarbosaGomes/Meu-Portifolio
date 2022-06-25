const menuzim = document.querySelector('#toggle');
const main = document.querySelector('#main');
const menu = document.querySelector('#menu')
const menuItems = document.querySelector('#menu-items')
const link= document.querySelectorAll('.link-menu');
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
    menuzim.checked = false;
;
});

function goLinkOpen(){

for(var i = 0; i < link.length; i++){
    
    menu.classList.remove('menu-open');
    menuItems.classList.remove('menu-items-open');
    back.classList.remove('checkbox-open');
    menuzim.checked = false;
}
};
