import React, { createContext, useContext, useState, useEffect } from "react";

const ContrastContext = createContext();

export const ContrastProvider = ({ children }) => {
  const [contrast, setContrast] = useState("normal");

  const toggleContrast = () => {
    setContrast((prev) =>
      prev === "normal-contrast" ? "high-contrast" : "normal-contrast"
    );
  };

  useEffect(() => {
    document.body.className = contrast;
  }, [contrast]);

  return (
    <ContrastContext.Provider value={{ contrast, toggleContrast }}>
      {children}
    </ContrastContext.Provider>
  );
};

export const useContrast = () => useContext(ContrastContext);
