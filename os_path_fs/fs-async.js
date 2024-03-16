const { readFile, writeFile } = require("fs")
const { sep } = require("path")
                
console.log("start")
readFile(`.${sep}content${sep}first.txt`, "utf8", (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile(`.${sep}content${sep}second.txt`, "utf8", (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        console.log(first, second)

        writeFile(
            `.${sep}content${sep}result-async.txt`,
            `Here is the result: ${first} ? ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log("done with this task")
            }
        )
    })
})

console.log("starting next task")