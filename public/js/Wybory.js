function ajaxCall(data) { //data as js object
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "/checkWybory");
        xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send(JSON.stringify(data));
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('Wybory');
    const fielddata = document.getElementById('data');
    const errorsdata = document.getElementById('errors_data');
    const fieldgodzinaR = document.getElementById('godzinaR');
    const errorsgodzinaR = document.getElementById('errors_godzinaR');
    const fieldgodzinaZ = document.getElementById('godzinaZ');
    const errorsgodzinaZ = document.getElementById('errors_godzinaZ');
    const fieldING = document.getElementById('ING');
    const fieldFrekwencja = document.getElementById('frekwencja');
    const errorsSummary = document.getElementById('errors_summary');
    const errorsistnieje = document.getElementById('errors_istnieje');
    var errorMessages = {
        godzinaR: "Podaj godzine R w poprawnym formacie ! 00:00:00",
        godzinaZ: "Podaj godzine Z w poprawnym formacie ! 00:00:00",
        data: "Podaj date w poprawnym formacie zawierającą 8 cyfr! 0000",
        istnieje: "Podany rekord juz istnieje w bazie !!!"
    };
    var date = /^\d{4}$/;
    var timeFormat = /^([0-9]{2})\:([0-9]{2})\:([0-9]{2})$/;

    async function validateForm(e) {
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
        let userExists = false;
        await ajaxCall({
            date: fielddata,
            godzinaR: fieldgodzinaR,
            godzinaZ: fieldgodzinaZ,
            ING: fieldING,
            frekwencja: fieldFrekwencja
        }).then(data => {
            if (data.status == "fail" && data.error == "user_exists") userExists = true;
        });

        if (userExists== true){
            errorsistnieje.innerHTML = errorMessages['istnieje'];
        }else{
            errorsistnieje.innerHTML = "";
        }

        if (messages.length > 0) {
            valid = false;
            fielddata.className = "errors-input";
            fieldgodzinaZ.className = "errors-input";
            fieldgodzinaR.className = "errors-input";
            e.preventDefault();
        }
        /*
         * example of ajaxCall use:
        let userExists = false;
        await ajaxCall({ imie: "ABC", nazwisko: "DEF" }).then(data => {
            if(data.status == "fail" && data.error == "user_exists") userExists = true;
        });
        
        if(userExists /* || other tests //) valid = false;
         */

        return valid;
    }

    form.addEventListener('submit', validateForm);
})
;
