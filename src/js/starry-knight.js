// JavaScript to apply animations using Anime.js
import anime from "../lib/anime.es";

const starsContainer = document.getElementById('stars-container');

// Function to create a random number of stars and append them to the container
function createStars() {
    const numStars = Math.floor(Math.random() * 50) + 50; // Random number of stars (between 50 and 100)
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('img');
        star.src = '/img/rose-vines.svg'; // Star image
        star.classList.add('star');
        starsContainer.appendChild(star);
    }
}

createStars(); // Call the function to create stars initially

// Function to animate stars
function animateStars() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        anime({
            targets: star,
            duration: anime.random(800, 1200),
            loop: true,
            easing: 'linear',
            rotate: () => anime.random(0, 360), // Rotate randomly
            scale: [1, anime.random(0.8, 1.2)], // Scale randomly
            delay: anime.random(0, 2000), // Random delay
            opacity: [1, anime.random(0.5, 1)] // Random opacity
        });
    });
}

animateStars(); // Call the function to animate stars
