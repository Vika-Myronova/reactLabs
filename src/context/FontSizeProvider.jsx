import React, { createContext, useContext, useState, useEffect } from "react";

const FontSizeContext = createContext();

export const FontSizeProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState("medium");

  const increaseFontSize = () => {
    setFontSize((prev) =>
      prev === "large" ? "large" : prev === "medium" ? "large" : "medium"
    );
  };

  const decreaseFontSize = () => {
    setFontSize((prev) =>
      prev === "small" ? "small" : prev === "medium" ? "small" : "medium"
    );
  };

  useEffect(() => {
    document.body.dataset.fontSize = fontSize;
  }, [fontSize]);

  return (
    <FontSizeContext.Provider
      value={{ fontSize, increaseFontSize, decreaseFontSize }}
    >
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = () => useContext(FontSizeContext);
