const Cart = require("../models/Cart");
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
    router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
        try{
            await Product.findByIdAndDelete(req.params.id)
            res.status(200).json("Product was deleted")
        }catch(err){
            console.log(err)
            return; 
        }
    })

    //GET ALL PRODUCTS 
    router.get("/",  async (req, res) => {
        const qNew = req.query.new; 
        const qCategory = req.query.category; 
        try{
            let products; 
            if(qNew){
                products = await Product.find().sort({createdAt: -1}.limit(5))
            } else if(qCategory){
                products = await Product.find({categories: {
                    $in:[qCategory], 
                }})
            }else{
                products = await Product.find(); 
            }

            res.status(200).json(products)
        } catch (err) {
            console.log(err); 
            return
        }
    })


module.exports = router