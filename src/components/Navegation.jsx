import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Navegation() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then((res) => setCategorias(res.data))
      .catch((err) => console.error("Error al cargar categorías:", err));
  }, []);

  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {categorias.map((categoria) => (
        <li key={categoria} className="nav-item">
          <Link className="nav-link" to={`/category/${categoria}`}>
            {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Navegation;