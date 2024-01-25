

const express = require("express");
const { AuthMiddleware } = require("../middleware/Auth.middleware");
const { ProductModel } = require("../Models/Product.model");

const productRoutes  =  express.Router();

// productRoutes.use(AuthMiddleware)

productRoutes.get("/",AuthMiddleware, async(req,res)=>{
  const { _id } = req.query;
   try {
     
    const products = await ProductModel.findOne({ _id });
    if (!products) {
      const products = await ProductModel.find()
      return res.json(products);
    }
    
    res.json(products);
   } catch (error) {
    res.json({error})
   }
})
productRoutes.post("/add",AuthMiddleware, async(req,res)=>{
    try {
       const products = await ProductModel.create(req.body)
       await products.save();
       res.json({msg:"Product Added"})
    } catch (error) {
     res.json({error})
    }
 })

 
 productRoutes.patch("/update/:_id", async (req, res) => {
   const { _id } = req.params;
         
   try {
  
       await ProductModel.findByIdAndUpdate(_id, req.body);
       res.status(200).json({ msg: "Updated post" });
   
   } catch (error) {
     console.error(error);
     res.status(500).json({ err: "Internal Server Error" });
   }
 });
 
module.exports = {productRoutes}

