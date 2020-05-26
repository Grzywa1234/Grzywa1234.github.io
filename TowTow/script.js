const showMenuBtn = document.querySelector('.fa-bars');
const hideMenuBtn  = document.querySelector('.fa-times-circle');
const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.menu');

function show() {
    menu.style.transform = "translateX(100%)"
}

showMenuBtn.addEventListener('click', show);

function hide() {
    menu.style.transform = "translateX(0)";
}


menuBtn.addEventListener('click', hide);
hideMenuBtn.addEventListener('click', hide);