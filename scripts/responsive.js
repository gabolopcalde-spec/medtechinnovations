const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const contactBtn = document.getElementById('contactBtn');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    contactBtn.style.display = 'block';
});