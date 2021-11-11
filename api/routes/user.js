const User = require("../models/User");
const {
    verifyToken, 
    verifyTokenAndAuthorization, 
    verifyTokenAndAdmin
} = require("./verifyToken"); 

const router = require('express').Router(); 

    //UPDATE USER
    router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
        if(req.body.password){
                req.body.password = CryptoJS.AES.encrypt(
                req.body.password, 
                process.env.PASS_SEC
            ).toString(); 
        }

        try{
            const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            {
                $set: req.body
            }, 
            { new: true }
        ); 
            res.status(200).json(updatedUser)
        }catch(err){
            console.log(err)
            return 
        }
})

    //DELETE USER
    router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
        try{
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("User was deleted")
        }catch(err){
            console.log(err)
            return; 
        }
    })

    //GET USER
    router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
        try{
            const user = await User.findById(req.params.id)
            const {...others } = user._doc; 
            res.status(200).json()
        } catch (err) {
            console.log(err); 
            return
        }
    })

    //GET ALL USERS

    router.get("/", verifyTokenAndAdmin, async (req, res) => {
        try{
            const users = await User.find()
            res.status(200).json(users)
        } catch (err) {
            console.log(err); 
            return
        }
    })

    //GET USER STATS

    router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
        const date = new Date(); 
        const lastYear = new Date(date.setFullYear(date.getFullYear() -1)); 

        try{
            const data = await User.aggregate([
                {$match: {createdAt: {$gte: lastYear}}}, 
                {
                    $project:{
                        month: {$month: "$createdAt"}, 
                    },
                },
                {
                    $group:{
                        _id: "$month", 
                        total: {$sum: 1 }, 
                    }
                }
            ]); 
            res.statusMessage(200).json(data)
        }catch(err){
            console.log(err)
            return
        }
    })

module.exports = router