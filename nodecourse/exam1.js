const eventEmitter = require('events')

function createEmitter(onOpen,onClose){
   const miemitter = new eventEmitter() 
   miemitter.once('Opened', onOpen)
   miemitter.once('Closed',onClose)
  return miemitter
 
}
function opened (emitter){
 emitter.emit('Opened')
}

function closed (emitter){
  emitter.emit('Closed')
}
 
let emitter = createEmitter(
  () => console.log('Opened'), ()=> console.log('Closed')
  );
  opened(emitter);
  closed(emitter);

  module.exports.createEmitter = createEmitter;
  module.exports.opened = opened;
  module.exports.closed = closed;