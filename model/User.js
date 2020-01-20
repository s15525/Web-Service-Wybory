//licznik id
let nextId = 1;
//ekstensja klasy (wszystkie obiekty)


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
    static addUser(user) {
        return db.execute('SELECT MAX(`idUser`) a FROM `portal`.`User`').then(([max, metadata]) => {
            user.idUser = max[0].a + 1;
            db.execute(
                'insert into `portal`.`User` (idUser,imie, nazwisko, pesel, dataUrodzenia, nrDowodu, idUzytkownik) values (?, ?, ?, ?, ?, ?,?)',
                [user.idUser,user.imie,user.nazwisko,user.pesel,user.dataUrodzenia,user.nrDowodu]
            );
        });
    }
}

module.exports = User;