import { generateResponse } from "../service/ai.service.js"
import { generateTitleMessage } from "../service/ai.service.js"
import chatModel from './../models/chat.model.js';
import messageModel from "../models/messgae.model.js";
export async function sendMessage(req,res)
{
    const { message } = req.body

    

    const title = await generateTitleMessage(message)
    const result = await generateResponse(message)

    console.log(title)


    const chat = await chatModel.create({
        user : req.user.id,
        title
    })

    const messager = await messageModel.create({
        chat: chat._id,
        content : result,
        role:"ai"

    })


    res.json({
        response: result, 
        title,
        chat,
        messager
    })

}

