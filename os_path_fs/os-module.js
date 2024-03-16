const os = require("os")

let user = os.userInfo()
console.log(user)
console.log(`The System Uptime Is: ${os.uptime()}`)
let currentOs = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}

console.log(currentOs)