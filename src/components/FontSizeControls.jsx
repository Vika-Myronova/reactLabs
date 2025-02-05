import React from "react";
import { useFontSize } from "../context/FontSizeProvider";
import styles from "@/styles/FontSizeControls.module.css";

const FontSizeControls = () => {
  const { increaseFontSize, decreaseFontSize } = useFontSize();

  return (
    <div className={styles.controls}>
      <button onClick={decreaseFontSize} className={styles.button}>
        Зменшити текст
      </button>
      <button onClick={increaseFontSize}>Збільшити текст</button>
    </div>
  );
};

export default FontSizeControls;
