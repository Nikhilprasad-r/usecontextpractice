import React, { createContext, useState, useEffect } from "react";
import productsData from "./assets/product.json";
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { products } = productsData;
  const [data, setData] = useState(products);

  const [quantities, setQuantities] = useState(data.map(() => 0));

  const increaseQuantity = (index) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index]++;
      return newQuantities;
    });
  };

  const decreaseQuantity = (index) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      if (newQuantities[index] > 0) {
        newQuantities[index]--;
      }
      return newQuantities;
    });
  };

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = data.reduce((acc, item, index) => {
      return acc + item.price * quantities[index];
    }, 0);
    setTotal(newTotal);
  }, [data, quantities]);

  return (
    <DataContext.Provider
      value={{
        data,
        quantities,
        increaseQuantity,
        decreaseQuantity,
        total,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
