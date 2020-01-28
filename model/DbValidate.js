const Kandydat = require('../model/Kandydat');
const Wyborca = require('../model/Wyborca');
const User = require('../model/User');

class DbValidate {
    static async checkKandydatExist(kandydatCome) {
        var result;
        await Wyborca.list().then(([result, metadata]) => {
                result.forEach(i => {
                    if (kandydatCome.miejsce == result.miejsce && kandydatCome.imie == result.imie && kandydatCome.nazwisko == result.nazwisko && kandydatCome.nrLegitymacjiPoselskiej == result.nrLegitymacjiPoselskiej) {
                        result = true;
                    }
                });
            }
        );
        return result;
    }


    static async checkWyborcaExist(wyborcaCome) {
        var result;
        await Wyborca.list().then(([result, metadata]) => {
                result.forEach(i => {
                    if (String(wyborcaCome.frekwencja) == String(i.frekwencja) && String(wyborcaCome.godzinaR) == String(i.godzinaR) && String(wyborcaCome.godzinaZ) == String(i.godzinaZ) && String(wyborcaCome.ING) == String(i.ING)) {
                        result = true;
                    }
                });
            }
        );
        return result;
    }

    static async checkUserExist(userCome) {
        await User.list().then(([result, metadata]) => {
                result.forEach(i => {
                    if (userCome.data == result.imie && userCome.nazwisko == result.nazwisko && userCome.nrDowodu == result.nrDowodu && userCome.pesel == result.pesel) {
                        return true;
                    }
                });
            }
        );
        return result;
    }
}

    module.exports = DbValidate;