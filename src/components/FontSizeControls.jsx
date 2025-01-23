import React from "react";
import { useFontSize } from "../context/FontSizeProvider";

const FontSizeControls = () => {
  const { increaseFontSize, decreaseFontSize } = useFontSize();

  return (
    <div style={{ marginBottom: "1rem" }}>
      <button onClick={decreaseFontSize} style={{ marginRight: "10px" }}>
        Зменшити текст
      </button>
      <button onClick={increaseFontSize}>Збільшити текст</button>
    </div>
  );
};

export default FontSizeControls;
