import React, { createContext, useState, useEffect } from "react";
import productsData from "./assets/product.json";
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  //imported products data from external json files
  const { products } = productsData;

  const [quantities, setQuantities] = useState(products.map(() => 0));
  // function to increase individual item quantity
  const increaseQuantity = (index) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index]++;
      return newQuantities;
    });
  };
  // function to decrease individual item quantity
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

  // function to calculate total price
  useEffect(() => {
    const newTotal = products.reduce((acc, item, index) => {
      return acc + item.price * quantities[index];
    }, 0);
    setTotal(newTotal);
  }, [products, quantities]);

  return (
    <DataContext.Provider
      value={{
        products,
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
