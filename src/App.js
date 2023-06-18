import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import "./server";

function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
