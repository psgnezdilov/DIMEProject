(() => {
    'use strict';

    const form = document.getElementById('myForm');
    const rememberMeCheckbox = document.getElementById('rememberMeCheck');
    const toastLiveExample = document.getElementById('Toast');
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);

    if (form) {
        form.addEventListener('submit', event => {
            event.preventDefault();
            event.stopPropagation();

            let checkboxWasRequired = false;
            if (rememberMeCheckbox && rememberMeCheckbox.required) {
                checkboxWasRequired = true;
                rememberMeCheckbox.required = false;
            }

            const isFormValid = form.checkValidity();

            if (rememberMeCheckbox && checkboxWasRequired) {
                rememberMeCheckbox.required = true;
            }

            if (!isFormValid) {
                form.classList.add('was-validated');
            } else {
                form.reset();
                form.classList.remove('was-validated');
                toastBootstrap.show();
            }
        }, false);
    }
})();
