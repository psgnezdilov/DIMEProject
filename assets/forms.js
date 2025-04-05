(() => {
    'use strict';

    const form = document.getElementById('myForm');
    const toastLiveExample = document.getElementById('Toast');
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);

    if (form) {
        form.addEventListener('submit', event => {
            event.preventDefault();
            event.stopPropagation();

            if (!form.checkValidity()) {
            } else {
                form.reset();
                form.classList.remove('was-validated');
                toastBootstrap.show();
            }
            form.classList.add('was-validated');
        }, false);
    }
})();