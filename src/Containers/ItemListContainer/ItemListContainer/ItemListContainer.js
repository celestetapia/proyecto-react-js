import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { styles } from "./ItemListContainer.style";
import { collection, getDocs, getFirestore } from "firebase/firestore";


export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { id } = useParams();
  const db = getFirestore();

  const prodCollection = collection(db, "items");

  useEffect(() => {

    getDocs(prodCollection)
    .then((result) => {
      const listProducts = result.docs.map((item) => {
        return {
          ...item.data(),
          id: item.id        };
      });
      setProducts(listProducts);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(setLoading(false));

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