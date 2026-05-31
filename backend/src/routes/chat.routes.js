import {Router} from "express"
import { sendMessage ,getChat ,getMessages ,deleteChat} from "../controllers/chat.controller.js"
import { authUser } from "../middleware/auth.middleware.js"
const ChatRouter = Router()


ChatRouter.post("/message",authUser,sendMessage)
ChatRouter.get("/",authUser,getChat)
ChatRouter.get("/:chatId/messages",authUser,getMessages)
ChatRouter.delete("/:chatId",authUser,deleteChat)

export default ChatRouter       
