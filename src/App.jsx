import React from "react";
import Welcome from './componentes/Welcome'
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import NavBar from "./componentes/NavBar";
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route exact path="/producto/:productoId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
};



export default App


