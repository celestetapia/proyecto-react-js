import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { ItemListContainer } from "./Containers/ItemListContainer/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Containers/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  let nombre = "MCShoes";
  const mensaje = "Las mejores ofertas";

  return (
    <>
      <BrowserRouter>
        <Navbar nombreUsuario={nombre} apellidoUsuario="pepe" />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={mensaje} />}/>
          <Route path="/categoria/:id" element={<ItemListContainer greeting={mensaje} />}/>
          <Route path="/producto/:id" element={<ItemDetailContainer />}/>
          <Route path="*" element={<ItemListContainer />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
