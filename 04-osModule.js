const os = require("os")


// info about current user

const user = os.userInfo()
console.log(user);


// method returns system uptime in seconds

const systemTime = os.uptime()
console.log(systemTime);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
    arch: os.arch()
}
console.log(currentOs);
