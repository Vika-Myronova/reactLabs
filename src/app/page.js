"use client";

import React, { useState } from "react";
import HomePage from "../pages/HomePage";
import CountryPage from "../pages/CountryPage";
import countriesData from "/public/data/countries.json";

export default function Home() {
  const [countries, setCountries] = useState(countriesData);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };

  const handleAddCountry = (newCountry) => {
    setCountries((prevCountries) => [...prevCountries, newCountry]);
  };

  return (
    <div>
      {selectedCountry ? (
        <CountryPage country={selectedCountry} />
      ) : (
        <HomePage
          countries={countries}
          onSelectCountry={handleSelectCountry}
          onAddCountry={handleAddCountry}
        />
      )}
    </div>
  );
}
