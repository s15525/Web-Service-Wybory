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
        this.data = data;
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
        wyborcaExtent[wyborca.id-1] = wyborca;
        return wyborca;
    }

    static delete(id) {
        const index = wyborcaExtent.findIndex(x => x.id === id)
        return wyborcaExtent.splice(index,1)
    }

    static initData() {
        //usuwamy zawartość tablicy
        wyborcaExtent.splice(0, wyborcaExtent.length);
        //resetujemy licznik id
        nextId = 1;
        Wyborca.add(new Wyborca('10', '20:00',"8:00","71","13/08/2019"));
        Wyborca.add(new Wyborca('16', '20:00',"8:00","81","13/08/2010"));
        Wyborca.add(new Wyborca('20', '20:00',"8:00","91","13/08/2008"));
    }

}

Wyborca.initData();

module.exports = Wyborca;