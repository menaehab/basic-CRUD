import "./App.css";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import { Outlet, Route, Routes } from "react-router-dom";
import Products from "./components/pages/ProductsPage";
import AddProduct from "./components/pages/AddProduct";
import ProductDetails from "./components/pages/ProductDetails";
import EditProduct from "./components/pages/EditProduct";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <div className="content col-md-9 col-lg-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Outlet />}>
              <Route path="" element={<Products />} />
              <Route path="add" element={<AddProduct />} />
              <Route path="edit/:productId" element={<EditProduct />} />
              <Route path=":productId" element={<ProductDetails />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
