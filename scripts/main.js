window.onload = () => {
    window.scrollTo(0, 0);
};

const nav = document.querySelector('nav');
let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', () => {
    const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
        nav.classList.add('nav-hidden');
    } else {
        nav.classList.remove('nav-hidden');
    }

    lastScrollY = Math.max(currentScrollY, 0);
});
