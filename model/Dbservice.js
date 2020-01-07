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
    static edit(wybory, kandydat){
        for (var i = 0 ; i <= KandydatWyboryObject.length-1; i++){
            if(KandydatWyboryObject[i][0].id == kandydat.id){
                KandydatWyboryObject[i][0] = kandydat;
            }
            if(KandydatWyboryObject[i][1].id == wybory.id){
                KandydatWyboryObject[i][1] = wybory;
            }
        }
    }
}

Dbservice.KandydatWyborca();

module.exports = Dbservice;