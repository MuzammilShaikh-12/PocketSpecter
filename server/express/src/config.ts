import dotenv from 'dotenv';
dotenv.config();

const config = {
  EXPRESS_PORT: process.env.EXPRESS_PORT,
  CLIENT_PORT: process.env.CLIENT_PORT,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  CLIENT_ID: process.env.CLIENT_ID,
  SESSION_SECRET: process.env.SESSION_SECRET,
  MONGO_DB: process.env.MONGO_DB,
};

export default config;
