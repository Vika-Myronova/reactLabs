import React from "react";

const TraditionsList = ({ traditions }) => {
  return (
    <>
      <h3>Traditions</h3>
      <ul>
        {traditions.map((tradition, index) => (
          <li key={index}>{tradition}</li>
        ))}
      </ul>
    </>
  );
};

export default TraditionsList;
