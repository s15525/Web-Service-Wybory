const express = require('express');
const router = express.Router();

const wyborca = require('../model/Wyborca');

router.get("/", (req, res, next) => {
    const wyborcaList = wyborca.list();
    res.render('PanelAdministratora', {wyborcaList: wyborcaList});
});

router.get("/newRekord", (req, res, next) => {
    res.render('users/userForm', { pageTitle: "Nowy użytkownik", formAction: "add", user: {} });
});

module.exports.route = router;