import dotenv from 'dotenv';
dotenv.config();

const config = {
  PORT: 3000,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  CLIENT_ID: process.env.CLIENT_ID,
  SESSION_SECRET: process.env.SESSION_SECRET,
  MONGO_DB: process.env.MONGO_DB,
};

export default config;
