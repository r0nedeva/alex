/* =========================================================
   MAY CHEF ATELIER
========================================================= */

/* = ROLE / SCOPE ANIMATION = */

const scopeRoles =
    document.querySelectorAll('.mc-scope__role');

if (scopeRoles.length) {

    let currentRole = 0;

    function updateScopeRole() {

        scopeRoles.forEach((role, index) => {

            role.classList.toggle(
                'is-active',
                index === currentRole
            );

        });

    }


    updateScopeRole();


    setInterval(() => {

        currentRole++;

        if (currentRole >= scopeRoles.length) {
            currentRole = 0;
        }

        updateScopeRole();

    }, 1800);

}

/* = TYPOGRAPHY ANIMATION = */

const typefaces =
    document.querySelectorAll('.mc-typeface');

if (typefaces.length) {

    const typeObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add(
                        'is-visible'
                    );

                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.2
            }
        );


    typefaces.forEach((typeface) => {

        typeObserver.observe(
            typeface
        );

    });

}
/* = PRODUCT CAROUSEL = */

const carousel = document.querySelector('[data-carousel]');

if (carousel) {

    const slides = Array.from(
        carousel.querySelectorAll('.mc-slide')
    );

    const totalSlides = slides.length;

    let currentSlide = 0;
    let interval = null;


    /* - GET CIRCULAR POSITION - */

    function getRelativePosition(index) {

        let position = index - currentSlide;

        if (position > totalSlides / 2) {
            position -= totalSlides;
        }

        if (position < -totalSlides / 2) {
            position += totalSlides;
        }

        return position;
    }


    /* - UPDATE CAROUSEL - */

    function updateCarousel() {

        slides.forEach((slide, index) => {

            const position =
                getRelativePosition(index);


            slide.classList.remove(
                'is-center',
                'is-left',
                'is-right',
                'is-far-left',
                'is-far-right'
            );


            if (position === 0) {

                slide.classList.add(
                    'is-center'
                );

            }

            else if (position === -1) {

                slide.classList.add(
                    'is-left'
                );

            }

            else if (position === 1) {

                slide.classList.add(
                    'is-right'
                );

            }

            else if (position < -1) {

                slide.classList.add(
                    'is-far-left'
                );

            }

            else if (position > 1) {

                slide.classList.add(
                    'is-far-right'
                );

            }

        });

    }


    /* - NEXT SLIDE - */

    function nextSlide() {

        currentSlide++;

        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        }

        updateCarousel();

    }


    /* - START / STOP - */

    function startCarousel() {

        stopCarousel();

        interval = setInterval(
            nextSlide,
            1500
        );

    }


    function stopCarousel() {

        if (interval !== null) {

            clearInterval(interval);

            interval = null;

        }

    }


    /* - INITIAL STATE - */

    updateCarousel();


    /* - ONLY RUN WHEN CAROUSEL IS VISIBLE - */

    const carouselObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        startCarousel();

                    } else {

                        stopCarousel();

                    }

                });

            },
            {
                threshold: 0.2
            }
        );


    carouselObserver.observe(carousel);

}

/* == IMAGE FADE-IN == */

const images =
    document.querySelectorAll(
        '.may-chef img:not(.mc-slide img)'
    );


if (images.length) {

    const imageObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add(
                        'mc-image-loaded'
                    );

                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.05
            }
        );


    images.forEach((image) => {

        imageObserver.observe(
            image
        );

    });

}