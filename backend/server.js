// backend/server.js
const express = require('express');
const app = express();
const PORT = 3000;

const productosRoutes = require('./routes/productos');

// Middleware global de logging (método y URL)
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Middleware express.json() para futuras peticiones POST
app.use(express.json());

// Rutas organizadas
app.use('/api/productos', productosRoutes);

// Manejador de 404 (Rutas no encontradas)
app.use((req, res, next) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Manejador de errores centralizado
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Error interno del servidor" });
});

app.listen(PORT, () => {
  console.log(`Servidor de Hermanos Jota corriendo en http://localhost:${PORT}`);
});