const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "output", "messy_files");
const organizeDir = path.join(__dirname, "output", "organized");

const categories = {
  images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
  documents: [
    ".pdf",
    ".doc",
    ".docx",
    ".txt",
    ".xls",
    ".xlsx",
    ".ppt",
    ".pptx",
  ],
  archives: [".zip", ".rar", ".7z"],
  audio: [".mp3", ".wav", ".ogg"],
  video: [".mp4", ".mkv", ".avi", ".mov"],
  spreadsheets: [".xls", ".xlsx", ".csv"],
  code: [".js", ".py", ".java", ".cpp", ".html", ".css"],
  others: [],
};

const testFiles = [
  "photo.jpg",
  "document.pdf",
  "archive.zip",
  "audio.mp3",
  "video.mp4",
  "spreadsheet.xls",
  "code.js",
  "other.txt",
  "image.png",
  "document.docx",
  "archive.rar",
  "audio.wav",
  "video.mkv",
  "spreadsheet.xlsx",
  "code.py",
  "other.doc",
];

function initializeDirectory() {
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true });

    testFiles.forEach((file) => {
      const filePath = path.join(sourceDir, file);
      fs.writeFileSync(filePath, `This is a test file named ${file}`);
    });
  }
  console.log("Messy directories files are created");
}
