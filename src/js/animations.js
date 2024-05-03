import anime from "../lib/anime.es.js";

// This is a simple example of how to use the anime.js library
document.addEventListener('DOMContentLoaded', () => {
    const pageTitle = document.querySelector('.pagetitle');
    const pageSubtitle = document.querySelector('.pagesubtitle');

    anime({
        targets: pageTitle,
        translateY: -15,
        easing: 'easeInOutExpo',
        opacity: 1,
        duration: 1000,
        delay: 50
    });

    anime({
        targets: pageSubtitle,
        translateX: [-40, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 2000,
        delay: 10
    });
});

// homepage svg animation
document.addEventListener('DOMContentLoaded', () => {
    const landingAsset = document.querySelector('#landingAsset');
    anime({
        targets: landingAsset,
        translateY: [-30, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 1600,
        delay: 1200
    });
});

// homepage buttons animation
document.addEventListener('DOMContentLoaded', function () {
    anime({
        targets: '.homepage__button__container .button',
        translateX: [anime.stagger('0', {start: -20}), 0], // Start from -20px to 0
        opacity: [0, 1], // Fade from 0 to 1 opacity
        delay: anime.stagger(150, {start: 1800}), // Delay each button animation by 150ms, starting after 1800ms
        duration: 450, // Duration of 450ms for each button animation
        easing: 'easeOutExpo', // Use an easing for a smooth effect
    });
});

// animate the letters in the span .art-word so that they appear one after the other on load of the page
document.addEventListener('DOMContentLoaded', () => {
    const artWord = document.querySelector('.art-word');
    const letters = artWord.textContent.split('');

    artWord.innerHTML = ''; // Clear the text content

    letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.opacity = 0;
        span.style.animation = `fadeIn 0.3s ease forwards ${index / 10 + 1.5}s`;
        artWord.appendChild(span);
    });

    anime({
        targets: '.art-word span',
        translateY: [-20, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 1000,
        delay: anime.stagger(300, {start: 400})
    });
});

// animation for menubar navigation on click on mobile
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-container ul');
    const menuItems = document.querySelectorAll('.nav-container ul li'); // Get all menu items
    const iconOpen = document.querySelector('.menu-open');
    const iconClosed = document.querySelector('.menu-closed');
    iconOpen.style.opacity = '0';
    iconOpen.style.visibility = 'hidden';

    menuIcon.addEventListener('click', () => {
        if (navLinks.style.display === 'flex') { // Assuming this part checks if the menu is open
            iconOpen.style.opacity = '0';
            iconOpen.style.visibility = 'hidden';
            iconClosed.style.opacity = '1';
            iconClosed.style.visibility = 'visible';
        } else {
            iconOpen.style.opacity = '1';
            iconOpen.style.visibility = 'visible';
            iconClosed.style.opacity = '0';
            iconClosed.style.visibility = 'hidden';
        }

        const isMenuOpen = navLinks.style.display === 'flex';

        if (isMenuOpen) {
            // If menu is currently open and will be closed.
            iconOpen.style.opacity = '0';
            iconOpen.style.visibility = 'hidden';
            iconOpen.style.display = 'none'; // Immediately hide.
            iconClosed.style.opacity = '1';
            iconClosed.style.visibility = 'visible';
            iconClosed.style.display = 'block'; // Ensure it’s displayed.
        } else {
            // If menu is currently closed and will be opened.
            iconOpen.style.opacity = '1';
            iconOpen.style.visibility = 'visible';
            iconOpen.style.display = 'block'; // Display block to make it visible.
            iconClosed.style.opacity = '0';
            iconClosed.style.visibility = 'hidden';
            iconClosed.style.display = 'none'; // Hide it.
        }

        // Adjust our animation to target each menu item for a staggered effect
        anime({
            targets: menuItems,
            translateY: isMenuOpen ? [-10, 0] : [0, -10],
            opacity: isMenuOpen ? [1, 0] : [0, 1],
            easing: 'easeInOutExpo',
            duration: 1100, // Slow down the animation
            delay: anime.stagger(110), // Stagger the animation of each item
            begin: function (anim) {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
            },
            complete: function (anim) {
                if (isMenuOpen) {
                    navLinks.style.display = 'none';
                }
            }
        });
    });

    anime({ // Animate the menu icon
        targets: menuIcon,
        translateY: [15, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 200,
        delay: 800
    });
});

// animation for nav items on load on desktop, colophon page links
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-container ul li');
    const colophonLinks = document.querySelectorAll('.content ul li');
    const colophonHeader = document.querySelector('.colophon h2');
    const horizontalRule = document.querySelector('hr');

    anime({
        targets: navItems,
        translateY: [-20, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 2000,
        delay: anime.stagger(120)
    });

    anime({
        targets: colophonLinks,
        translateY: [-40, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 2000,
        delay: anime.stagger(120, {start: 900})
    });

    anime({
        targets: colophonHeader,
        translateX: [-40, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 2000,
        delay: 800
    });

    anime({
        targets: horizontalRule,
        translateX: [-30, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 2400,
        delay: 2100
    });
});

// animate .content on load
document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');

    anime({
        targets: content,
        translateY: [20, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 2000,
        delay: 100
    });
});

// animate: project-number, project-title, project-subtitle, project-link on load
document.addEventListener('DOMContentLoaded', () => {
    const projectNumber = document.querySelector('.project-number');
    const projectTitle = document.querySelector('.project-title');
    const projectSubtitle = document.querySelector('.project-subtitle');
    const projectLink = document.querySelectorAll('.project-link');
    const projectCard = document.querySelector('.project-card');
    // button container for the carousel
    const carouselButtonContainer = document.querySelector('.carousel-btn__container');
    //carousel buttons
    const carouselButton = document.querySelectorAll('.carousel-btn');
    const projectImage = document.querySelectorAll('.project-image');

    anime({
        targets: projectNumber,
        translateX: [-30, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 1000,
        delay: 1400
    });

    // carousel button container animation
    anime({
        targets: carouselButtonContainer,
        translateX: [50, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 2000,
        delay: 600
    });

    // carousel button animation
    anime({
        targets: carouselButton,
        translateY: [-20, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 400,
        delay: 1500
    });

    anime({
        targets: projectTitle,
        translateY: [-20, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 2000,
        delay: 1300
    });

    anime({
        targets: projectSubtitle,
        translateY: [-20, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 2000,
        delay: 1200
    });

    // stagger the animation of each project link
    anime({
        targets: projectLink,
        translateY: [-20, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 800,
        delay: 1000
    });

    // slide in from left the first project card on load
    anime({
        targets: projectCard,
        translateX: [-100, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 300,
        delay: 300
    });

    // snazzy animation for the project image
    anime({
        targets: projectImage,
        translateY: [-20, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 1000,
        delay: 300
    });
});

// on clicking next or previous project, animate the project card based on .carousel-btn
document.addEventListener('DOMContentLoaded', () => {
    const carouselButton = document.querySelectorAll('.carousel-btn');

    carouselButton.forEach((button) => {
        button.addEventListener('click', () => {
            // const projectCardContent = document.querySelectorAll('.project-card__content');
            const projectCard = document.querySelectorAll('.project-card');
            const projectCardContent = document.querySelectorAll('.project-card__content > *');

            // snazzy animation for the project card content
            anime({
                targets: projectCardContent,
                translateX: [10, 0],
                opacity: [0, 1],
                easing: 'easeInOutExpo',
                duration: 1400,
                delay: 200
            });

            // slide in from left the first project card on load
            anime({
                targets: projectCard,
                translateX: [-110, 0],
                opacity: [0, 1],
                easing: 'easeInOutExpo',
                duration: 120,
                delay: 100
            });
        });
    });
});

// animate project-section on load
document.addEventListener('DOMContentLoaded', () => {
    const projectSection = document.querySelector('.project-section');
    const backToHome = document.querySelector('.back-to-home');
    const projectSectionHeaders = document.querySelectorAll('.project-section h2');
    const projectSectionParagraphs = document.querySelectorAll('.project-section p');

    anime({
        targets: projectSection,
        translateX: [-50, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 1000,
        delay: 500
    });

    anime({
        targets: backToHome,
        translateX: [-40, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 400,
        delay: 1000
    });

    anime({
        targets: projectSectionHeaders,
        translateY: [-20, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 1000,
        delay: anime.stagger(300, {start: 800})
    });

    anime({
        targets: projectSectionParagraphs,
        translateY: [-20, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 1000,
        delay: anime.stagger(300, {start: 800})
    });
});

// animate everything in contact-form on load
document.addEventListener('DOMContentLoaded', () => {
    const contactFormContent = document.querySelectorAll('.contact-form div');

    anime({
        targets: contactFormContent,
        translateY: [-20, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 1000,
        delay: anime.stagger(300, {start: 1000})
    });
});

// cursor animation
document.addEventListener('DOMContentLoaded', () => {
    let cursor = document.querySelector('#animatedCursor');

    // Function to move the cursor to the mouse position only on desktop
    // This is to prevent the cursor from moving on mobile devices


    function moveCursor(e) {
        if (window.innerWidth <= 1111) {
            cursor.style.display = 'none'; // Hide cursor on mobile
            return;
        }
        cursor.style.display = 'block';
        cursor.style.left = e.pageX + 'px'; // Use pageX instead of clientX
        cursor.style.top = e.pageY + 'px'; // Use pageY instead of clientY
    }

    // Track cursor movement
    document.addEventListener('mousemove', moveCursor);

    // Example of cursor animation on mouse enter
    document.addEventListener('mouseenter', (e) => {
        anime({
            targets: '#animatedCursor',
            scale: 1.1, // Increase size
            backgroundColor: '#f00', // Change color
            duration: 200,
            easing: 'easeInOutSine'
        });
    });

    // Reverse animation on mouse leave
    document.addEventListener('mouseleave', (e) => {
        anime({
            targets: '#animatedCursor',
            scale: 0.8, // Decrease size
            backgroundColor: '#000', // Back to original color
            duration: 200,
            easing: 'easeInOutSine'
        });
    });
});

// animation for the footer on load
document.addEventListener('DOMContentLoaded', () => {
    const footerItems = document.querySelectorAll('footer p');
    const footerIcon = document.querySelectorAll('.footer-icon');

    anime({
        targets: footerItems,
        translateY: [20, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 1000,
        delay: anime.stagger(400, {start: 1000})
    });

    anime({
        targets: footerIcon,
        translateY: [-20, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 600,
        delay: 1200
    });
});

