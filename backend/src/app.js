import express from "express"

const app = express()

import authRouter from "./routes/auth.routes.js";

app.use(express.json())
app.use("/api/auth",authRouter)


export default app