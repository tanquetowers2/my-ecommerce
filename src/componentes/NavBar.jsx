import React from "react";
import CartWidget  from "./CartWidget";
import Link from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

const NavBar = () => {
   return (
        <div>
            <li>
                <Link to={"/"}>
                    Inicio
                </Link>
            </li>
            <li>
                <Link to={"/cart"}>
                    <CartWidget/>
                </Link>
            </li>
            <li>
                <Link to={"/productos"}>
                    Productos
                </Link>
            </li>
         </div>
    );

};

export default NavBar