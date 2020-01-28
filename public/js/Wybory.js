document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('Wybory');
    const fielddata = document.getElementById('data');
    const errorsdata = document.getElementById('errors_data');
    const fieldgodzinaR = document.getElementById('godzinaR');
    const errorsgodzinaR = document.getElementById('errors_godzinaR');
    const fieldgodzinaZ = document.getElementById('godzinaZ');
    const errorsgodzinaZ = document.getElementById('errors_godzinaZ');
    const errorsSummary = document.getElementById('errors_summary');
    const errorsInfo = document.getElementById('errors_info');
    var errorMessages = {
        godzinaR: "Podaj godzine R w poprawnym formacie ! 00:00:00",
        godzinaZ: "Podaj godzine Z w poprawnym formacie ! 00:00:00",
        data: "Podaj date w poprawnym formacie zawierającą 8 cyfr! 0000-00-00 ",
    };
    var date = /^\d{4}-\d{2}-\d{2}$/;
    var timeFormat = /^([0-9]{1})\:([0-9]{2})\:([0-9]{2})$/;

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

        if (!timeFormat.test(fieldgodzinaZ.value)) {
            fieldgodzinaZ.style.border = "2px solid red";
            messages.push(errorMessages['godzinaZ']);
            errorsgodzinaZ.innerHTML = errorMessages['godzinaZ'];
        } else {
            fieldgodzinaZ.style.border = "";
            errorsgodzinaZ.innerHTML = "";
            fieldgodzinaZ.className = "";
        }

        if (!timeFormat.test(fieldgodzinaR.value)) {
            fieldgodzinaR.style.border = "2px solid red";
            messages.push(errorMessages['godzinaR']);
            errorsgodzinaR.innerHTML = errorMessages['godzinaR'];
        } else {
            fieldgodzinaR.style.border = "";
            errorsgodzinaR.innerHTML = "";
            fieldgodzinaR.className = "";
        }



        if (messages.length > 0) {
            valid = false;
            fielddata.className = "errors-input";
            fieldgodzinaZ.className = "errors-input";
            fieldgodzinaR.className = "errors-input";

            e.preventDefault();
        } else {
            errorsSummary.innerHTML = "";
            errorsInfo.innerHTML = "";
        }

        return valid;
    }

    form.addEventListener('submit', validateForm);
});
