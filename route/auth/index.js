const express = require("express")
const {SignupController,LoginController} = require("../../controllers/authController")
const router = express.Router()

// localhost:3000/auth/signup
router.post("/signup",SignupController)
// localhost:3000/auth/alluser
router.post("/login",LoginController)


module.exports = router