//-------------os node core module----------------///
const os = require('os');

//platform
console.log(os.platform());

//CPU arch
console.log(os.arch());

//CPU core Info
console.log(os.cpus());

//Free memory
console.log(os.freemem());

//Total Memory
console.log(os.totalmem());

//Home dirct
console.log(os.homedir());

//Uptime
console.log(os.uptime());

//UserInfo
console.log(os.userInfo());