const os = require('os')

user = os.userInfo()

console.log(user)

console.log(`Hello there you have been running for: ${os.uptime}`)