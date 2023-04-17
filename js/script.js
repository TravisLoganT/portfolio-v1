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

        if (top >= offset && top < offset + height) {
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
    delay: 0,
    afterReveal: function (domEl) {
        const readMoreButton = document.getElementById('read-more-button');
        if (readMoreButton && !domEl.classList.contains('read-more')) {
            readMoreButton.textContent = 'Read Less';
        }
    },
});


/* ----- home scroll animations ----- */
ScrollReveal().reveal('.multiple-text3', { origin: 'top', delay: 0, once: true });
ScrollReveal().reveal('.name-intro', { origin: 'left', delay: 1300 });
ScrollReveal().reveal('.home-img', { origin: 'right', delay: 1300 });
ScrollReveal().reveal('.home-description', { delay: 2000 });
ScrollReveal().reveal('.home-text', { origin: 'left', delay: 3600 });
ScrollReveal().reveal('.social-media', { origin: 'bottom', delay: 3800 });
ScrollReveal().reveal('.CV', { origin: 'bottom', delay: 4000 });

/* ----- about section animations ----- */
ScrollReveal().reveal('.heading', { origin: 'top', delay: 200 });
ScrollReveal().reveal('.about-strings', { origin: 'bottom', delay: 1000 });
ScrollReveal().reveal('.about-img', { origin: 'left', delay: 700 });
ScrollReveal().reveal('.about-description', { origin: 'right', delay: 1500 });

/* ----- skills section animations ----- */
ScrollReveal().reveal('.title', { origin: 'left'});
ScrollReveal().reveal('.skills-container', { origin: 'bottom', delay: 300});

/* ----- projects section animations ----- */
ScrollReveal().reveal('.projects-box', { origin: 'bottom'});

/* ----- testimony section animations ----- */
ScrollReveal().reveal('.div1', {origin: 'left', delay: 250})
ScrollReveal().reveal('.div2', {origin: 'top', delay: 900})
ScrollReveal().reveal('.div3', {origin: 'right', delay: 1700})
ScrollReveal().reveal('.div4', {origin: 'left', delay: 2600})
ScrollReveal().reveal('.div5', {origin: 'bottom', delay: 3500})


/*
ScrollReveal().reveal('.heading, .div2', {origin: 'top', delay: 500});
ScrollReveal().reveal('.skills-container,  .projects-box, .contact form, .div5', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .title, .about-img, .div1, .div4', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .home-img, .about-content, .div3', {origin: 'right'});
*/


/* ----- types js ----- */
const typed = new Typed('.multiple-text', {
    startDelay: 2500,
    strings: ['Fullstack Engineer', 'Software Developer', 'University Student', 'Bartender',
        'UI/UX Designer'],
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 1000,
    loop: true

});

const typed2 = new Typed('.multiple-text2', {
    startDelay: 1200,
    strings: ['Versatile Fullstack Developer',
        'Innovative Programmer',
        'Tech Enthusiast'],
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 1000,
    loop: true
});

/* ----- typed greeting ----- */
let currentDate = new Date();
let currentTime = currentDate.getHours();

if (currentTime > 4 && currentTime < 12) {
    const greeting = new Typed('.multiple-text3', {
        strings: ['Good Morning'],
        typeSpeed: 30,
        startDelay: 700,
        loop: false,
        showCursor: false
    })
}
else if (currentTime > 12 && currentTime < 19) {
    const greeting = new Typed('.multiple-text3', {
        strings: ['Good Afternoon,'],
        typeSpeed: 30,
        startDelay: 700,
        loop: false,
        showCursor: false
    })
}

else {
    const greeting = new Typed('.multiple-text3', {
        strings: ['Good Evening'],
        startDelay: 700,
        typeSpeed: 20,
        loop: false,
        showCursor: false
    })
}


document.addEventListener('DOMContentLoaded', function () {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const skillsBox = event.target.closest('.skills-box');
            skillsBox.classList.toggle('expanded');
            if (skillsBox.classList.contains('expanded')) {
                button.textContent = 'Read Less';
            } else {
                button.textContent = 'Read More';
            }
        });
    });
});

window.addEventListener('scroll', function () {
    const expandedElements = document.querySelectorAll('.skills-box.expanded');
    expandedElements.forEach(function (expandedElement) {
        const bounding = expandedElement.getBoundingClientRect();
        const readMoreButton = expandedElement.querySelector('.read-more');
        if (bounding.bottom < 0 || bounding.top > window.innerHeight) {
            expandedElement.classList.remove('expanded');
            readMoreButton.textContent = 'Read More';
        }
    });
});


