/* = Page entrance animation = */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const portfolioPage =
            document.querySelector(
                ".work-page, .photography-page"
            );


        if (!portfolioPage) {
            return;
        }


        requestAnimationFrame(
            () => {

                portfolioPage.classList.add(
                    "is-loaded"
                );

            }
        );

    }
);