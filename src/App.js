import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="appContainer">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
