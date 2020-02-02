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
           // console.log(wyborcaCome.frekwencja +" , "+ wyborcaCome.godzinaR+" , "+ wyborcaCome.godzinaZ+" , "+ wyborcaCome.ING+" , "+ wyborcaCome.data)
                list.forEach(i => {
                    if(parseInt(i.godzinaR.split(':')[0])< 10 ){
                        i.godzinaR = 0 + i.godzinaR
                    };
                    if(parseInt(i.godzinaZ.split(':')[0])< 10 ){
                        i.godzinaZ= 0 + i.godzinaZ
                    };
                   // console.log(i.frekwencja +" , "+ i.godzinaR+" , "+ i.godzinaZ+" , "+ i.ING+" , "+ i.data)
                    if (String(wyborcaCome.frekwencja) == String(i.frekwencja) && String(wyborcaCome.godzinaR) == String(i.godzinaR) && String(wyborcaCome.godzinaZ) == String(i.godzinaZ) && String(wyborcaCome.ING) == String(i.ING) && wyborcaCome.data == i.data ) {
                        result = true;
                    }
                });
            }
        );
        return result;
    }

    static async checkUserExist(userCome) {
        var result;
        await User.list().then(([list, metadata]) => {
                list.forEach(i => {
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