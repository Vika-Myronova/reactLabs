"use client";

import React, { useState } from "react";
import HomePage from "../pages/HomePage";
import CountryPage from "../pages/CountryPage";
import countriesData from "/public/data/countries.json";
import { ThemeProvider } from "@/context/ThemeContext";

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
    <ThemeProvider>
      {selectedCountry ? (
        <CountryPage country={selectedCountry} />
      ) : (
        <HomePage
          countries={countries}
          onSelectCountry={handleSelectCountry}
          onAddCountry={handleAddCountry}
        />
      )}
    </ThemeProvider>
  );
}
