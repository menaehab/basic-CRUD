import "./App.css";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import Products from "./components/pages/ProductsPage";
import AddProduct from "./components/pages/AddProduct";
import ProductDetails from "./components/pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <div className="content col-md-9 col-lg-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/add" element={<AddProduct />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
