import mongoose from 'mongoose';

const connectToDatabase = async()=> {
    try {
        mongoose.set('strictQuery',false)
        const connect = await mongoose.connect(MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            serverSelectionTimeoutMS: 30000, // Increase the timeout to 30 seconds
            socketTimeoutMS: 45000 // Optional, socket timeout
        });
        console.log(`MongoDb connected :${connect.connection.host}`)
    } catch (error) {
        console.log(`MongoDb connected :${error.message}`)
    }
}

export default connectToDatabase;