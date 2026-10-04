// backend/routes/productos.js
const express = require('express');
const router = express.Router();
const productos = require('../data/productos');

// GET /api/productos -> listado completo en JSON
router.get('/', (req, res) => {
  res.json(productos);
});

// GET /api/productos/:id -> producto parcial, 404 si no existe
router.get('/:id', (req, res) => {
  const productoId = parseInt(req.params.id);
  const producto = productos.find(p => p.id === productoId);

  if (!producto) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  res.json(producto);
});

module.exports = router;