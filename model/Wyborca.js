const db = require('../db/mysql');
//licznik id
let nextId = 1;
//ekstensja klasy (wszystkie obiekty)
 const wyborcaExtent = [];

class Wyborca {
    //parametr id jest na końcu, bo jest opcjonalny
    constructor(ING,godzinaZ,godzinaR,frekwencja, data, idwybory) {
        this.idwybory = idwybory;
        this.frekwencja = frekwencja;
        this.godzinaR = godzinaR;
        this.godzinaZ = godzinaZ;
        this.data = data;
        this.ING = ING;
    }

    // static getTable(){
    //     return db.execute('select * from Wyborca');
    // }

    //dodawanie obiektu do bazy
    static add(wyborca) {
         wyborca.idwybory = nextId++;
        return db.execute(
            'insert into users (idwybory, data, frekwencja, godzinaR, godzinaZ, ING) values (?, ?, ?, ?, ?, ?)',
            [wyborca.id, wyborca.data , wyborca.frekwencja , wyborca.godzinaR , wyborca.godzinaZ , wyborca.ING]
        );
    }
    //pobranie listy obiektów
    //metoda nie powinna pobierać nadmiarowych danych
    //(np. przez złączenia JOIN w relacyjnej bazie danych)
    //które nie będą wyświetlane na liście
    static list() {
        return db.execute('select * from Wybory');
    }

    static edit(wyborca) {
        const index = wyborcaExtent.findIndex(x => x.idwybory == wyborca.idwybory);
        wyborcaExtent[index] = wyborca;
        return wyborca;
    }

    static delete(id) {
        const index = wyborcaExtent.findIndex(x => x.idwybory === idwybory)
        return wyborcaExtent.splice(index,1)
    }

}

module.exports = Wyborca;