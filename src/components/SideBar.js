function Sidebar() {
  return (
    <div
      className="d-flex flex-column bg-light p-3 sidebar"
      style={{ height: "100vh" }}
    >
      <h5>Menu</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link text-black active" href="/#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black" href="/#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black" href="/#">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black" href="/#">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
