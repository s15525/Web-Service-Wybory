const express = require('express');
const router = express.Router();

const wyborca = require('../model/Wyborca');

router.get("/", (req, res, next) => {
    const userList = User.list();
    res.render('users/userList', {userList: userList});
});

router.get("/newRekord", (req, res, next) => {
    res.render('users/userForm', { pageTitle: "Nowy użytkownik", formAction: "add", user: {} });
});