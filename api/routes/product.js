const Product = require("../models/Product");
const {
    verifyToken, 
    verifyTokenAndAuthorization, 
    verifyTokenAndAdmin
} = require("./verifyToken"); 

const router = require('express').Router(); 

    //CREATE

    router.post("/", verifyTokenAndAdmin, async (req, res) => {
        const newProduct = new Product(req.body)
        try{
            const savedProduct = await newProduct.save(); 
            res.status(200).json(savedProduct); 
        }catch(err){
            console.log(err)
            return; 
        }
    })

    //UPDATE
    router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
        if(req.body.password){
                req.body.password = CryptoJS.AES.encrypt(
                req.body.password, 
                process.env.PASS_SEC
            ).toString(); 
        }
        try{
            const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id, 
            {
                $set: req.body
            }, 
            { new: true }
        ); 
            res.status(200).json(updatedProduct)
        }catch(err){
            console.log(err)
            return 
        }
    })

    //DELETE
    router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
        try{
            await Product.findByIdAndDelete(req.params.id)
            res.status(200).json("Product was deleted")
        }catch(err){
            console.log(err)
            return; 
        }
    })

module.exports = router