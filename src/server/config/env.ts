import * as dotenv from 'dotenv';

dotenv.config();
export const config = {
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/zenzzo',
  nodeEnv: process.env.NODE_ENV || 'development',
} as const;
