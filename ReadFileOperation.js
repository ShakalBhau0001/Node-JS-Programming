const fs = require('fs');
const fd = fs.readFileSync("file.txt");
console.log(fd.toString());
console.log("End Of Execution");

/*
File Is Required With Name "File.txt"
You Can Also Change The File Name
File And Program Must Be In Same Folder
*/
