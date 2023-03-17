import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../products.json";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { userId } = useParams()

      useEffect(() => {
          const promesa = new Promise((resolve) => {
              setTimeout (() => {
                 resolve(products);
              }, 2000);
          });
            promesa.then((respuesta) => {
              setItems(respuesta);
            });
      }, []);

 return <div>
  <ItemList />

  <ItemCount stock={6}/>

  </div>;


};

export default ItemListContainer
