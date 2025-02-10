import { FiAlertTriangle } from "react-icons/fi";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./page404.scss";

import React from "react";

function Page404(props) {
  return (
    <div className="page404Container">
      <main>
      <FiAlertTriangle /><p> Page non trouvée</p>
      </main>
    </div>
  );
}

export default Page404;
