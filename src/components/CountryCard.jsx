import React from "react";

const CountryCard = ({ country, onSelect }) => {
  return (
    <div onClick={onSelect} className="country-card">
      <img src={country.flag} alt={country.name} />
      <h3>{country.name}</h3>
    </div>
  );
};

export default CountryCard;
