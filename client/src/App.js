import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import List from "./List";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/list" element={<List />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
