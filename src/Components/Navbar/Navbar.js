import React from "react";
import logo from "../../assets/logo.webp";
import { styles } from "./Navbar.style";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = ({ nombreUsuario}) => {


  const categorias = [
    {nombre:"Novedades", id:0, ruta:"#"},
    {nombre:"Hombre", id:1, ruta:"#"},
    {nombre:"Mujer", id:2, ruta:"#"},
    {nombre:"Niño/a", id:3, ruta:"#"},
    {nombre:"Descuentos", id:4, ruta:"#"}
    ,
  ];

  return (
    <nav>
      <div class="nav-wrapper" style={styles.container}>
        <img style={styles.imagenes} src={logo} alt="tienda online" />
         <a href="#" > {nombreUsuario}</a>

        <ul>
          {
            categorias.map((categoria)=>{
              return <li><a key={categoria.id} style={styles.categorias} href={categoria.ruta}>{categoria.nombre}</a></li>
            })
          }
        </ul>
        <CartWidget/>
      </div>
    </nav>
  );
};

export default Navbar;
