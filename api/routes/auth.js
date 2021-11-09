const router = require('express').Router(); 
const User = require("../models/User")
const CryptoJS = require("crypto-js")

//REGISTER
router.post("/register", async (req, res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString(), 
    });

    try{
        const savedUser = await newUser.save()
        res.status(200).json()
    }  catch(err){ 
        console.log(err)
        return
    }
})

//LOGIN

router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne(
            {
                username: req.body.username
            }
        ); 

       if (!user){
            res.status(401).json("Wrong user name")
       } 

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password, 
            process.env.PASS_SEC
        ); 

        const originalPassword = hashedPassword
        const inputPassword = req.body.password; 

        if(originalPassword != hashedPassword){
            res.status(401).json("Wrong user name or password"); 
            console.log(`${inputPassword} is the wrong password for ${originalPassword}`)
        } else {
            res.status(200).json(user)
        }
        
    } catch(err){
        console.log(err)
        return; 
    }
})

module.exports = router; 