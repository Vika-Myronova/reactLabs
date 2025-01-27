import React from "react";
import { useContrast } from "../context/ContrastProvider";

const ContrastControls = () => {
  const { contrast, toggleContrast } = useContrast();

  return (
    <button onClick={toggleContrast}>
      {contrast === "normal-contrast"
        ? "Enable High Contrast"
        : "Disable High Contrast"}
    </button>
  );
};

export default ContrastControls;
