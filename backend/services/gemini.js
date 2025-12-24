import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function askTeacher(question, context) {
  const prompt = `
You are an economics teacher.

Rules:
- Answer ONLY using the content provided below
- If the answer is not present, say:
  "This is not covered in the provided material."

CONTENT:
${context}

QUESTION:
${question}
`;

  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "openai/gpt-oss-20b",
  });

  const response = chatCompletion.choices[0]?.message?.content || "";

  return response;
}
