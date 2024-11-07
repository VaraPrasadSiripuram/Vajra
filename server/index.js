//Environment Setup and and loading environment variables from .env file
import dotenv from 'dotenv';                                                 // Loads environment variabes from .env
dotenv.config();                                                             // Loads these variables into process.env , so they can be access throughout the application



import connectToDatabase from './db.js';                                       // Express.js is a web framework for Node.js, used to set up the server and routes.
import express from 'express';
import cors from 'cors';                                                     //cross-origin requests, so your API can be accessed by clients on different domains,


//Routes
import productRoutes from './routes/productRoutes.js';


// Calling the function which initiates the Database connection
connectToDatabase()

// Connection to the middleware
const app = express();                                                          // Creates an Express application instance.
app.use(express.json());                                                        // Configures Express to automatically parse incoming JSON data.
app.use(cors());                                                                // Allows other origins (domains) to access this API.


// Setting Up Routes 
app.use('/api/products',productRoutes);                                         // any request starting with /api/products will be handled by the productRoutes

//localhost:5000

const port = 5000;

// Creating a Basic Route
/* This creates a simple GET route for the root URL (/).
 When someone accesses localhost:5000/, it will respond with the message "Api is running............". */
app.get('/', (req, res) => {                                                     
    res.send('Api is running............');
});

/* The listen method starts the server on port 5000. 
Once it’s running, it logs the message Server runs on the port: 5000.
*/ 
app.listen(port, () =>{
    console.log(`Server runs on the port: ${port}`)
})