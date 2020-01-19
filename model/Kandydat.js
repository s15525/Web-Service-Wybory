//licznik id
let nextId = 1;
//ekstensja klasy (wszystkie obiekty)
const kandydatExtent = [];

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

    static getTable(){
        return kandydatExtent;
    }

    //dodawanie obiektu do bazy
    static add(kandydat) {
        kandydat.idkandydat = nextId++;
        kandydatExtent.push(kandydat);
        return kandydat;
    }
    //pobranie listy obiektów
    //metoda nie powinna pobierać nadmiarowych danych
    //(np. przez złączenia JOIN w relacyjnej bazie danych)
    //które nie będą wyświetlane na liście
    static list() {
        return kandydatExtent;
    }

    static edit(kandydat) {
        const index = wyborcaExtent.findIndex(x => x.idkandydat == kandydat.idwybory);
        kandydatExtent[index] = kandydat;
        return kandydat;
    }

    static delete(id) {
        const index = kandydatExtent.findIndex(x => x.idkandydat === id)
        return kandydatExtent.splice(index,1)
    }

    static initData() {
        //usuwamy zawartość tablicy
        kandydatExtent.splice(0,  kandydatExtent.length);
        //resetujemy licznik id
        nextId = 1;
        Kandydat.add(new Kandydat('10', 'Mikolaj',"Kowal","132313123","1","1","1"));
        Kandydat.add(new Kandydat('16', 'Maciek',"Kowal","132313123","3","3","3"));
        Kandydat.add(new Kandydat('20', 'Maciek',"Kowal","132313123","8","8","8"));
    }

}

Kandydat.initData();

module.exports = Kandydat;