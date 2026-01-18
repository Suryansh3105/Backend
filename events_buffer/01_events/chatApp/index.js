const ChatRoom = require("./chatRoom.js");

const chatRoom= new ChatRoom();

// join ndrivers 

chatRoom.on('join',(user)=>{
    console.log(`${user} has joined the chat`);
})

// message driver 

chatRoom.on('message',(user,message)=>{
    console.log(`${user} message is : ${message}`);
})

// leave driver 

chatRoom.on('leave',(user)=>{
    console.log(`${user} has left the chat`);
})

// simulating the chat 

chatRoom.join("Ram");
chatRoom.join("Shyam");
chatRoom.sendMessage("Ram","hello everyone ram this side");
chatRoom.sendMessage("Shyam","hello everyone Shyam this side");
chatRoom.leave('Ram');
chatRoom.sendMessage('Ram',"kush raho");
chatRoom.leave("Shyam");