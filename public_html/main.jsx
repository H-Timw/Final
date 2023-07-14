import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./style.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter >
  <App />
  </BrowserRouter>
);
