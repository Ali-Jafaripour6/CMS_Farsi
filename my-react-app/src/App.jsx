import { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Comments from "./Components/Comments/Comments";
import Offs from "./Components/Offs/Offs";
import Orders from "./Components/Orders/Orders";
import Products from "./Components/Products/Products";
import Users from "./Components/Users/Users";

import "./App.css";
function App() {
  return (
    <>
      <Sidebar></Sidebar>
      <div className="main">
        <Header></Header>

        <Routes>
          <Route path="products" element={<Products></Products>}></Route>
          <Route path="comments" element={<Comments></Comments>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
          <Route path="orders" element={<Orders></Orders>}></Route>
          <Route path="offs" element={<Offs></Offs>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
