import express from 'express';

const router = express.Router();
import controller from '../controller/users.controller.js'
router.get('/',async function(req,res){
    const user =req.user;
    console.log(user);
    if(!user){
        return res.status(401).json({error:`you are not logged in`})
    }
    return res.status(200).json({message:`you can access this route`});
})
router.post("/signup",controller.userSignup);
router.post("/login",controller.userLogin);

export default router;

