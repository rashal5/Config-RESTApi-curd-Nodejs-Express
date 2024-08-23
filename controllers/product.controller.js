const Product = require('../models/product.model')

const getProducts = async(req, res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({message : error.message})
      }
}

const getProduct = async(req, res)=>{
    try {
        const { id } = req.params;
        const  product = await Product.findById(id);
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({message : error.message})
         
      }
}

const postProduct = async(req, res)=>{
        try {
            const product = await Product.create(req.body);
            res.status(200).json(product);
        } catch (error) {
          res.status(500).json({message : error.message})
           
        }
      
    
}


const putProduct = async(req, res)=>{
    try {
        const { id } = req.params;
        await Product.findByIdAndUpdate(id, req.body);
        if (!Product){
          return res.status(404).json({message:"the product not find"});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({message : error.message})
       
    }
  }
  
  const deleteProduct = async(req, res)=>{
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!Product){
          return res.status(404).json({message:"the product not find"});
        }
        res.status(200).json({message:"the product where deleted"});
        } catch (error) {
        res.status(500).json({message : error.message})
       
    }
  }



module.exports={getProducts,getProduct,postProduct,putProduct,deleteProduct

}