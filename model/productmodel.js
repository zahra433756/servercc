import mongoose from "mongoose";
export const variation = new mongoose.Schema({
    color: { type: String,  },

    size: { type: String,  },

    price: { type: Number,  },


    quantity: { type: Number, },

},{timestamps: true});

export const productSchema = new mongoose.Schema({
    name: { type: String, required: true },

    price: { type: Number,  },

    quantity: { type: Number,  },

    description: { type: String,  },

    image: { type: String,  },

    variation: [variation],


},{timestamps:true})

const Product = mongoose.model("Product", productSchema);

    export default Product;
