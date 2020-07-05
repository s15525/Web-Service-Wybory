const db = require('../db/mysql');

class Candidate {
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
        return db.execute('SELECT MAX(`idkandydat`) b FROM `portal`.`Candidate`');
    }

    //dodawanie obiektu do bazy
    static add(kandydat) {
        return db.execute('SELECT MAX(`idkandydat`) a FROM `portal`.`Candidate`').then(([max, metadata]) => {
            kandydat.idkandydat = max[0].a + 1;
            db.execute(
                'insert into `portal`.`Candidate` (idkandydat, miejsce, imie, nazwisko, nrLegitymacjiPoselskiej, idLista, idUgrupowanie, idKandydujeDo) values (?, ?, ?, ?, ?, ?,?,?)',
                [kandydat.idkandydat,kandydat.miejsce,kandydat.imie,kandydat.nazwisko,kandydat.nrLegitymacjiPoselskiej,kandydat.idLista,kandydat.idUgrupowanie,kandydat.idKandydujeDo]
            );
        });
    }

    static list() {
        return db.execute('select * from Candidate');
    }

    static edit(kandydat) {
        return  db.execute('UPDATE `portal`.`Candidate` SET `miejsce` = ? , `imie` = ?, `nazwisko` = ?, `nrLegitymacjiPoselskiej` =  ? ,`idLista` =  ? ,`idUgrupowanie` =  ? ,`idKandydujeDo` =  ? WHERE `idkandydat` = '+ kandydat.idkandydat,
            [kandydat.miejsce,kandydat.imie,kandydat.nazwisko,kandydat.nrLegitymacjiPoselskiej,kandydat.idLista,kandydat.idUgrupowanie,kandydat.idKandydujeDo]
        );;
    }

    static getConnectedWybory(id){
        return db.execute('SELECT * FROM wybory right join KandydujeW ON KandydujeW.idwybory= Wybory.idwybory where KandydujeW.idkandydat =' + id);
    }

    static getListFromId(id){
        return db.execute('select * from Candidate WHERE `idkandydat` ='+ id );
    }

    static delete(id) {
        return db.execute('DELETE FROM `portal`.`Candidate` WHERE `idkandydat` = ' + id);
    }


}

module.exports = Candidate;