var navbar = document.getElementById('navbar');

var sticky = navbar.offsetTop;

function stickyNavibar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

window.onscroll = function() {
    stickyNavibar();
}