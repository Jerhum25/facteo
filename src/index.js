import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import Accueil from "./pages/Accueil/Accueil";
import Page404 from "./pages/Page404/Page404";
import Recap from "./pages/Recap/Recap";
import ObjectsList from "./pages/ObjectsList/ObjectsList";
import ObjectDetails from "./pages/ObjectDetails/ObjectDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App/>}> */}
          <Route path="/" element={<Recap />} />
          <Route path="/ObjectList" element={<ObjectsList />} />
          <Route path="/ObjectDetails" element={<ObjectDetails />} />
          <Route path="/Page404" element={<Page404/>} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
