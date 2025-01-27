"use client";

import React, { useState } from "react";
import HomePage from "../pages/HomePage";
import CountryPage from "../pages/CountryPage";
import countriesData from "/public/data/countries.json";
import { ThemeProvider } from "@/context/ThemeContext";
import { FontSizeProvider } from "@/context/FontSizeProvider";
import { ContrastProvider } from "@/context/ContrastProvider";
import ContrastControls from "@/components/ContrastControls";
import FontSizeControls from "@/components/FontSizeControls";

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
      <FontSizeProvider>
        <ContrastProvider>
          <FontSizeControls />
          <ContrastControls />
          {selectedCountry ? (
            <CountryPage country={selectedCountry} />
          ) : (
            <HomePage
              countries={countries}
              onSelectCountry={handleSelectCountry}
              onAddCountry={handleAddCountry}
            />
          )}
        </ContrastProvider>
      </FontSizeProvider>
    </ThemeProvider>
  );
}
