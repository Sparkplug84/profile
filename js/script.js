
const loadText = document.querySelector('.loading-text')
const loadImage = document.querySelector('.hero-header-text')
const callout = document.querySelector('.callout')
const navbar = document.querySelector('.navbar')

let load = 0
let int = setInterval(blurring, 40)

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
        navbar.classList.add('show')
        setTimeout(function () {
            callout.classList.add('show')
        }, 1000);
    }
    loadText.innerHTML = `Profile loading...${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    loadImage.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

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

    if (profilePhotoTop < triggerBottom) {
        profilePhoto.classList.add('show')
    }
}

$(function ($) {
    let url = window.location.href;
    console.log(url)
    $('nav ul li a').each(function () {
        if (this.href === url) {
            $(this).closest('li').addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
});

// $('#navbar .navbar-nav a').on('click', function() {
//     $('#navbar .navbar-nav').find('li.active').removeClass('active')
//     $(this).parent('li').addClass('active')
// })

// $(document).on('click', 'nav li', function(){
//     $('.navbar li').removeClass('active');
//     $(this).addClass('active');
// })

// $(function(){
//     var current = location.pathname;
//     $('#navbarNav li').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.addClass('active');
//         }
//     })
// })