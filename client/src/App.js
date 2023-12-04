import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import List from "./List";
import Home from "./Home";
import Saved from "./Saved";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/saved" element={<Saved />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
