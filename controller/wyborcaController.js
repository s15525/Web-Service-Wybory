const express = require('express');
const router = express.Router();

const wyborca = require('../model/Wyborca');

router.get("/", (req, res, next) => {
    const wyborcaList = wyborca.list();
    res.render('PanelAdministratora', {wyborcaList: wyborcaList});
});

router.get("/NowyRekord", (req, res, next) => {
    res.render('NowyRekord', {});
});

router.get("/Edycja", (req, res, next) => {
    res.render('Edycja',{idwybory: req.query.wyborca_id});
});

router.post("/add", (req, res, next) => {
    const newWyborca = new wyborca(req.body.ING, req.body.godzinaZ , req.body.godzinaR ,req.body.frekwencja , req.body.data);
    wyborca.add(newWyborca);
    res.redirect("/");
});

router.post("/edit", (req, res, next) => {
    const newWyborca = new wyborca(req.body.ING, req.body.godzinaZ , req.body.godzinaR ,req.body.frekwencja , req.body.data);
    wyborca.add(newWyborca);
    res.redirect("/");
});

module.exports.route = router;