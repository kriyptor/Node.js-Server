
//------------logger emmiter------------///
const EventEmitter = require('events');

const uuid = require('uuid');

//To get uuid
console.log(uuid.v4());

//============class for logger============//
class Logger extends EventEmitter {
    log(msg) {
        // call event
        this.emit('message', { id: uuid.v4(), msg: msg});
    }
    
}

module.exports = Logger;