const navIcon = document.getElementById('nav-icon')
const heroBackground = document.querySelector('.hero-header-text')
const profilePhoto = document.querySelector('.profile-photo')

navIcon.addEventListener('click', () => {
    navIcon.classList.toggle('open')
    heroBackground.classList.toggle('hero-expand')
})


window.addEventListener('scroll', checkProfilePhoto)

checkProfilePhoto()

function checkProfilePhoto() {
    const triggerBottom = window.innerHeight / 5 * 4
    const profilePhotoTop = profilePhoto.getBoundingClientRect().top

        if(profilePhotoTop < triggerBottom) {
            profilePhoto.classList.add('show')
        }
}