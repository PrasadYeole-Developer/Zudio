import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductsProvider from "./context/ProductsProvider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductsProvider>
      <ToastContainer />
      <App />
    </ProductsProvider>
  </BrowserRouter>
);
