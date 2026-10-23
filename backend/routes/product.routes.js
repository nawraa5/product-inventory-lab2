const router = require("express").Router();
const Product = require("../models/Product");
const mongoose = require('mongoose')



router.post("/", async (req, res) => {
  try {
    const { title, description, category,price,quantity } = req.body;
    const createdProduct = await Product.create({ title,description,category,price,quantity });
    res.status(201).json(createdProduct);
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({
        message: err.message,
      });
    }
    console.log(err);
    return res.status(500).json({
        message:err.message
    })
  }
});



router.get("/", async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.json(allProducts);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
        message:err.message
    })
  }
});



router.get("/:productId", async (req, res) => {
  try {
    const foundProduct = await Product.findById(req.params.productId);
    if (!foundProduct) {
      return res.status(404).json({
        message: "Product Not Found"
      });
    }
    res.json(foundProduct);
  } catch (err) {
    console.log(err);
    
    return res.status(500).json({
        message:err.message
    })
  }
});


router.put("/:productId", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
      new: true,
      runValidators:true
    });

    if(!updatedProduct){
        return res.status(404).json({
            message:"Product Not Found"
    });
}
   
    res.json(updatedProduct);
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({
        message: err.message,
      });
    }
    console.log(err);

    return res.status(500).json({
        message:err.message
    })
  }
});

router.delete("/:productId", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.productId);
    res.json(deletedProduct);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
        message:err.message
    })
}
});








module.exports = router;