import React, { useEffect, useState } from "react";
import axios from "axios";

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

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Todos los Productos</h2>
      <div className="card-body">
        <h5 className="card-title">Nombre del producto</h5>
        <p className="card-text">precio del producto</p>
      </div>
    </div>


  )
};

export default Home;