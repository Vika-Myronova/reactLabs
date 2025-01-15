import React from "react";
import CountryList from "../components/CountryList";

const HomePage = ({ countries, onSelectCountry }) => {
  return (
    <div>
      <h1>Welcome to the Cultural Heritage App</h1>
      <CountryList countries={countries} onSelectCountry={onSelectCountry} />
    </div>
  );
};

export default HomePage;
