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
    const landingSvg = document.querySelector('#landingSvg');
    anime({
        targets: landingSvg,
        translateY: [50, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 2000,
        delay: 100
    });
});

// homepage buttons animation
document.addEventListener('DOMContentLoaded', function() {
    anime({
        targets: '.homepage__button__container .button',
        translateX: [anime.stagger('0', {start: -50}), 0], // Start from -50px to 0
        opacity: [0, 1], // Fade from 0 to 1 opacity
        delay: anime.stagger(250, {start: 1800}), // Delay each button animation by 250ms, starting after 1800ms
        duration: 750, // Duration of 750ms for each button animation
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
        delay: anime.stagger(300, { start: 400 })
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
            duration: 1000, // Slow down the animation
            delay: anime.stagger(100), // Stagger the animation of each item
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
});

// animation for nav items on load on desktop, colophon page links
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-container ul li');
    const colophonLinks = document.querySelectorAll('.colophon ul li');
    const colophonHeader = document.querySelector('.colophon h2');

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
        delay: anime.stagger(120, { start: 900 })
    });

    anime({
        targets: colophonHeader,
        translateX: [-40, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 2000,
        delay: 800
    });
});

// project cards animation on load
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    // Animate the project cards contents
    const projectCardContents = document.querySelectorAll('.project-card__content');

    anime({
        targets: projectCards,
        translateY: [-50, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 1600,
        delay: anime.stagger(600, { start: 1200 })
    });

    anime({
        targets: projectCardContents,
        translateY: [-20, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 1400,
        delay: anime.stagger(500, { start: 2000 })
    });
});

// cursor animation
document.addEventListener('DOMContentLoaded', () => {
    let cursor = document.querySelector('#animatedCursor');

    // Function to move the cursor to the mouse position only on desktop
    // This is to prevent the cursor from moving on mobile devices


    function moveCursor(e) {
        if (window.innerWidth <= 1024) {
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
    const footer = document.querySelector('footer');

    anime({
        targets: footer,
        translateY: [20, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 1000,
        delay: 2000
    });
});
