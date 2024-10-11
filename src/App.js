import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-2">Side Bar</div>
          <div className="col-10">Home Page</div>
        </div>
      </div>
    </div>
  );
}

export default App;
