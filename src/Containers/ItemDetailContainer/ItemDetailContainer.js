import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDocs, query, where, collection, doc, getFirestore } from "firebase/firestore";

export const ItemDetailContainer = ({ greeting }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const db = getFirestore();
  console.log(`Getting information for product: ${id}`);


  useEffect(() => {
    let collectionQuery;

    const productCollection = collection(db, "items");
    collectionQuery = query(productCollection, where('__name__', '==', id));


    getDocs(collectionQuery)
      .then((result) => {
        const listProducts = result.docs.map((item) => {
          return {
            ...item.data(),
          };
        });
        setProduct(listProducts[0]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(setLoading(false));
  }, [id]);


  return (
    <>
      <h1>{greeting}</h1>
      {<>{loading ? <h1>Cargando...</h1> : <ItemDetail product={product} />}</>}
    </>
  );
};
