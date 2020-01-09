document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('Wybory');
    const fielddata = document.getElementById('data');
    const errorsdata = document.getElementById('errors_data');
    const errorsSummary = document.getElementById('errors_summary');
    const errorsInfo = document.getElementById('errors_info');
    var errorMessages = {
        wymagane: "To pole jest wymagane! ",
        pesel: "Podaj porawny pesel zawierający 11 cyfr -RRMMDDPPPPK! ",
        data: "Podaj date w poprawnym formacie zawierającą 8 cyfr! ",
        litery: "Pole nie moze zawierac liter! ",
        cyfry: "Pole nie moze zwierac cyfr! "
    };
    var numbers = /[0-9]/;
    var letters = /[a-zA-Z]/;
    var date = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    var spacja = /\s/

    function validateForm(e) {
        let messages = [];
        let valid = true;

        if (!date.test(fielddata.value)) {
            fielddata.style.border = "2px solid red";
            messages.push(errorMessages['data']);
            errorsdata.innerHTML = errorMessages['data'];
        } else {
            fielddata.style.border = "";
            errorsdata.innerHTML = "";
            fielddata.className = "";
        }

        if (messages.length > 0) {
            valid = false;
            fielddata.className = "errors-input";

            e.preventDefault();
        } else {
            errorsSummary.innerHTML = "";
            errorsInfo.innerHTML = "";
        }

        return valid;
    }

    form.addEventListener('submit', validateForm);
});
