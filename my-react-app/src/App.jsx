import { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import { useRoutes } from "react-router-dom";
import DeleteModal from "./Components/DeleteModal/DeleteModal";
import routes from "./routes";

import "./App.css";
function App() {
  const router = useRoutes(routes);
  return (
    <>
      <Sidebar></Sidebar>
      <div className="main">
        <Header></Header>

        {router}
      </div>
    </>
  );
}

export default App;
