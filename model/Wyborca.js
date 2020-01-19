const db = require('../db/mysql');
//licznik id
let nextId = 1;
//ekstensja klasy (wszystkie obiekty)
const wyborcaExtent = [];

class Wyborca {
    //parametr id jest na końcu, bo jest opcjonalny
    constructor(ING, godzinaZ, godzinaR, frekwencja, data, idwybory) {
        this.idwybory = idwybory;
        this.frekwencja = frekwencja;
        this.godzinaR = godzinaR;
        this.godzinaZ = godzinaZ;
        this.data = data;
        this.ING = ING;
    }

    static getTable(){
        return db.execute('select * from Wybory');
    }

    //dodawanie obiektu do bazy
    static add(wyborca) {
      return db.execute('SELECT MAX(`idwybory`) a FROM `portal`.`Wybory`').then(([max, metadata]) => {
            wyborca.idwybory = max[0].a + 1
            db.execute(
                'insert into `portal`.`Wybory` (idwybory, data, frekwencja, godzinaR, godzinaZ, ING) values (?, ?, ?, ?, ?, ?)',
                [wyborca.idwybory, wyborca.data, wyborca.frekwencja, wyborca.godzinaR, wyborca.godzinaZ, wyborca.ING]
            );
        });
    }

    static list() {
        return db.execute('select * from Wybory');
    }

    static getListFromId(id){
        return db.execute('select * from Wybory WHERE `idwybory` ='+ id );
    }

    static edit(wyborca) {
        return  db.execute('UPDATE `portal`.`Wybory` SET `data` = ? , `frekwencja` = ?, `godzinaR` = ?, `godzinaZ` =  ? ,`ING` =  ? WHERE `idwybory` = '+ wyborca.idwybory,
            [wyborca.data, wyborca.frekwencja, wyborca.godzinaR, wyborca.godzinaZ, wyborca.ING]
            );
    }

    static delete(id) {
        return db.execute('DELETE FROM `portal`.`Wybory` WHERE `idwybory`= ' + id);
    }

}

module.exports = Wyborca;