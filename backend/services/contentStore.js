import fs from "fs";

let chapterContent = "";
let videoContent = "";

export function loadContent() {
  chapterContent = fs.readFileSync("./data/chapter.txt", "utf-8");
  videoContent = fs.readFileSync("./data/videoNotes.txt", "utf-8");

  console.log("📚 Study content loaded into memory");
}

export function getContent() {
  return {
    chapter: chapterContent,
    videos: videoContent
  };
}
