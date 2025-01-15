import React from "react";
import FlagDisplay from "./FlagDisplay";

const CountryDetails = ({ country }) => {
  return (
    <div>
      <FlagDisplay flag={country.flag} />
      <h2>{country.name}</h2>
      <p>{country.description}</p>
    </div>
  );
};

export default CountryDetails;
