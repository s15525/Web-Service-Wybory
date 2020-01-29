const db = require('../db/mysql');

class Kandydat {
    //parametr id jest na końcu, bo jest opcjonalny
    constructor(miejsce,imie,nazwisko,nrLegitymacjiPoselskiej, idLista,idUgrupowanie,idKandydujeDo, idkandydat) {
        this.idkandydat = idkandydat;
        this.miejsce = miejsce;
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.nrLegitymacjiPoselskiej = nrLegitymacjiPoselskiej;
        this.idLista = idLista;
        this.idUgrupowanie= idUgrupowanie;
        this.idKandydujeDo = idKandydujeDo;
    }

    static findindex(){
        return db.execute('SELECT MAX(`idkandydat`) b FROM `portal`.`Kandydat`');
    }

    //dodawanie obiektu do bazy
    static add(kandydat) {
        return db.execute('SELECT MAX(`idkandydat`) a FROM `portal`.`Kandydat`').then(([max, metadata]) => {
            kandydat.idkandydat = max[0].a + 1;
            db.execute(
                'insert into `portal`.`Kandydat` (idkandydat, miejsce, imie, nazwisko, nrLegitymacjiPoselskiej, idLista, idUgrupowanie, idKandydujeDo) values (?, ?, ?, ?, ?, ?,?,?)',
                [kandydat.idkandydat,kandydat.miejsce,kandydat.imie,kandydat.nazwisko,kandydat.nrLegitymacjiPoselskiej,kandydat.idLista,kandydat.idUgrupowanie,kandydat.idKandydujeDo]
            );
        });
    }

    static list() {
        return db.execute('select * from Kandydat');
    }

    static edit(kandydat) {
        return  db.execute('UPDATE `portal`.`Kandydat` SET `miejsce` = ? , `imie` = ?, `nazwisko` = ?, `nrLegitymacjiPoselskiej` =  ? ,`idLista` =  ? ,`idUgrupowanie` =  ? ,`idKandydujeDo` =  ? WHERE `idkandydat` = '+ kandydat.idkandydat,
            [kandydat.miejsce,kandydat.imie,kandydat.nazwisko,kandydat.nrLegitymacjiPoselskiej,kandydat.idLista,kandydat.idUgrupowanie,kandydat.idKandydujeDo]
        );;
    }

    static getListFromId(id){
        return db.execute('select * from Kandydat WHERE `idkandydat` ='+ id );
    }

    static delete(id) {
        return db.execute('DELETE FROM `portal`.`Kandydat` WHERE `idkandydat` = ' + id);
    }


}

module.exports = Kandydat;