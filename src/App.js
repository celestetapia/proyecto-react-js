import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

const App = () => {
  let nombre = "MCShoes";
  const mensaje = "Aquí encontrarás las mejores ofertas";

  return (
    <>
      <Navbar nombreUsuario={nombre} apellidoUsuario="Tapia" />
      <ItemListContainer greeting={mensaje} />
    </>
  );
};

export default App;
