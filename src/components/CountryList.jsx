import React, { useState } from "react";
import CountryCard from "./CountryCard";

const CountryList = ({ countries, onSelectCountry }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search countries"
      />
      <div className="country-list">
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.id}
            country={country}
            onSelect={() => onSelectCountry(country)}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryList;
