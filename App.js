import "./App.css";
import Navbar from "./Navbar";
import Mainpage from "./Mainpage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ height: "100vw" }}>
        <Mainpage />
      </div>
    </div>
  );
}

export default App;
