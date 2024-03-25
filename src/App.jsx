import React from "react";
import "./App.css";
import CartPage from "./components/CartPage";
import { DataProvider } from "./DataContext";

function App() {
  return (
    <DataProvider>
      <CartPage />
    </DataProvider>
  );
}

export default App;
