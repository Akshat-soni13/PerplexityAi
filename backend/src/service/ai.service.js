import { ChatMistralAI } from "@langchain/mistralai"
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import dotenv from "dotenv";
dotenv.config();

const geminiModel = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash-lite",
  apiKey: process.env.GEMINI_API_KEY
});

const MistralModel = new ChatMistralAI({

  model:"mistral-small-latest",
  apiKey:process.env.MISTRAL_API_KEY
})

// gemini bhot sara models offer karta hai 

export async function generateResponse(message)
{
   const response = await geminiModel.invoke([
    new HumanMessage(message)
    ])

    return response.text

}

export async function generateTitleMessage(message) {

  const response = await MistralModel.invoke([
    new SystemMessage(`
You are an expert conversation title generator.

Return ONLY the title.
Maximum 6 words.
No explanations.
`),

    new HumanMessage(`
Generate a title for this conversation:

${message}
`)
  ]);

  console.log(response);

  return response.content;
}


// Note Ham Mistral use karega to geerate tit=e bcoz mistal chota model hhai so cositng bach jatai hai 

