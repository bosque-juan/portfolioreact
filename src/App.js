import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./presentational/Nav";
import Home from "./presentational/Home";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/home" Component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
