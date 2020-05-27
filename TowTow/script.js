const showMenuBtn = document.querySelector('.fa-bars');
const hideMenuBtn  = document.querySelector('.fa-times-circle');
const menuBtn = document.querySelector('.menuBtn1');
const menuBtn2 = document.querySelector('.menuBtn2');
const menuBtn3 = document.querySelector('.menuBtn3');
const menuBtn4 = document.querySelector('.menuBtn4');
const menuBtn5 = document.querySelector('.menuBtn5');
const menuBtn6 = document.querySelector('.menuBtn6');
const menu = document.querySelector('.menu');

function show() {
    menu.style.transform = "translateX(100%)"
}

showMenuBtn.addEventListener('click', show);

function hide() {
    menu.style.transform = "translateX(0)";
}


menuBtn.addEventListener('click', hide);
menuBtn2.addEventListener('click', hide);
menuBtn3.addEventListener('click', hide);
menuBtn4.addEventListener('click', hide);
menuBtn5.addEventListener('click', hide);
menuBtn6.addEventListener('click', hide);
hideMenuBtn.addEventListener('click', hide);