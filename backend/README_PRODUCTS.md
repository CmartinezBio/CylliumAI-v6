# Sistema de Almacenamiento de Productos - Cyllium

## 📋 Descripción

Sistema de almacenamiento de productos de impacto ambiental que permite a los usuarios guardar, gestionar y recuperar sus cálculos de huella de carbono.

## 🏗️ Arquitectura

- **Backend:** Flask hosteado en Render
- **Frontend:** JavaScript hosteado en GitHub Pages
- **Almacenamiento:** Archivos JSON organizados por usuario
- **Fallback:** localStorage del navegador si la API falla

## 📁 Estructura de Datos

### Directorio de Usuarios
```
data/
└── users/
    ├── user_123/
    │   └── products.json
    └── user_456/
        └── products.json
```

### Estructura de Producto
```json
{
  "id": "uuid-unique-id",
  "name": "Empaque Eco-friendly",
  "components": [
    {
      "name": "Empaque primario",
      "type": "primary",
      "material": "bioe8i-resin",
      "weight": 0.1
    }
  ],
  "productionVolume": 1000,
  "totalImpact": {
    "co2": 131.0
  },
  "date": "2024-01-15T10:30:00Z",
  "lastModified": "2024-01-15T10:30:00Z"
}
```

## 🚀 API Endpoints

### GET `/api/users/{user_id}/products`
Obtener todos los productos de un usuario.

**Respuesta:**
```json
{
  "success": true,
  "products": [...],
  "count": 5
}
```

### POST `/api/users/{user_id}/products`
Crear un nuevo producto.

**Cuerpo de la petición:**
```json
{
  "name": "Mi Producto",
  "components": [...],
  "productionVolume": 1000,
  "totalImpact": { "co2": 131.0 }
}
```

### GET `/api/users/{user_id}/products/{product_id}`
Obtener un producto específico.

### PUT `/api/users/{user_id}/products/{product_id}`
Actualizar un producto existente.

### DELETE `/api/users/{user_id}/products/{product_id}`
Eliminar un producto.

## 🔧 Configuración Frontend

En `js/main.js`, configurar la URL del backend:

```javascript
const API = "https://cyllium-backend-v3.onrender.com";
```

## 🛡️ Manejo de Errores

El sistema implementa un fallback automático:

1. **Primera opción:** Usar API del backend
2. **Fallback:** Usar localStorage del navegador si la API falla
3. **Logs:** Todos los errores se registran en la consola

## 👤 Gestión de Usuarios

- Se genera un `userId` único por navegador
- Se almacena en localStorage: `localStorage.getItem('userId')`
- Formato: `user_{timestamp}_{random}`

## 🔄 Funciones Principales

### Frontend (JavaScript)
- `saveProduct(productData)` - Guardar producto
- `loadUserProducts()` - Cargar productos del usuario
- `deleteProduct(productId)` - Eliminar producto
- `getProduct(productId)` - Obtener producto específico
- `displayProducts()` - Mostrar productos en la UI

### Backend (Python/Flask)
- `load_user_products(user_id)` - Cargar desde archivo
- `save_user_products(user_id, products)` - Guardar a archivo
- Endpoints REST para CRUD de productos

## 📊 Métricas Soportadas

Actualmente solo se almacena:
- **CO₂ equivalente** (kg)
- Volumen de producción
- Componentes y materiales

## 🚀 Despliegue

### Backend (Render)
1. Hacer push del código actualizado
2. Render detecta cambios automáticamente
3. Los datos se almacenan en el filesystem de Render

### Frontend (GitHub Pages)
1. Hacer push a la rama principal
2. GitHub Pages se actualiza automáticamente

## ⚠️ Consideraciones

- **Persistencia:** Los datos en Render pueden perderse en redeploys
- **Escalabilidad:** Para producción, considerar base de datos real
- **Seguridad:** Actualmente no hay autenticación de usuarios
- **Backup:** No hay sistema de backup automático

## 🔮 Mejoras Futuras

1. **Base de datos:** PostgreSQL o MongoDB
2. **Autenticación:** Sistema de login real
3. **Backup:** Sincronización con servicio de almacenamiento
4. **Caché:** Redis para mejor rendimiento
5. **Análisis:** Métricas de uso y estadísticas 