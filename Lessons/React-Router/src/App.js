import Home from "./Home.jsx";
import { Routes, Route, Link } from "react-router-dom";
import Currencies from "./Currencies.jsx";
import Price from "./Price.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Bitcoin Prices</Link>
        <Link to="/currencies">Currencies</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/currencies" element={<Currencies />} />
          <Route path="/price/:currency" element={<Price />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
