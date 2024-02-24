
// togle
const navbarNav = document.querySelector('.navbar-nav');

// ham menu klik
document.querySelector('#ham-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}

// klik diluar navbar hilang
const hamburger = document.querySelector('#ham-menu');
document.addEventListener('click', function(e){
    if (!hamburger.contains(e.target)&&!navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }

})