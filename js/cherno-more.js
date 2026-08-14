/*  CHERNO MORE — SCOPE ROTATION  */

const scopeItems =
    document.querySelectorAll('.cherno-scope-item');

if (scopeItems.length) {

    let currentScope = 0;


    function updateScope() {

        scopeItems.forEach((item, index) => {

            item.classList.toggle(
                'is-active',
                index === currentScope
            );

        });

    }


    updateScope();


    setInterval(() => {

        currentScope++;

        if (currentScope >= scopeItems.length) {

            currentScope = 0;

        }

        updateScope();

    }, 1800);

}