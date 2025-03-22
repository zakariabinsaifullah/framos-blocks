document.addEventListener('DOMContentLoaded', function () {
    const framosVerticalCarousel = document.querySelectorAll('.wp-block-framos-vertical-carousel');

    if (framosVerticalCarousel && framosVerticalCarousel.length > 0) {
        framosVerticalCarousel.forEach(function (carousel) {
            const firstSlider = carousel.querySelector('.swiper-container');
            const secondSlider = carousel.querySelector('.swiper-container1');

            const swiper = new Swiper(firstSlider, {
                direction: 'vertical',
                loop: true,
                centeredSlides: true,
                speed: 9000,
                autoplay: {
                    delay: 1
                },
                slidesPerView: 'auto',
                allowTouchMove: false,
                disableOnInteraction: true
            });

            const swiper1 = new Swiper(secondSlider, {
                direction: 'vertical',
                loop: true,
                centeredSlides: true,
                speed: 9000,
                autoplay: {
                    delay: 2
                },
                slidesPerView: 'auto',
                allowTouchMove: false,
                disableOnInteraction: true
            });
        });
    }
});
