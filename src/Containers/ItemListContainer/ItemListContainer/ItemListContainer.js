import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { styles } from "./ItemListContainer.style";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { id } = useParams();

  const URL_BASE = 'https://fakestoreapi.com/products'
  const URL_CAT = `${URL_BASE}/category/${id}`

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(id ? URL_CAT : URL_BASE);
        const data = await res.json();
        setProducts(data);
      } catch {
        console.log("error");
      } finally {
        setLoading(false);
      }
    };
    getProducts();

  }, [id]);

  return (
    <>
      <div style={styles.div_oferta}>
        <h1 style={styles.container}>
            {greeting}
        </h1>
    </div>
      {<>{loading ? <h1>Cargando...</h1> : <ItemList products={products} />}</>}
    </>
  );
};