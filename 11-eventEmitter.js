const eventEmitter = require('events')

const customEmitter = new eventEmitter()

customEmitter.on('response', (name, id)=>{
    console.log(`data received to user ${name} with id:${id} `);
})

customEmitter.on('response', ()=>{
    console.log(`some other logic here`);
})

customEmitter.emit('response', 'John', '11')