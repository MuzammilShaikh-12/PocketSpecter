import mongoose, { mongo } from 'mongoose';
import config from '../config';

const connect = async () => {
  try {
    await mongoose.connect(config.MONGO_DB as string);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connect;
