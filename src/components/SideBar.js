import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar col-md-3 col-lg-2 p-3" style={{ height: "100vh" }}>
      <h5>Menu</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-black active" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-black" to="/products">
            Products
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
