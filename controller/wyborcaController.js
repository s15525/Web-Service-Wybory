const express = require('express');
const router = express.Router();

const Wyborca = require('../model/Wyborca');
const User = require('../model/User');
const Kandydat = require('../model/Kandydat');
const Dbservice = require('../model/Dbservice');

router.get("/", (req, res, next) => {
    res.render('Home',{});
});

router.get("/Zarejestruj", (req, res, next) => {
    res.render('Zarejestruj', {});
});

router.get("/PanelAdministratoraWieledoWiele", (req, res, next) => {
    const wyborcaKandydat = Dbservice.list();
    res.render('PanelAdministratoraWieledoWiele', { wyborcaKandydat:wyborcaKandydat, page_last: req.query.page_last  ,page_next : req.query.page_next});
});

router.get("/PanelAdministratora", (req, res, next) => {
    const wyborcaList = Wyborca.list();
    res.render('PanelAdministratora', {wyborcaList: wyborcaList , page_last: req.query.page_last  ,page_next : req.query.page_next});
});

router.get("/NowyRekord", (req, res, next) => {
    res.render('NowyRekord', {});
});

router.get("/Edycja", (req, res, next) => {
    res.render('Edycja', { idwybory : req.query.wyborca_id , data: req.query.data , frekwencja: req.query.frekwencja , ING: req.query.ING , godzinaR: req.query.godzinaR , godzinaZ: req.query.godzinaZ });
});

router.get("/Usun", (req, res, next) => {
    Wyborca.delete( req.query.wyborca_id);
    res.redirect("/PanelAdministratora?page_last=0&page_next=10");
});

router.get("/Szczegoly", (req, res, next) => {
    res.render('Szczegoly' , { idwybory : req.query.wyborca_id , data: req.query.data , frekwencja: req.query.frekwencja , ING: req.query.ING , godzinaR: req.query.godzinaR , godzinaZ: req.query.godzinaZ })
});

router.get("/SzczegolyWieleDoWiele", (req, res, next) => {
    const kandydatList = Kandydat.getTable();
    const wyborcaList = Wyborca.getTable();
    res.render('SzczegolyWieleDoWiele' , {kandydatId: req.query.kandydat_id , wyborcaId: req.query.wyborca_id , kandydatList: kandydatList , wyborcaList: wyborcaList })
});

router.post("/add", (req, res, next) => {
    const newWyborca = new Wyborca(req.body.ING, req.body.godzinaZ , req.body.godzinaR ,req.body.frekwencja , req.body.data);
    Wyborca.add(newWyborca);
    res.redirect("/PanelAdministratora?page_last=0&page_next=10");
});

router.post("/edit", (req, res, next) => {
    const newWyborca = new Wyborca(req.body.ING, req.body.godzinaZ , req.body.godzinaR ,req.body.frekwencja , req.body.data, req.body.idwybory);
    Wyborca.edit(newWyborca);
    res.redirect("/PanelAdministratora?page_last=0&page_next=10");
});

router.post("/addUser", (req, res, next) => {
    const newUser = new User(req.body.email, req.body.login , req.body.haslo ,req.body.imie , req.body.nazwisko, req.body.pesel, req.body.dataurodzenia, req.body.nrdowodu);
    User.addUser(newUser);
    res.redirect("/");
});

module.exports.route = router;