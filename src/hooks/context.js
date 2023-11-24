import React, { useState } from "react";

const initialState = {
  DP: null,
  DNPLeft: null,
  DNPRight: null,
};

export const AppContext = React.createContext(initialState);

const ContextProvider = ({ children }) => {
  const [distancia, setDistancia] = useState(initialState);

  return (
    <AppContext.Provider value={{ distancia, setDistancia }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
