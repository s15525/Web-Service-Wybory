const wyborca = require('../model/Wyborca');
const kandydat = require('../model/Kandydat');

const wyborcaTable = wyborca.getTable();
const kandydatTable = kandydat.getTable();

//reczne laczenieencji

const KandydatWybory = [
    {a: 1, b: 2},
    {a: 2, b: 1},
    {a: 2, b: 2},
    {a: 3, b: 1}];

const KandydatWyboryObject = [];

class Dbservice {

    static KandydatWyborca() {
        for (var i = 0; i <= KandydatWybory.length-1; i++) {
            KandydatWyboryObject.push([kandydatTable.find(x => x.id === KandydatWybory[i].a),wyborcaTable.find(x => x.id === KandydatWybory[i].b)]);
        }
    }
    static list(){
        return KandydatWyboryObject;
    }

}

Dbservice.KandydatWyborca();

module.exports = Dbservice;