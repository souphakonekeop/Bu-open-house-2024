/*================== TOGGLE icon navbar ===========*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    menuIcon.classList.toggle('fa-bars');
    navbar.classList.toggle('active');
};

/*================== SCROLL section active link ===========*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /*================== Sticky navbar ===========*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*================== remove toggle icon and navbar when scrolling ===========*/
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
    navbar.classList.remove('active');

    /*================== Update progress bar width ===========*/
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progressPercentage = (window.scrollY / totalHeight) * 100;
    document.querySelector('.progress-bar').style.width = progressPercentage + '%';
};

// Initialize ScrollReveal with default settings
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

// Specify elements and their reveal origins
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact, .about-content', { origin: 'right' });

/*================== TYPED JS ===========*/
const typed = new Typed('.multiple-text', {
    strings: ['Open House 2024!'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

/*================== Fade-in effect on scroll ===========*/
window.addEventListener('scroll', () => {
    const fadeElements = document.querySelectorAll('.fade');
    fadeElements.forEach(element => {
        const { top } = element.getBoundingClientRect();
        if (top < window.innerHeight) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});
