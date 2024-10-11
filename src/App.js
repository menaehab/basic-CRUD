import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row container">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
