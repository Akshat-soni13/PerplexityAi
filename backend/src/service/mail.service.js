import nodemailer from "nodemailer"
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport(
  {  service: "gmail",
    auth:{
        user:process.env.USER_EMAIL,
        pass:process.env.USER_PASSCODE
    }}
)

transporter.verify()
.then(()=>{
    console.log("Transporter is ready to send email  ")
})
.catch((err)=>{
    console.error("Email transporter is not ready to send email ",err)
})



export async function sendEmail({to,subject,html,text})
{
    const mailoption ={
        from : process.env.USER_EMAIL,
        to,
        subject,
        html,
        text
    }

const details = await transporter.sendMail(mailoption)

console.log("Email Sent",details)


}
