import mongoose from 'mongoose'

const connectDB = async (): Promise<void> => {
    try {
        const mongoURI: string = process.env.MONGO_URI!;
        const connectingusers = await mongoose.connect(mongoURI);
        console.log(`MongoDB connected to: ${connectingusers.connection.host}`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

export { connectDB }

