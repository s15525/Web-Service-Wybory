const Kandydat = require('../model/Kandydat');
const Wyborca = require('../model/Wyborca');
const User = require('../model/User');

class DbValidate {
    static async checkKandydatExist(kandydatCome) {
        var result;
        await Kandydat.list().then(([list, metadata]) => {
                list.forEach(i => {
                    if (String(kandydatCome.miejsce) == String(i.miejsce) && String(kandydatCome.imie) == String(i.imie) && String(kandydatCome.nazwisko) == String(i.nazwisko) && String(kandydatCome.nrLegitymacjiPoselskiej) == String(i.nrLegitymacjiPoselskiej)) {
                        result = true;
                    }
                });
            }
        );
        return result;
    }


    static async checkWyborcaExist(wyborcaCome) {
        var result;
        await Wyborca.list().then(([list, metadata]) => {
                list.forEach(i => {
                    if (String(wyborcaCome.frekwencja) == String(i.frekwencja) && String(wyborcaCome.godzinaR) == String(i.godzinaR) && String(wyborcaCome.godzinaZ) == String(i.godzinaZ) && String(wyborcaCome.ING) == String(i.ING)) {
                        list = true;
                    }
                });
            }
        );
        return result;
    }

    static async checkUserExist(userCome) {
        var result;
        //console.log("tutaj" + userCome.imie + " , " +userCome.nazwisko + " , " +userCome.nrDowodu + " , " + userCome.pesel)
        await User.list().then(([list, metadata]) => {
                list.forEach(i => {
                    //console.log( i.imie + " , " +i.nazwisko + " , " +i.nrDowodu + " , " + i.pesel)
                    if (String(userCome.imie) == String(i.imie) && String(userCome.nazwisko) == String(i.nazwisko) && String(userCome.nrDowodu) == String(i.nrDowodu) && String(userCome.pesel) == String(i.pesel)) {
                        result = true;
                    }
                });
            }
        );
        return result;
    }
}

    module.exports = DbValidate;