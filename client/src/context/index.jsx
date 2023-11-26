import React, { createContext, useEffect, useState } from 'react';
import cartDataInit from '../data/cart.json'

const MyContext = createContext()

export default MyContext

function MyContextProvider({ children }) {
  const [globalState, setGlobalState] = useState({
    authentication: localStorage.getItem('authentication'),
    cart: [
      ...cartDataInit
    ],
    order: []
  })

  return (
    <MyContext.Provider value={{ globalState: globalState, setGlobalState: setGlobalState }}>
      {children}
    </MyContext.Provider>
  );
}

export {
  MyContextProvider
}
