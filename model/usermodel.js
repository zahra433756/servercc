import mongoose, { Schema } from "mongoose";

export const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    
    isActive: { type: Boolean, 
        default: true },
    
    address: { street: String,
            city: String,
            zipCode: String,
            country: String,
            state: String,
            streetNumber: String,
            apartment: String,
            state: String
     },  
    contact: { phone: String, 
        monile: String},

}, {timestamps:true})

const User = mongoose.model('user',userSchema);

export default User;
