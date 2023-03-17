import React, { useEffect } from "react";
import products from "../products.json";

const ItemDetailContainer = () => {
    const [items, setItems] = useState([]);

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

 return (<div>

 </div>)

};

export default ItemDetailContainer
