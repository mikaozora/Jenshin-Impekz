const menuToggle = document.querySelector('.menu-toggle input');
const navbar = document.querySelector('.list');
menuToggle.addEventListener('click', function(){
    navbar.classList.toggle('slide');
})