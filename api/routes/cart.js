const Cart = require("../models/Cart");
const Product = require("../models/Product");
const {
    verifyToken, 
    verifyTokenAndAuthorization, 
    verifyTokenAndAdmin
} = require("./verifyToken"); 

const router = require('express').Router(); 

    //CREATE

    router.post("/", verifyToken, async (req, res) => {
        const newCart = new Cart(req.body)
        try{
            const savedCart = await newCart.save(); 
            res.status(200).json(savedCart); 
        }catch(err){
            console.log(err)
            return; 
        }
    })

    //UPDATE
    router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
        try{
            const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id, 
            {
                $set: req.body
            }, 
            { new: true }
        ); 
            res.status(200).json(updatedCart)
        }catch(err){
            console.log(err)
            return 
        }
    })

    //DELETE
    router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
        try{
            await Cart.findByIdAndDelete(req.params.id)
            res.status(200).json("Cart was deleted")
        }catch(err){
            console.log(err)
            return; 
        }
    })

    //GET CART

    router.get('/find/:userId', verifyTokenAndAuthorization, async (req, res) => {
        try{
            const cart = await Cart.findOne({userId: req.params.userId}); 
            res.status(200).json(cart); 
        } catch (err){
            console.log(err)
            return; 
        }
    })

    //GET ALL 

    router.get("/", verifyTokenAndAdmin, async (req, res) => {
        try {
            const carts = await Cart.find()
            res.status(200).json(carts)
        } catch (err) {
            console.log(err)
            return
        }
    })

module.exports = router