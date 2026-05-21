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


    const emailVerificationToken= jwt.sign({
        email:user.email
    },process.env.JWT_SECRET)


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

            <p>Please Verify Your Registration By CLicking the Link below </p>
            <a href="http://localhost:3000/api/auth/verify-email?token=${emailVerificationToken}">Verify Email </a>


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

export async function verifyEmail(req,res){
    const  {token}= req.query;

    const decoded = jwt.verify(token,process.env.JWT_SECRET);

    const user = await userModel.findOne({
        email:decoded.email
    })

    if (!user)
    {
        return res.status(400).json({
            message:"Invalid Token",
            success:false,
            err:"USer not found"
        })
    }

    user.verified = true;


    await user.save();

    
   const  html =` <h1>  Email Verified Succesfully</h1>
            <p> Your emai has been verified.You can now log in to your account.</p> `

    res.send(html)

}

export async function login(req,res)
{
    const {email,password} = req.body;

    const user = await userModel.findOne({email})

    if (!user)
    {
        return res.status(400).json({
            message:"Invalid Email Or Password",
            sucess: false,
            err:"User Not Found"
        })
    }

    const isPassword = await user.comparePassword(password)

    if (!isPassword)
    {
        return res.status(400).json({
            message:"Invalid email or password",
            sucess:false,
            err:"Incorrect Password"

        })
    }

    if(!user.verified){
        return res.status(400).json({
            message:"Please Verify your email before loggin in",
            sucess:false,
            err:"Email Not verified"
        })
    }

    const token = jwt.sign({
        id:user._id,
        username:user.username,
        email:user.email
    },process.env.JWT_SECRET,{expiresIn:'7d'})

    res.cookie("token",token)
    
    res.status(200).json({
        message:user._id,
        username: user.username,
        email:user.email
    })

}

export async function getMe(req,res){

    const userId = req.user.id;

    const user = await userModel.findById(userId).select("-password")

    if (!user)
    {
        return res.status(404).json({
            message:"User not Found",
            sucess:false,
            err:"User not Found"
        })
    }

    res.status(200).json({
        message:"User details Fetch Successfully",
        sucesss:true,
        user
    })

}