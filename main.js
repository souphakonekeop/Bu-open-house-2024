// Get all buttons with the class "certificate-btn"
var buttons = document.getElementsByClassName("certificate-btn");
var modals = document.getElementsByClassName("modal");
var closeBtns = document.getElementsByClassName("close");

// Add event listeners to all buttons
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        var modalId = this.getAttribute("data-modal");
        document.getElementById(modalId).style.display = "block";
    }
}

// Add event listeners to close buttons inside modals
for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].onclick = function() {
        this.parentElement.parentElement.style.display = "none";
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}


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
const fadeElements = document.querySelectorAll('.fade');

const options = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, options);

fadeElements.forEach(element => {
    observer.observe(element);
});

/*================== Activity ===========*/
const activitySection = document.querySelector('.about2');

const activityObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add class when in view
        } else {
            entry.target.classList.remove('visible'); // Remove class when out of view
        }
    });
}, options);

activityObserver.observe(activitySection);

/*================== FAQ ===========*/
// FAQ Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.querySelector('.question').addEventListener('click', function() {
            // Toggle the active state
            item.classList.toggle('active');
            
            // Get the answer section
            const answer = item.querySelector('.answer');
            
            if (item.classList.contains('active')) {
                // Open the answer
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                // Close the answer
                answer.style.maxHeight = null;
            }
        });
    });
});
