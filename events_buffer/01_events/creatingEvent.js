const EventEmitter = require('events'); // require or import the class of event . class is the blueprint of how the event will work
const eventEmitter = new EventEmitter(); // create an new object in that class with new keyword that contain data based on the blueprint(structure) of object defined in the class

// creating a listner to a particular event(action) using the on method 
// the on method contains two arguments that are 
// 1)event(action) name that we gonnna refer for naming the action
// 2)a callback function that contain the logic what will happen when the action has been taken  
eventEmitter.on('greet',()=>{
    console.log("hello world");
});
// creating a emit i.e. telling an action has happened 
eventEmitter.emit('greet');

//extra fact to run a node js file write in terminal = node filename