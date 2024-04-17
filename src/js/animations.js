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
        startY: 100,
        translateY: -10,
        easing: 'easeInOutExpo',
        opacity: 1,
        duration: 1000,
        delay: 400
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

// animation for nav items on load on desktop
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-container ul li');

    anime({
        targets: navItems,
        translateY: [-20, 0],
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 2000,
        delay: anime.stagger(120)
    });
});

// cursor animation
document.addEventListener('DOMContentLoaded', () => {
    let cursor = document.querySelector('#animatedCursor');

    // Function to move the cursor to the mouse position
    function moveCursor(e) {
        cursor.style.display = 'block'; // Ensure cursor is visible
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }

    // Track cursor movement
    document.addEventListener('mousemove', moveCursor);
});
