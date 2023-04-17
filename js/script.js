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
    delay: 100,
    afterReveal: function (domEl) {
        const readMoreButton = document.getElementById('read-more-button');
        if (readMoreButton && !domEl.classList.contains('read-more')) {
          readMoreButton.textContent = 'Read Less';
        }
      },
});

ScrollReveal().reveal('.home-content, .heading, .div2', {origin: 'top'});
ScrollReveal().reveal('.skills-container,  .projects-box, .contact form, .div5', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .title, .about-img, .div1, .div4', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .home-img, .about-content, .div3', {origin: 'right'});


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

/* ----- typed greeting ----- */
let currentDate = new Date();
let currentTime = currentDate.getHours();

if (currentTime > 4 && currentTime < 12) {
    const greeting = new Typed('.multiple-text3', {
        strings: ['Good Morning'],
        typeSpeed: 300,
        loop: false,
        showCursor: false
    })
}
else if (currentTime > 12 && currentTime < 19) {
    const greeting = new Typed('.multiple-text3', {
        strings: ['Good Afternoon'],
        typeSpeed: 50,
        loop: false,
        showCursor: false
    })
}

else {
    const greeting = new Typed('.multiple-text3', {
        strings: ['Good Evening'],
        typeSpeed: 100,
        loop: false,
        showCursor: false
    })
}


document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
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

window.addEventListener('scroll', function() {
    const expandedElements = document.querySelectorAll('.skills-box.expanded');
    expandedElements.forEach(function(expandedElement) {
      const bounding = expandedElement.getBoundingClientRect();
      const readMoreButton = expandedElement.querySelector('.read-more');
      if (bounding.bottom < 0 || bounding.top > window.innerHeight) {
        expandedElement.classList.remove('expanded');
        readMoreButton.textContent = 'Read More';
        }
    });
  });


