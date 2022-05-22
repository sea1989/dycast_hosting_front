import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import PageIndex from "./pages/page_index";
import PageReg from "./pages/page_reg";
import PageLand from "./pages/page_land";
import PageAdd from "./pages/PageAdd";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageIndex />} />
        <Route path="/reg" element={<PageReg />} />
        <Route path="/land" element={<PageLand />} />
        <Route path="/new" element={<PageAdd />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
