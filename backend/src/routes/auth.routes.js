import { Router } from "express";
import { getMe, login, register, verifyEmail } from "../controllers/auth.controller.js";
import { loginValidator, registerValidator } from "../validator/authvalidate.js";
import { authUser } from "../middleware/auth.middleware.js";

const authRouter = Router()


authRouter.post("/register",registerValidator,register)
authRouter.get("/verify-email",verifyEmail)
authRouter.post("/login",loginValidator,login)
authRouter.get("/get-me",authUser,getMe)

export default authRouter