//licznik id
let nextId = 1;
//ekstensja klasy (wszystkie obiekty)
const wyborcaExtent = [];

class Wyborca {
    //parametr id jest na końcu, bo jest opcjonalny
    constructor(ING,godzinaZ,godzinaR,frekwencja, data, id) {
        this.id = id;
        this.frekwencja = frekwencja;
        this.godzinaR = godzinaR;
        this.godzinaZ = godzinaZ;
        this.ING = ING;
    }

    //dodawanie obiektu do bazy
    static add(wyborca) {
        wyborca.id = nextId++;
        wyborcaExtent.push(wyborca);
        return wyborca;
    }
    //pobranie listy obiektów
    //metoda nie powinna pobierać nadmiarowych danych
    //(np. przez złączenia JOIN w relacyjnej bazie danych)
    //które nie będą wyświetlane na liście
    static list() {
        return wyborcaExtent;
    }

    static edit(wyborca) {
        wyborcaExtent[wyborca.id] = null;
        wyborcaExtent.push(wyborca);
        return wyborca;
    }

    static initData() {
        //usuwamy zawartość tablicy
        wyborcaExtent.splice(0, wyborcaExtent.length);
        //resetujemy licznik id
        nextId = 1;
        Wyborca.add(new Wyborca('Jan', 'Kowalski'));
        Wyborca.add(new Wyborca('Anna', 'Wiśniewska'));
        Wyborca.add(new Wyborca('Andrzej', 'Nowak'));
    }

}

Wyborca.initData();

module.exports = Wyborca;