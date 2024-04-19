// animation for carousel but using slider.js
document.addEventListener('DOMContentLoaded', function () {
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        dots: '.dots',
        draggable: true,
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        },
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
                    slidesToShow: 'auto',
                    slidesToScroll: 1,
                    itemWidth: 'auto',
                    duration: 1
                }
            }
        ]
    });
});
