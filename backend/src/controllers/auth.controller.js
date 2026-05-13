import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken"
import { sendEmail } from "../service/mail.service.js";

export async function register(req,res)
{
    const {username,email,password} = req.body

    const isUserExist= await userModel.findOne({
        $or:[
            {email},{username}
        ]

    })

    if (isUserExist) {

    return  res.status(400).json({
            message:"User with this email Already Exist ",
            success:false,
            err:"User Already Exist"

        })

    }


    const user = await userModel.create({username,email,password})


    await sendEmail({
        to:email,
        subject:"Welcome to PerplexityAi",
        html:
        `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h1>Welcome to PerplexityAi 🚀</h1>
            <p>Hi there,</p>
            
            <p>
                Thank you for registering on <b>PerplexityAi</b>.
                We're excited to have you onboard!
            </p>

            <p>
                You can now explore AI-powered conversations and features.
            </p>

            <br/>

            <a 
                href="http://localhost:3000"
                style="
                    background-color: black;
                    color: white;
                    padding: 10px 18px;
                    text-decoration: none;
                    border-radius: 5px;
                "
            >
                Get Started
            </a>

            <p style="margin-top: 30px;">
                Regards,<br/>
                Akshat Soni
            </p>
        </div>
         `
    })


    res.status(201).json({
        message :"User resgister succesfully",
        success:true,
        user:{
            id:user._id,
            username:user.username,
            email:user.email
        }

    })

}


