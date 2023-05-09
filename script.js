let hamburger = document.querySelector('.headerHamburger');
let menu = document.querySelector('.header');
let zeroScroll = document.querySelector('body');

hamburger.addEventListener('click', function () {
    menu.classList.toggle('active');
    zeroScroll.classList.toggle('lock');
});