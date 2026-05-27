import app from "./src/app.js"
import dotenv from "dotenv"
import connectToDb from "./src/config/database.js"
import { testAI } from "./src/service/ai.service.js"

dotenv.config()

connectToDb()
// testAI()


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})