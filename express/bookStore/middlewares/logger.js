const fs=require('node:fs');

exports.myLogger= function(req,res,next){
    const log=`${Date.now()} : ${req.method} , ${req.url} \n`;
    fs.appendFile('log.txt',log,'utf-8',(err)=>{
        console.log(err);
    })
    next();
}