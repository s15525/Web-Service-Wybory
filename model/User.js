const db = require('../db/mysql');

class User {
    //parametr id jest na końcu, bo jest opcjonalny
    constructor(email, login, haslo, imie, nazwisko, pesel ,dataUrodzenia ,nrDowodu,idUser) {
        this.idUser = idUser;
        this.email = email;
        this.login = login;
        this.haslo = haslo;
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.pesel = pesel;
        this.dataUrodzenia = dataUrodzenia;
        this.nrDowodu = nrDowodu;
    }

    static list(){
        return db.execute('SELECT * FROM User');
    }

    static addUser(user) {
        return db.execute('SELECT MAX(`idUser`) a FROM `portal`.`User`').then(([max, metadata]) => {
            user.idUser = max[0].a + 1;
            db.execute(
                'insert into `portal`.`User` (idUser,imie, nazwisko, pesel, dataUrodzenia, nrDowodu, idUzytkownik) values (?, ?, ?, ?, ?, ?,?)',
                [user.idUser,user.imie,user.nazwisko,user.pesel,user.dataUrodzenia,user.nrDowodu,0]
            );
        });
    }

    static edit(user) {
        return  db.execute('UPDATE `portal`.`User` SET  `imie` = ?, `nazwisko` = ?, `pesel` =  ? ,`dataUrodzenia` =  ? ,`nrDowodu` =  ? ,`idUzytkownik` =  ? WHERE `idUser` = '+ user.idUser,
            [user.imie,user.nazwisko,user.pesel,user.dataUrodzenia,user.nrDowodu,0]
        );;
    }

    static getListFromId(id){
        return db.execute('select * from User WHERE `idUser` ='+ id );
    }

    static delete(id) {
        return db.execute('DELETE FROM `portal`.`User` WHERE `idUser` = ' + id);
    }
}

module.exports = User;