const Kandydat = require('../model/Kandydat');
const Wyborca = require('../model/Wyborca');
const User = require('../model/User');

class DbValidate {
    static checkKandydatExist(kandydatCome) {
        var kandydatList = Kandydat.list();
        for (var i = 0; i <= kandydatList; i++) {
            if (kandydatCome.miejsce == kandydatList[i].miejsce && kandydatCome.imie == kandydatList[i].imie && kandydatCome.nazwisko == kandydatList[i].nazwisko && kandydatCome.nrLegitymacjiPoselskiej == kandydatList[i].nrLegitymacjiPoselskiej) {
                return true;
            }
            return false;
        }
    }

    static checkWyborcaExist(wyborcaCome) {
        var wyborcaList = Wyborca.list();
        for (var i = 0; i <= wyborcaList; i++) {
            if (wyborcaCome.frekwencja == wyborcaList[i].frekwencja && wyborcaCome.godzinaR == wyborcaList[i].godzinaR && wyborcaCome.godzinaZ == wyborcaList[i].godzinaZ && wyborcaCome.ING == wyborcaList[i].ING) {
                return true;
            }
            return false;

        }
    }

    static checkUserExist(userCome) {
        var userList = User.list();
        for (var i = 0; i <= userList; i++) {
            if (userCome.data == userList[i].imie && userCome.nazwisko == userList[i].nazwisko  && userCome.nrDowodu == userList[i].nrDowodu && userCome.pesel == userList[i].pesel) {
                return true;
            }
            return false;
        }
    }
}

module.exports = DbValidate;