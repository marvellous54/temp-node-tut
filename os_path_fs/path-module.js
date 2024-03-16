const PATH = require("path")
console.log(PATH.sep)

const filePath = PATH.join(`${PATH.sep}content`, "subfolder", "text.txt")
console.log(filePath)

const base = PATH.basename(filePath)
console.log(base)

const absolute = PATH.resolve(__dirname, "content", "subfolder", "test.txt")
console.log(absolute);