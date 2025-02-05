"use client";

import React, { useState } from "react";
import HomePage from "../pages/HomePage";
import CountryPage from "../pages/CountryPage";
import countriesData from "../data/countries.json";

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      {selectedCountry ? (
        <CountryPage country={selectedCountry} />
      ) : (
        <HomePage
          countries={countriesData}
          onSelectCountry={handleSelectCountry}
        />
      )}
    </div>
  );
}
