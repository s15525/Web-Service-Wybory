//licznik id
let nextId = 1;
//ekstensja klasy (wszystkie obiekty)
const userExtent = [];

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
        user.idUser = nextId++;
        userExtent.push(user);
        console.log(userExtent);
        return user;
    }
}

module.exports = User;