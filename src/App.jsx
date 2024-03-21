import { useState } from "react";
import data from "./assets/product.json";
function App() {
  return (
    <>
      {data.map(() => {
        return <div>{data.products[0].id}</div>;
      })}
    </>
  );
}

export default App;
