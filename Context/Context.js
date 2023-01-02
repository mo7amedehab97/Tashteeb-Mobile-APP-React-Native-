import React, { useState, createContext } from "react";
const Context = createContext();
function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [engData, setEngData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  return (
    <Context.Provider
      value={{
        data,
        setData,
        engData,
        setEngData,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export { ContextProvider, Context };
