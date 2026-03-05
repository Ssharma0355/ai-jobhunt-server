const { Router } = require("express");
const authContoller = require("../controllers/auth.contollers")


const authRouter = Router()

authRouter.post("/register",authContoller.registerUserController)

module.exports = authRouter