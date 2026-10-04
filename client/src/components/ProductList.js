import { useState, useEffect } from 'react';

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Gracias al proxy, no hace falta poner http://localhost:3000
    fetch('/api/productos')
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar los productos');
        return res.json();
      })
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando catálogo...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-list">
      <h2>Nuestros Muebles</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {productos.map((producto) => (
          <article key={producto.id} style={{ border: '1px solid #ccc', padding: '15px' }}>
            <h3>{producto.nombre}</h3>
            <p>Categoría: {producto.categoria}</p>
            <p>Precio: ${producto.precio}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProductList;