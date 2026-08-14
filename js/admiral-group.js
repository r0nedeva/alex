/* = TYPOGRAPHY ANIMATION = */

const typographySection = document.querySelector(".type-specimen");

if (typographySection) {

    const title = typographySection.querySelector(".type-title");

    const alphabetRows = gsap.utils.toArray(
        typographySection.querySelectorAll(".alphabet-row")
    );

    const largeLetters = gsap.utils.toArray(
        typographySection.querySelectorAll(".type-large span")
    );

    const weights = gsap.utils.toArray(
        typographySection.querySelectorAll(".type-weight")
    );


    /* Initial state */

    gsap.set(title, {
        y: 40,
        opacity: 0
    });

    gsap.set(alphabetRows, {
        x: -30,
        opacity: 0
    });

    gsap.set(largeLetters, {
        y: 50,
        opacity: 0
    });

    gsap.set(weights, {
        x: 40,
        opacity: 0
    });


    /* = LOOPING ANIMATION = */

    const typographyTimeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.5
    });


    typographyTimeline

        /* Title */

        .to(title, {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power2.out"
        })

        /* Alphabet */

        .to(alphabetRows, {
            x: 0,
            opacity: 1,
            stagger: 0.18,
            duration: 0.9,
            ease: "power2.out"
        }, "-=0.35")

        /* Large ABC */

        .to(largeLetters, {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 1,
            ease: "power2.out"
        }, "-=0.45")

        /* Weights */

        .to(weights, {
            x: 0,
            opacity: 1,
            stagger: 0.14,
            duration: 0.9,
            ease: "power2.out"
        }, "-=0.75")

        /* Hold */

        .to({}, {
            duration: 2.5
        })

        /* Fade out */

        .to(
            [
                title,
                ...alphabetRows,
                ...largeLetters,
                ...weights
            ],
            {
                opacity: 0,
                y: -25,
                duration: 1.1,
                stagger: 0.05,
                ease: "power2.inOut"
            }
        );

}