const express = require("express")
const router = express.Router()
const {getMessages, makeMessage} = require('../controllers/messages_controller')

router.get("/messages", getMessages )
router.post("/messages", makeMessage)

router.post("/auth/signup", makeMessage)

module.exports = router