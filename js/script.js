/* ----- toggle icon navbar ----- */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



/* ----- scroll section active link ----- */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })

/* ----- sticky navbar ----- */
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);


/* ----- remove toggle icon and navbar when click navbar link (scroll) ----- */
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');


}

/* ----- scroll reveal ----- */
ScrollReveal({
    reset: true,
    distance: '160px',
    duration: 1500,
    delay: 100
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.skills-container,  .projects-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .title, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .home-img, .about-content', {origin: 'right'});


/* ----- types js ----- */
const typed = new Typed('.multiple-text', {
    strings: ['Fullstack Engineer', 'Software Developer', 'University Student', 'Bartender',
'UI/UX Designer'],
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 1000,
    loop: true
});

const typed2 = new Typed('.multiple-text2', {
    strings: ['Versatile Fullstack Developer',
        'Innovative Programmer',
        'Tech Enthusiast'],
        typeSpeed: 80 ,
        backSpeed: 40,
        backDelay: 1000,
        loop: true
});


document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const skillsBox = event.target.closest('.skills-box');
            skillsBox.classList.toggle('expanded');
        });
    });
});

const readMoreBtns = document.querySelectorAll('.read-more');
readMoreBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const project = btn.parentNode;
    const details = project.querySelector('.extra-content');
    details.classList.toggle('hidden');
    btn.textContent = details.classList.contains('hidden') ? 'Read More' : 'Read Less';
  });
});


