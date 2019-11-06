const express = require("express")
const router = express.Router()
const bodyParser = require('body-parser')
const controller = require("../controller/contatosController")

router.get('/', controller.getAll)
router.post('/create', bodyParser.json(), controller.newContact)

module.exports = router;