import express from "express";
import fs from "fs";
import { getContent } from "../services/contentStore.js";

const router = express.Router();

router.get("/load", (req,res) => {
    const chapter = fs.readFileSync("/data/chapter.txt", "utf-8");
    const videos = fs.readFileSync("/data/video.txt", "utf-8");
    res.json({ 
        chapter,
        videos
    })
})

router.get("/summary", (req, res) => {
  const { videos } = getContent();
  res.json({ summary: videos });
});

export default router;