import "./App.css";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import Products from "./components/pages/ProductsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row container">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
