import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Category() {
  const { categoryName } = useParams();
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setCargando(true);
    axios.get(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => {
        setProductos(res.data);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al obtener productos por categoría:", error);
        setCargando(false);
      });
  }, [categoryName]);

  if (cargando) return <p className="text-center mt-4">Cargando productos de la categoría...</p>;

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Categoría: {categoryName}</h2>
      <div className="row">
        {productos.map((producto) => (
          <div key={producto.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={producto.image} className="card-img-top p-3" alt={producto.title} style={{ height: "250px", objectFit: "contain" }} />
              <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">${producto.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
