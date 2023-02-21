import React from "react";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar";


const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer saludo = {"Hola!"}/>
    </div>
  );
};



export default App


