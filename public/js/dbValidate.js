document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('Wybory');
    const errorsistnieje = document.getElementById('errors_istnieje');

    function validateForm(e) {
        let messages = [];
        let valid = true;



        if (messages.length > 0) {
            valid = false;
            e.preventDefault();
        }

        return valid;
    }

    form.addEventListener('submit', validateForm);
});
