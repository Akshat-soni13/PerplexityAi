import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash-lite",
  apiKey: process.env.GEMINI_API_KEY
});

// gemini bhot sara models offer karta hai 

export async function testAI()
{
    model.invoke("Who is Virat  Kholi ").then((res)=>{
        console.log(res.text)
    })
}