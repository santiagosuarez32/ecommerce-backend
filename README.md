# E-Commerce Backend API

## 🎯 Descripción

Backend API para una plataforma de e-commerce construido con Node.js, Express, TypeScript y MongoDB. Incluye autenticación con JWT, operaciones CRUD para productos, carrito de compras y gestión de órdenes.

**Repositorio:** https://github.com/santiagosuarez32/ecommerce-backend

## 🛠️ Tecnologías

- **Runtime:** Node.js
- **Framework:** Express.js
- **Lenguaje:** TypeScript
- **Base de Datos:** MongoDB + Mongoose
- **Autenticación:** JWT (JSON Web Tokens)
- **Criptografía:** bcryptjs
- **Validación:** express-validator
- **CORS:** habilitado

## 📋 Requisitos

- Node.js v16 o superior
- npm o yarn
- MongoDB Atlas (cloud) o MongoDB local
- Variables de entorno configuradas

## 📦 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/santiagosuarez32/ecommerce-backend.git
cd ecommerce-backend
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
PORT=5000
MONGODB_URI=mongodb+srv://usuario:contraseña@cluster.mongodb.net/ecommerce
JWT_SECRET=tu_secret_key_muy_segura_aqui
NODE_ENV=development
```

### 4. Compilar TypeScript

```bash
npm run build
```

## ▶️ Ejecución

### Modo desarrollo (con reinicio automático)

```bash
npm run dev
```

### Modo producción

```bash
npm run build
npm start
```

## 📚 Estructura del Proyecto

```
src/
├── models/           # Esquemas de MongoDB
│   ├── User.ts
│   ├── Product.ts
│   ├── Cart.ts
│   └── Order.ts
├── controllers/      # Lógica de negocio
│   ├── authController.ts
│   ├── productController.ts
│   ├── cartController.ts
│   └── orderController.ts
├── routes/          # Rutas de la API
│   ├── authRoutes.ts
│   ├── productRoutes.ts
│   ├── cartRoutes.ts
│   └── orderRoutes.ts
├── middleware/      # Middlewares personalizados
│   ├── authMiddleware.ts
│   ├── errorHandler.ts
│   └── validation.ts
├── utils/          # Funciones auxiliares
│   ├── jwt.ts
│   └── validators.ts
├── config/         # Configuración
│   └── database.ts
└── index.ts        # Punto de entrada
```

## 🔑 Endpoints Principales

### Autenticación

- `POST /api/auth/register` - Registrar nuevo usuario
- `POST /api/auth/login` - Iniciar sesión

### Productos

- `GET /api/products` - Obtener todos los productos
- `GET /api/products/:id` - Obtener producto por ID
- `POST /api/products` - Crear producto (admin)
- `PUT /api/products/:id` - Actualizar producto (admin)
- `DELETE /api/products/:id` - Eliminar producto (admin)

### Carrito

- `GET /api/cart` - Obtener carrito del usuario
- `POST /api/cart` - Agregar producto al carrito
- `PUT /api/cart/:itemId` - Actualizar cantidad
- `DELETE /api/cart/:itemId` - Eliminar del carrito

### Órdenes

- `POST /api/orders` - Crear orden
- `GET /api/orders` - Obtener órdenes del usuario
- `GET /api/orders/:id` - Obtener orden por ID

## 🔒 Autenticación

La mayoría de endpoints requieren autenticación via JWT. Envía el token en el header:

```
Authorization: Bearer <tu_token_jwt>
```

## 📝 Notas de Desarrollo

### Crear un archivo .env

Por favor, NO commits el archivo `.env`. Está en `.gitignore`.

### Modelos Mongoose

Cada modelo debe definir sus tipos TypeScript y esquema Mongoose.

### Validación de Datos

Utiliza `express-validator` para validar solicitudes entrantes.

### Manejo de Errores

Todos los errores deben pasar por el middleware `errorHandler`.

## 📖 Ejemplo de Uso

### 1. Registrar usuario

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "password123", "name": "John"}'
```

### 2. Iniciar sesión

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "password123"}'
```

### 3. Obtener productos

```bash
curl http://localhost:5000/api/products
```

## 🌐 Deployment

### Vercel

1. Instala Vercel CLI: `npm install -g vercel`
2. Configura tu `vercel.json`
3. Deploy: `vercel`

### Render

1. Conecta tu repositorio GitHub
2. Configura variables de entorno en el dashboard
3. Deploy automático en cada push

## 🤝 Contribuir

Este es un proyecto educativo. Para mejoras o correcciones:

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/mejora`)
3. Commit cambios (`git commit -am 'Agrega mejora'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

## 📄 Licencia

MIT License

## 👨‍💻 Autor

Santiago Suárez - Proyecto integrador NUCBA Backend

## 📞 Soporte

Para preguntas o reportar problemas, abre un issue en GitHub.

---

**Última actualización:** Enero 2026
