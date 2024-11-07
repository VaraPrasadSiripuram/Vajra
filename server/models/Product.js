import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    images: {
        type: [String], // Array of strings for image URLs
        required: true,
        default: [],
    },
    description: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
    numberOfReviews: {
        type: Number, // Numeric count
        required: true,
        default: 0, // Default to 0
    },
    productIsNew: {
        type: Boolean,
        required: true,
        default: true, // Default to true for new products
    },
    reviews: {
        type: [reviewSchema], // Array of review subdocuments
        default: [],
    },
    stock: {
        type: Number, // Numeric count
        required: true,
    },
    stripeID: {
        type: String,
        required: true,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
}, 
{
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

export default Product;
