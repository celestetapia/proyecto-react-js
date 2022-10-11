

import { styles } from "./ItemListContainer.style";

const ItemListContainer = ({greeting}) => {
   return (
    <div style={styles.div_oferta}>
        <h1 style={styles.container}>
            {greeting}
        </h1>
    </div>
   ) 
}


export default ItemListContainer;