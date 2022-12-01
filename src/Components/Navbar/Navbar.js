 import React from "react";
import logo from "../../assets/logo.webp";
import { CartWidget } from "../CartWidget/CartWidget";
import { styles } from "./Navbar.style";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const categorias = [
    { nombre: "Hombre", id: 0, ruta: "/categoria/hombre" },
    { nombre: "Mujer", id: 1, ruta: "/categoria/mujer" },
    { nombre: "Niños", id: 2, ruta: "/categoria/niños" },
  ];

  return (
    <header style={styles.container}>
      <Link style={styles.imagenes} to="/">
        <img style={styles.imagenes} src={logo} alt="tienda online" />
      </Link>
      <nav>
        {categorias.map((categoria) => {
          return (
            <NavLink
              key={categoria.id}
              style={styles.categorias}
              to={categoria.ruta}
            >
              {categoria.nombre}
            </NavLink>
          );
        })}
      </nav>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </header>
  );
};

export default Navbar;