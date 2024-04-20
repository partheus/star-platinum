document.addEventListener('DOMContentLoaded', function () {
    const slidesContainer = document.getElementById('carouselSlides');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let slideIndex = 0; // Starting index

    function moveToSlide(n) {
        const slides = document.querySelectorAll('.project-card');
        const totalSlides = slides.length;

        slideIndex += n;

        // Loop back to the opposite end if out of bounds
        if (slideIndex >= totalSlides) slideIndex = 0;
        if (slideIndex < 0) slideIndex = totalSlides - 1;

        // Calculate new position and apply
        const newSlidePosition = -slideIndex * 100; // Assuming 100% width per slide
        slidesContainer.style.transform = `translateX(${newSlidePosition}%)`;
    }

    prevBtn.addEventListener('click', () => moveToSlide(-1));
    nextBtn.addEventListener('click', () => moveToSlide(1));
});
