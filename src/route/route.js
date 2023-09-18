const express = require("express")
const route = express.Router()
const controller = require("../controller/controller");
const {body} = require("express-validator")

const validar = [
    body("text")
        .notEmpty()
        .withMessage("El campo ciudad no puede quedar vacio"),
    body("country")
        .notEmpty()
    .withMessage("El campo país no puede quedar vacio")
]

route.get("/", controller.mostrar)
route.post("/",validar, controller.enviar)

module.exports = route;