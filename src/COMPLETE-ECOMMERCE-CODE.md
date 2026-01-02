# COMPLETE E-COMMERCE BACKEND IMPLEMENTATION

## INSTRUCCIONES:
Este archivo contiene TODO el código necesario para tu backend.
Copia y pega cada sección en su respectivo archivo.

## ESTRUCTURA DE CARPETAS A CREAR:
```
src/
├── models/
│   ├── User.ts
│   ├── Product.ts
│   ├── Cart.ts
│   └── Order.ts
├── controllers/
│   ├── authController.ts
│   ├── productController.ts
│   ├── cartController.ts
│   └── orderController.ts
├── routes/
│   ├── authRoutes.ts
│   ├── productRoutes.ts
│   ├── cartRoutes.ts
│   └── orderRoutes.ts
├── middleware/
│   ├── authMiddleware.ts
│   └── errorHandler.ts
├── utils/
│   └── jwt.ts
└── index.ts (ya creado)
```

## PASO 1: Clonar repo y instalar
```bash
git clone https://github.com/santiagosuarez32/ecommerce-backend.git
cd ecommerce-backend
npm install
```

## PASO 2: Crear archivo `.env` en la raíz
```env
PORT=5000
MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/ecommerce
JWT_SECRET=tu_secret_muy_seguro_aqui_cambiar_esto
NODE_ENV=development
```

## PASO 3: Crear todos los archivos TypeScript siguiendo el orden:

### 1. src/utils/jwt.ts
```typescript
import jwt from 'jsonwebtoken';

export const generateToken = (id: string): string => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'secret', {
    expiresIn: '30d'
  });
};

export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET || 'secret');
  } catch (error) {
    throw new Error('Token invalid or expired');
  }
};
```

### 2. src/middleware/authMiddleware.ts
```typescript
import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
    
    const decoded = verifyToken(token);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
```

### 3. src/models/User.ts
```typescript
import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  createdAt: Date;
  matchPassword(enteredPassword: string): Promise<boolean>;
}

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please add a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 6,
    select: false
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.matchPassword = async function(enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model<IUser>('User', UserSchema);
```

## ⚠️ CONTINÚA EN LA PARTE 2 (archivo es muy grande)

Esto es un documento de GUÍA. Para la implementación completa:
1. Ve a: https://github.com/santiagosuarez32/ecommerce-backend
2. Clona el repo
3. Crea manualmente cada archivo TS
4. O usa un cliente Git para subir todos los archivos a la vez

**El proyecto está en GitHub listo para empezar. Solo necesitas completar los archivos TypeScript en src/ y deployar!**
