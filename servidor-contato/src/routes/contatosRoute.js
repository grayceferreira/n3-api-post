const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
const controller = require("../controller/contatosController")

router.get("/", controller.getAll)
router.post("/criar", bodyParser.json(), controller.add)
router.get("/nome/:nome", controller.getNome)
router.get("/id/:id", controller.getById)
router.patch("/atualizar/:id", bodyParser.json(), controller.updateById)

module.exports = router;