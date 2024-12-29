import Product from "../model/productmodel.js";

export const createproduct = async(req,res)=> {
    try {
        const data = req.body;
        const product = await Product.create(data)
        res.status(201).json({
            message: "product created successfully",
            product
        })
    } catch (error) {
        res.status(500).json({ 
            message: "Error creating product",
            error
        })
    }
}