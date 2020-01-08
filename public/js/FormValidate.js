document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const fieldemail = document.getElementById('email');
    const errorsemail = document.getElementById('errors_email');
    const fieldlogin = document.getElementById('login');
    const errorslogin = document.getElementById('errors_login');
    const fieldhaslo = document.getElementById('haslo');
    const errorshaslo = document.getElementById('errors_haslo');
    const fieldimie = document.getElementById('imie');
    const errorsimie = document.getElementById('errors_imie');
    const fieldnazwisko = document.getElementById('nazwisko');
    const errorsnazwisko = document.getElementById('errors_nazwisko');
    const fieldpesel = document.getElementById('pesel');
    const errorspesel = document.getElementById('errors_pesel');
    const fielddataurodzenia = document.getElementById('dataurodzenia');
    const errorsdataurodzenia = document.getElementById('errors_dataurodzenia');
    const fieldnrdowodu = document.getElementById('nrdowodu');
    const errorsnrdowodu = document.getElementById('errors_nrdowodu');
    const errorsSummary = document.getElementById('errors_summary');
    const errorsInfo = document.getElementById('errors_info');
    var errorMessages = {
        email: "Pole Email jest wymagane!",
        email2: "Adres powinien zawierac @ i poprawną domenę! ",
        login: "Pole Login jest wymagane! ",
        imie: "Pole imie jest wymagane! ",
        nazwisko: "Pole nazwisko jest wymagane! ",
        imie2: "Imie nie moze zawierac liczb! ",
        haslo: "Pole musi zawierac liczby! ",
        haslo2: "Pole musi zawierac litery! ",
        haslo4: "Pole musi zawierac wiecej niz 8 znakow! ",
        pesel: "Podaj porawny pesel zawierający 11 cyfr -RRMMDDPPPPK! ",
        data: "Podaj date w poprawnym formacie zawierającą 8 cyfr! ",
        data2: "Musisz byc pelnoletni ! ",
        nrDowodu: "Podaj poprawny nr dowodu zawierający litery i cyfry"
    };
    var emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var numbers = /[0-9]/;
    var letters = /[a-zA-Z]/;
    var pesel = /[0-9]{4}[0-3]{1}[0-9]{1}[0-9]{5}/;
    var date = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    var nrDowodu = /[A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9][0-9][0-9]/;
    var dateyear = new Date().getFullYear();
    var spacja = /\s/

    function validateForm(e) {
        let messages = [];
        let valid = true;
        if (fieldemail.value.trim().length === 0) {
            fieldemail.style.border = "2px solid red";
            messages.push(errorMessages['email']);
            errorsemail.innerHTML = errorMessages['email'];
        } else if (!emailregex.test(fieldemail.value)) {
            fieldemail.style.border = "2px solid red";
            messages.push(errorMessages['email2']);
            errorsemail.innerHTML = errorMessages['email2'];
        } else {
            fieldemail.style.border = "";
            errorsemail.innerHTML = "";
            fieldemail.className = "";
        }

        if (fieldlogin.value.trim().length === 0) {
            fieldlogin.style.border = "2px solid red";
            messages.push(errorMessages['login']);
            errorslogin.innerHTML = errorMessages['login'];
        } else {
            fieldlogin.style.border = "";
            errorslogin.innerHTML = "";
            fieldlogin.className = "";
        }

        if (fieldimie.value.trim().length === 0) {
            fieldimie.style.border = "2px solid red";
            messages.push(errorMessages['imie']);
            errorsimie.innerHTML = errorMessages['imie'];
        } else if (numbers.test(fieldimie.value)) {
            fieldimie.style.border = "2px solid red";
            messages.push(errorMessages['imie2']);
            errorsimie.innerHTML = errorMessages['imie2'];
        } else {
            fieldimie.style.border = "";
            errorsimie.innerHTML = "";
            fieldimie.className = "";
        }

        if (!letters.test(fieldhaslo.value)) {
            fieldhaslo.style.border = "2px solid red";
            messages.push(errorMessages['haslo2']);
            errorshaslo.innerHTML = errorMessages['haslo2'];
        } else if (fieldhaslo.value.length <= 8) {
            fieldhaslo.style.border = "2px solid red";
            messages.push(errorMessages['haslo4']);
            errorshaslo.innerHTML = errorMessages['haslo4'];
        } else if (!numbers.test(fieldhaslo.value)) {
            fieldhaslo.style.border = "2px solid red";
            messages.push(errorMessages['haslo']);
            errorshaslo.innerHTML = errorMessages['haslo'];
        } else {
            fieldhaslo.style.border = "";
            errorshaslo.innerHTML = "";
            fieldhaslo.className = "";
        }

        if (fieldnazwisko.value.trim().length === 0) {
            fieldnazwisko.style.border = "2px solid red";
            messages.push(errorMessages['nazwisko']);
            errorsnazwisko.innerHTML = errorMessages['nazwisko'];
        } else {
            fieldnazwisko.style.border = "";
            errorsnazwisko.innerHTML = "";
            fieldnazwisko.className = "";
        }

        if (!pesel.test(fieldpesel.value)) {
            fieldpesel.style.border = "2px solid red";
            messages.push(errorMessages['pesel']);
            errorspesel.innerHTML = errorMessages['pesel'];
        } else {
            fieldpesel.style.border = "";
            errorspesel.innerHTML = "";
            fieldpesel.className = "";
        }

        var inputdate = fielddataurodzenia.value.split("/");

        if (!date.test(fielddataurodzenia.value)) {
            fielddataurodzenia.style.border = "2px solid red";
            messages.push(errorMessages['data']);
            errorsdataurodzenia.innerHTML = errorMessages['data'];
        } else if ((dateyear - inputdate[2]) <= 18) {
            fielddataurodzenia.style.border = "2px solid red";
            messages.push(errorMessages['data2']);
            errorsdataurodzenia.innerHTML = errorMessages['data2'];
        } else {
            fielddataurodzenia.style.border = "";
            errorsdataurodzenia.innerHTML = "";
            fielddataurodzenia.className = "";
        }

        if (!nrDowodu.test(fieldnrdowodu.value)) {
            fieldnrdowodu.style.border = "2px solid red";
            messages.push(errorMessages['nrDowodu']);
            errorsnrdowodu.innerHTML = errorMessages['nrDowodu'];
        } else {
            fieldnrdowodu.style.border = "";
            errorsnrdowodu.innerHTML = "";
            fieldnrdowodu.className = "";
        }

        if (messages.length > 0) {
            valid = false;
            errorsSummary.innerHTML =messages.join("<br>");
            errorsInfo.innerHTML = "Formularz zawiera błędy"
            fieldemail.className = "errors-input";
            fieldlogin.className = "errors-input";
            fieldimie.className = "errors-input";
            fieldhaslo.className = "errors-input";
            fieldnazwisko.className = "errors-input";
            fieldpesel.className = "errors-input";
            fielddataurodzenia.className = "errors-input";
            fieldnrdowodu.className = "errors-input";
            
            e.preventDefault();
        } else {
            errorsSummary.innerHTML = "";
            errorsInfo.innerHTML = "";
        }

        return valid;
    }

    form.addEventListener('submit', validateForm);
});
