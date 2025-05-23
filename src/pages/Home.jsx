import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Home() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProductos(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="text-center mt-4">Cargando productos...</p>

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Todos los Productos</h2>
      <div className="row">
        {productos.map((producto) =>
          <div key={producto.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={producto.image} className="card-img-top p-3" alt={producto.title} style={{ height: "250px", objectFit: "contain" }} />
              <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">{producto.price.toFixed(3)}</p>
                <Link to={`/category/${producto.category}`} className="btn btn-primary">
                  Ver más de {producto.category}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;