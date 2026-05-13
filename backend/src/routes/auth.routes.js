import { Router } from "express";
import { register } from "../controllers/auth.controller";
import { registerValidator } from "../validator/authvalidate";

const authRouter = Router()


authRouter.post("/register",registerValidator,regitser)


export default authRouter