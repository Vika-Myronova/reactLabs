import React from "react";
import { useContrast } from "../context/ContrastProvider";

const ContrastControls = () => {
  const { toggleContrast } = useContrast();

  return <button onClick={toggleContrast}>АА</button>;
};

export default ContrastControls;
