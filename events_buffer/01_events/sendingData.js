const EventEmitter = require('events'); 
const eventEmitter = new EventEmitter();
eventEmitter.on('greet',(username)=>{
    console.log(`hello world and ${username}`);
});
eventEmitter.emit('greet',"suryansh");

// we can also have a situation where we need to pass the data with the action for there we add another arugment to emit separated by ,
// eventEmitter.emit('name',data) => this data can be directly pass to listener in the callback 
// evemtEmitter.on('name',(data)=>{});