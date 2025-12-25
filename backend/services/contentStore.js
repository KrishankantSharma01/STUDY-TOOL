import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get directory path for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let chapterContent = "";
let videoContent = "";

export function loadContent() {
  // Use absolute path to ensure it works in both local and serverless environments
  const dataDir = path.join(__dirname, "../data");
  chapterContent = fs.readFileSync(path.join(dataDir, "chapter.txt"), "utf-8");
  videoContent = fs.readFileSync(path.join(dataDir, "videoNotes.txt"), "utf-8");

  console.log("📚 Study content loaded into memory");
}

export function getContent() {
  return {
    chapter: chapterContent,
    videos: videoContent
  };
}
