const express = require('express');
const router = express.Router();

const Wyborca = require('../model/Wyborca');
router.get("/", (req, res, next) => {
    res.render('Home',{});
});

router.get("/PanelAdministratora", (req, res, next) => {
    const wyborcaList = Wyborca.list();
    res.render('PanelAdministratora', {wyborcaList: wyborcaList , page_last: req.query.page_last  ,page_next : req.query.page_next});
    console.log(req.query.page )
});

router.get("/NowyRekord", (req, res, next) => {
    res.render('NowyRekord', {});
});

router.get("/Edycja", (req, res, next) => {
    res.render('Edycja', { idwybory : req.query.wyborca_id , data: req.query.data , frekwencja: req.query.frekwencja , ING: req.query.ING , godzinaR: req.query.godzinaR , godzinaZ: req.query.godzinaZ });
});

router.get("/Usun", (req, res, next) => {
    Wyborca.delete( req.query.wyborca_id);
    res.redirect("/PanelAdministratora");
});

router.get("/Szczegoly", (req, res, next) => {
    res.render('Szczegoly' , { idwybory : req.query.wyborca_id , data: req.query.data , frekwencja: req.query.frekwencja , ING: req.query.ING , godzinaR: req.query.godzinaR , godzinaZ: req.query.godzinaZ })
});

router.post("/add", (req, res, next) => {
    const newWyborca = new Wyborca(req.body.ING, req.body.godzinaZ , req.body.godzinaR ,req.body.frekwencja , req.body.data);
    Wyborca.add(newWyborca);
    res.redirect("/PanelAdministratora");
});

router.post("/edit", (req, res, next) => {
    const newWyborca = new Wyborca(req.body.ING, req.body.godzinaZ , req.body.godzinaR ,req.body.frekwencja , req.body.data, req.body.idwybory);
    Wyborca.edit(newWyborca);
    res.redirect("/PanelAdministratora");
});

router.post("/back", (req, res, next) => {
    res.redirect("/PanelAdministratora");
});

module.exports.route = router;