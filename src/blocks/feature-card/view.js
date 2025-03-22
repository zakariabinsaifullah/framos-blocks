document.addEventListener('DOMContentLoaded', function () {
    const framosHorizontalCarousel = document.querySelectorAll('.wp-block-framos-feature-card');

    if (framosHorizontalCarousel && framosHorizontalCarousel.length > 0) {
        framosHorizontalCarousel.forEach(function (carousel) {
            const sliderWrapper = carousel.querySelector('.swiper');

            const swiper = new Swiper(sliderWrapper, {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                autoplay: false,
                breakpoints: {
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }
            });

            // navigations
            const prevNavigation = carousel.querySelector('.prev-navigation');
            const nextNavigation = carousel.querySelector('.next-navigation');

            prevNavigation.addEventListener('click', function () {
                swiper.slidePrev();
            });

            nextNavigation.addEventListener('click', function () {
                swiper.slideNext();
            });
        });
    }
});
