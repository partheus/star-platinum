// animation for carousel but using slider.js
document.addEventListener('DOMContentLoaded', function () {
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        dots: '#gliderDots',
        draggable: true,
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        },
        scrollLock: true, // Lock the scroll to a slide perfectly.
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 775,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 'auto',
                    slidesToScroll: 'auto',
                    itemWidth: 150,
                    duration: 0.25
                }
            }, {
                // screens greater than >= 1024px
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 'auto',
                    itemWidth: 150,
                    duration: 0.25
                }
            }
        ]
    });
});
