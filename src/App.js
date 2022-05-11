import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import PageIndex from "./pages/page_index";
import PageReg from "./pages/page_reg";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageIndex />} />
        <Route path="/reg" element={<PageReg />} />
      </Routes>
    </BrowserRouter>

    // <Router>
    //   <React.Fragment>
    //     <Switch>

    //       <Route path="/reg">
    //         <PageReg />
    //       </Route>

    //       <Route path="/">
    //         <PageIndex />
    //       </Route>
    //     </Switch>
    //   </React.Fragment>
    // </Router>
  );
}

export default App;
