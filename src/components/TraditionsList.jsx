import React from "react";

const TraditionsList = ({ traditions }) => {
  return (
    <div>
      <h3>Traditions</h3>
      <ul>
        {traditions.map((tradition, index) => (
          <li key={index}>{tradition}</li>
        ))}
      </ul>
    </div>
  );
};

export default TraditionsList;
