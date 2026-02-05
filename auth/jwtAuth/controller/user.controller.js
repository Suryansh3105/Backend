import 'dotenv/config';

async function userLogin(req,res){
    const {email,password} =req.body;
    const [userInfo] = await db.select({
        id:usersTable.id,
        email:usersTable.email,
        hashPassword:usersTable.password,
        salt:usersTable.salt
    }).from(usersTable).where((table)=>eq(table.email,email))
    console.log(userInfo);
    if(!userInfo){
        return res.status(400).json({error:`user doesnt exist please login first`})
    }
    const hashedPassword=createHmac('sha256',userInfo.salt).update(password).digest('hex');
    console.log(hashedPassword)
    console.log(userInfo.hashPassword)
    if(hashedPassword === userInfo.hashPassword){
        // develop a jwt signature 
        // step 1 json of basic info - note since jwt can be read by anyone dont store sensitive information in the jwt 
        const payload = {
            "name": userInfo.name,
            "email": userInfo.email
        }
        // step 2 make a jwt signature using the payload json and secret 
        const token = jwt.sign(payload,process.env.SECRET);
    }
    else{
        return res.status(401).json({error:`wrong password`});
    }}

    export default {
        userLogin
    }
