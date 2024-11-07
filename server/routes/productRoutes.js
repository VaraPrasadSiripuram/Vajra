// Import the express library to create the router
import express from "express";
// Import the Product model to interact with the product data
import Product from '../models/Product.js';

// Create a new instance of an Express router
const productRoutes = express.Router()

// Define the asynchronous function to handle the GET request for products
const getProduct = async(req, res) => {
    try {
        // Fetch all products from the database
        const products = await Product.find({});
        
        // Respond with the fetched products and an empty pagination object
        res.json({
            products,
            pagination: {}, // Placeholder for pagination details
        });
    } catch (error) {
        // Handle any errors that occur during the database operation
        res.status(500).json({ message: error.message });
    }
};

// Set up the route for GET requests to the root of the product routes
productRoutes.route('/').get(getProduct);

// Export the productRoutes for use in the main application
export default productRoutes;
