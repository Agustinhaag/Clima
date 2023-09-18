const { validationResult } = require("express-validator")

const mostrar = (req,res) => {
    res.render("index.ejs",{values:{}, errors:[]})
}

const enviar = async (req,res) => {
    const errors = await validationResult(req);
    if (!errors.isEmpty()) {
        return res.render("index.ejs", {
            values: req.body,
            errors: errors.array()
        })
    }
}

module.exports = {
    mostrar,
    enviar,
}