const { readFileSync, writeFileSync } = require("fs")
const {sep} = require("path")

console.log("start")
const first = readFileSync(`.${sep}content${sep}first.txt`, "utf8")
const second = readFileSync(`.${sep}content${sep}second.txt`, "utf8")

writeFileSync(
    `.${sep}content${sep}result-sync.txt`,
    `Here is the result: ${first} ? ${second}`, 
    { flag: "a" }
)

console.log("done with this task")
console.log("starting next task")
