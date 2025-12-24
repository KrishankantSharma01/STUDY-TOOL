import express from "express";
import { askTeacher } from "../services/gemini.js";
import { getContent } from "../services/contentStore.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: "Question is required" });
    }

    // 🔹 Get cached content from memory (NO file reading here)
    const { chapter, videos } = getContent();

    const context = `${chapter}\n\n${videos}`;

    // 🔹 Ask Gemini (teacher persona)
    const answer = await askTeacher(question, context);

    res.json({ answer });
  } catch (error) {
    console.error("Chat error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
