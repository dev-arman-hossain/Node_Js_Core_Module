const fs = require("fs");

console.log("Start reading...");

try{
    const data = fs.readFileSync("./data/diary.txt", "utf-8");
    console.log("file content: ")
    console.log(data);
} catch (err) {
    console.log(err.message);
}


console.log("Finished reading...");

