import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken"


export async function register(req,res)
{
    const {username,email,password} = req.body

    const {username , email , password } = req.body


    const isUserExist= userModel.findOne({
        $or:[
            {email},{username}
        ]

    })

    if (isUserExist) {

        res.status(400).json({
            message:"User with this email Already Exist ",
            success:false,
            err:"User Already Exist"

        })

    }


    const user = await userModel.create({username,email,password})



}


