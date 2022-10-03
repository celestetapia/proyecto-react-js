import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  let nombre = "MCShoes";

  return (
    <>
      <Navbar nombreUsuario={nombre} apellidoUsuario="Tapia" />
    </>
  );
};

export default App;
