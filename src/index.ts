import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce';

// Middlewares
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://ecommerce-frontend.vercel.app'] 
    : ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true
}));
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(MONGODB_URI).then(() => {
  console.log('✅ MongoDB connected');
}).catch(err => {
  console.error('❌ MongoDB connection error:', err);
  process.exit(1);
});

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'API running perfectly! 🚀' });
});

// Rutas
app.get('/api', (req: Request, res: Response) => {
  res.json({ message: 'E-Commerce API v1.0', version: '1.0.0' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📋 Database: ${MONGODB_URI}`);
});

export default app;
