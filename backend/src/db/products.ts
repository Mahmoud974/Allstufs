import mongoose from "mongoose";
import slugify from "slugify";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    img:{
        type: String,
        required: true,
    },
    date:{
        type: Number,
        default: Date.now(),
        required: true,
    
    },
    description:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    }    }

)
// Middleware to update the 'img' field with the cleaned filename
ProductSchema.pre('save', function (next) {
    const product: any = this;
    product.img = slugify(product.img, { lower: true });
    next();
});
export const ProductModel = mongoose.model('Product', ProductSchema);
export const getProduct = () => ProductModel.find()
export const createProduct = (product: any) => new ProductModel(product).save().then(item => item.toObject())


