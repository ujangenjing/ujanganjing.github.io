// Toggle class active
const navbarNav = document.queryselector('.navbar-nav');
// ketika menu di klik 
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
}

// klik di luar sidebar untuk menghilangkan nav 
const hamburger = document.queryselector('#menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classlist.remove('active');
    }
})