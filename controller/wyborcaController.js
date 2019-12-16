const express = require('express');
const router = express.Router();

const Wyborca = require('../model/Wyborca');

router.get("/", (req, res, next) => {
    const wyborcaList = Wyborca.list();
    res.render('PanelAdministratora', {wyborcaList: wyborcaList});
});

router.get("/NowyRekord", (req, res, next) => {
    res.render('NowyRekord', {});
});

router.get("/Edycja", (req, res, next) => {
    res.render('Edycja', { idwybory : req.query.wyborca_id , data: req.query.data , frekwencja: req.query.frekwencja , ING: req.query.ING , godzinaR: req.query.godzinaR , godzinaZ: req.query.godzinaZ });
});

router.post("/add", (req, res, next) => {
    const newWyborca = new Wyborca(req.body.ING, req.body.godzinaZ , req.body.godzinaR ,req.body.frekwencja , req.body.data);
    wyborca.add(newWyborca);
    res.redirect("/");
});

router.post("/edit", (req, res, next) => {
    const newWyborca = new Wyborca(req.body.ING, req.body.godzinaZ , req.body.godzinaR ,req.body.frekwencja , req.body.data, req.body.idwybory);
    Wyborca.edit(newWyborca);
    res.redirect("/");
});

module.exports.route = router;