const EventEmitter= require('events');

class ChatRoom extends EventEmitter{ // initally classname was chatRoom and while createing new object i used captial C instead of small c that why it said ChatRoom is not a cosntructor so i changed the className to ChatRoom with captial c
    constructor(){
        super();
        this.users= new Set(); // written small s instead of captial S
    }
    join(user){
        this.users.add(user);
        this.emit('join',user);
    }
    sendMessage(user,message){
        if(this.users.has(user)){
            this.emit('message',user,message);
        }else{
            console.log(`hey ${user} you have already left the chat join again to send the message`)
        }
    }
    leave(user){
        if(this.users.has(user)){
            this.users.delete(user);
            this.emit('leave',user);
        }
        else{
            console.log(`${user} is not in the chat or was never added to chat`);
        }
    }
}

module.exports = ChatRoom;