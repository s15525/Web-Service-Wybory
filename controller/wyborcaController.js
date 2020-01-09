const express = require('express');
const router = express.Router();

const Wyborca = require('../model/Wyborca');
const User = require('../model/User');
const Kandydat = require('../model/Kandydat');
const Dbservice = require('../model/Dbservice');

router.get("/", (req, res, next) => {
    res.render('Home', {});
});

router.get("/Zarejestruj", (req, res, next) => {
    res.render('Zarejestruj', {});
});

router.get("/PanelAdministratoraWieledoWiele", (req, res, next) => {
    const wyborcaKandydat = Dbservice.list();
    res.render('PanelAdministratoraWieledoWiele', {
        wyborcaKandydat: wyborcaKandydat,
        page_last: req.query.page_last,
        page_next: req.query.page_next
    });
});

router.get("/PanelAdministratora", (req, res, next) => {
    const wyborcaList = Wyborca.list();
    res.render('PanelAdministratora', {
        wyborcaList: wyborcaList,
        page_last: req.query.page_last,
        page_next: req.query.page_next
    });
});

router.get("/NowyRekordWybory", (req, res, next) => {
    res.render('NowyRekordWybory', {kandydatId: req.query.kandydatId});
});

router.get("/NowyRekordKandydat", (req, res, next) => {
    res.render('NowyRekordKandydat', {wyboryId: req.query.wyboryId});
});

router.get("/Edycja", (req, res, next) => {
    const wyborcaList = Wyborca.list();
    res.render('Edycja', {wyborcaId: req.query.wyborca_id, wyborcaList: wyborcaList});
});

router.get("/Usun", (req, res, next) => {
    Wyborca.delete(req.query.wyborca_id);
    res.redirect("/PanelAdministratora?page_last=0&page_next=10");
});

router.get("/UsunWieleDoWiele", (req, res, next) => {
    Dbservice.delete(req.query.wyborca_id, req.query.kandydat_id);
    res.redirect("/PanelAdministratoraWieledoWiele?page_last=0&page_next=10");
});

router.get("/Szczegoly", (req, res, next) => {
    const wyborcaList = Wyborca.list();
    res.render('Szczegoly', {wyborcaId: req.query.wyborca_id, wyborcaList: wyborcaList})
});

router.get("/SzczegolyWieleDoWiele", (req, res, next) => {
    const kandydatList = Kandydat.getTable();
    const wyborcaList = Wyborca.getTable();
    res.render('SzczegolyWieleDoWiele', {
        kandydatId: req.query.kandydat_id,
        wyborcaId: req.query.wyborca_id,
        kandydatList: kandydatList,
        wyborcaList: wyborcaList
    })
});
router.get("/EdycjaWieleDoWiele", (req, res, next) => {
    const kandydatList = Kandydat.getTable();
    const wyborcaList = Wyborca.getTable();
    res.render('EdycjaWieleDoWiele', {
        kandydatId: req.query.kandydat_id,
        wyborcaId: req.query.wyborca_id,
        kandydatList: kandydatList,
        wyborcaList: wyborcaList
    })
});
router.get("/NowyRekordWieledoWiele", (req, res, next) => {
    const kandydatList = Kandydat.getTable();
    const wyborcaList = Wyborca.getTable();
    res.render('NowyRekordWieleDoWiele', {
        kandydatList: kandydatList,
        wyborcaList: wyborcaList
    });
});

router.post("/addWybory", (req, res, next) => {
    const newWyborca = new Wyborca(req.body.ING, req.body.godzinaZ, req.body.godzinaR, req.body.frekwencja, req.body.data);
    console.log(req.body.kandydatId);
    if( req.body.kandydatId == "") {
        Wyborca.add(newWyborca);
        res.redirect("/PanelAdministratora?page_last=0&page_next=10");
    }else{
        Wyborca.add(newWyborca);
        Dbservice.addWybory(req.body.kandydatId,newWyborca);
        res.redirect("/PanelAdministratoraWieleDoWiele?page_last=0&page_next=10");
    }
});

router.post("/addKandydat", (req, res, next) => {
    const newKandydat = new Kandydat(req.body.miejsce, req.body.imie, req.body.nazwisko, req.body.nrLegitymacjiPoselskiej, req.body.idLista, req.body.idUgrupowanie, req.body.idKandydujeDo);
    if(req.body.wyboryId === undefined) {
        Kandydat.add(newKandydat);
    res.redirect("/PanelAdministratora?page_last=0&page_next=10");
    }else{
        Kandydat.add(newKandydat);
        Dbservice.addKandydat(req.body.wyboryId,newKandydat);
     res.redirect("/PanelAdministratoraWieleDoWiele?page_last=0&page_next=10");
    }
});

router.post("/addMoreToMore", (req, res, next) => {
    const newWyborca = new Wyborca(req.body.ING, req.body.godzinaZ, req.body.godzinaR, req.body.frekwencja, req.body.data);
    const newKandydat = new Kandydat(req.body.miejsce, req.body.imie, req.body.nazwisko, req.body.nrLegitymacjiPoselskiej, req.body.idLista, req.body.idUgrupowanie, req.body.idKandydujeDo);
    Kandydat.add(newKandydat);
    Wyborca.add(newWyborca);
    Dbservice.add(newWyborca,newKandydat);
    res.redirect("/PanelAdministratoraWieleDoWiele?page_last=0&page_next=10");
});

router.post("/edit", (req, res, next) => {
    const newWyborca = new Wyborca(req.body.ING, req.body.godzinaZ, req.body.godzinaR, req.body.frekwencja, req.body.data, req.body.idwybory);
    Wyborca.edit(newWyborca);
    res.redirect("/PanelAdministratora?page_last=0&page_next=10");
});

router.post("/editMoreToMore", (req, res, next) => {
    const newWyborca = new Wyborca(req.body.ING, req.body.godzinaZ, req.body.godzinaR, req.body.frekwencja, req.body.data, req.body.idwybory);
    const newKandydat = new Kandydat(req.body.miejsce, req.body.imie, req.body.nazwisko, req.body.nrLegitymacjiPoselskiej, req.body.idLista, req.body.idUgrupowanie, req.body.idKandydujeDo, req.body.kandydatId);
    Dbservice.edit(newWyborca, newKandydat);
    res.redirect("/PanelAdministratoraWieleDoWiele?page_last=0&page_next=10");
});

router.post("/addUser", (req, res, next) => {
    const newUser = new User(req.body.email, req.body.login, req.body.haslo, req.body.imie, req.body.nazwisko, req.body.pesel, req.body.dataurodzenia, req.body.nrdowodu);
    User.addUser(newUser);
    res.redirect("/");
});

module.exports.route = router;