import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import DistributionValidation from "./pages/DistributionValidation/DistributionValidation";
import InfoSup from "./pages/InfosSup/InfoSup";
import ObjectDetails from "./pages/ObjectDetails/ObjectDetails";
import ObjectScan from "./pages/ObjectScan/ObjectScan";
import ObjectsList from "./pages/ObjectsList/ObjectsList";
import Page404 from "./pages/Page404/Page404";
import Recap from "./pages/Recap/Recap";
import SignatureType from "./pages/SignatureType/SignatureType";
import Signature from "./pages/Signature/Signature";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App/>}> */}
        <Route path="/" element={<Recap />} />
        <Route path="/ObjectList" element={<ObjectsList />} />
        <Route path="/ObjectDetails" element={<ObjectDetails />} />
        <Route
          path="/DistributionValidation"
          element={<DistributionValidation />}
        />
        <Route path="/ObjectScan" element={<ObjectScan />} />
        <Route path="/InfosSup" element={<InfoSup />} />
        <Route path="/SignatureType" element={<SignatureType />} />
        <Route path="/Signature" element={<Signature />} />
        <Route path="/Page404" element={<Page404 />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
