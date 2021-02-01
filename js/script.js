const navIcon = document.getElementById('nav-icon')
const heroBackground = document.querySelector('.hero-header-text')

navIcon.addEventListener('click', () => {
    navIcon.classList.toggle('open')
    heroBackground.classList.toggle('hero-expand')
})


