import React, { useEffect } from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ saludo }) => {
      /*const [items, setItems] = useState([]);

      useEffect(() => {
          const promesa = new Promise((resolve) => {
              setTimeout (() => {
                 resolve(arrayProductos);
              }, 2000);
          });
            promesa.then((respuesta) => {
              setItems(respuesta);
            });
      }, []); */
  
 return <div>{saludo}
  <ItemCount stock={6}/>

  </div>;

  
};

export default ItemListContainer
