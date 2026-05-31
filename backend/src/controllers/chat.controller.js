import { generateResponse } from "../service/ai.service.js"
import { generateTitleMessage } from "../service/ai.service.js"
import chatModel from './../models/chat.model.js';
import messageModel from "../models/messgae.model.js";
import { AsyncCaller } from "@langchain/core/utils/async_caller";


export async function sendMessage(req,res)
{
    const { message,chat:chatId } = req.body
    // console.log(title)
    let title = null
    let chat = null

    if(!chatId)
    {
     title = await generateTitleMessage(message)
    chat = await chatModel.create({
        user:req.user.id,
        title
    })
    }


     const userMessage = await messageModel.create({
        chat: chatId || chat._id,
        content: message,
        role:"user"

    })

    const currentId = chatId || chat._id
    
    const messages = await messageModel.find({ chat: currentId })
    
    const result = await generateResponse(messages)

    const AiMessage = await messageModel.create({
        chat:  chatId || chat._id,
        content : result,
        role:"ai"
    })

    // console.log(messages)

    res.json({
        response: result, 
        title,  
        chat,
        AiMessage
    })

}

export async function getChat(req,res)
{
    const user = req.user

    const chats = await chatModel.find({user:user.id})

    res.status(200).json({
        message :"chats Receive  Succesfully",
        chats
    })

}

export async function getMessages(req,res)
{
    const { chatId } = req.params;

    const chat = await chatModel.find({
        _id:chatId,
        user : req.user.id
    })


    if (!chat)
    {
        return res.status(404).json({
            message:"Chat Not Found"
        })
    }

    const messages = await messageModel.find({
        chat:chatId
    })

    res.status(200).json({
        message:"Chat Retrieved Succefuly",
        messages
    })

}

export async  function deleteChat(req,res)
{
    const {chatId} = req.params

    const chat = await chatModel.findOne({
        _id: chatId,
        user: req.user.id
    })

    await messageModel.deleteMany({
        chat : chatId
    })

    if(!chat)
    {
        return res.status(404).json({
            message:"Chat Not Found"
        })
    }

    res.status(200).json({
        message: "Chat Deleted succesfully "
    })

}