import app from "./src/app.js"
import dotenv from "dotenv"
import connectToDb from "./src/config/database.js"
import http from "http"
import { initSocket } from "./src/socket/server.socket.js"
dotenv.config()

const httpServer = http.createServer(app)

initSocket(httpServer)



connectToDb()
// testAI()


httpServer.listen(3000,()=>{
    console.log("Server is running on port 3000")
})