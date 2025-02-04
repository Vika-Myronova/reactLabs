"use client";

import React, { useEffect } from "react";
import HomePage from "@/components/HomePage";
import { ThemeProvider } from "@/context/ThemeContext";
import { FontSizeProvider } from "@/context/FontSizeProvider";
import { ContrastProvider } from "@/context/ContrastProvider";
import ContrastControls from "@/components/ContrastControls";
import FontSizeControls from "@/components/FontSizeControls";
import { useCountryStore } from "@/store/countryStore";

export default function Home() {
  const { fetchCountries, countries } = useCountryStore();

  useEffect(() => {
    if (countries.length === 0) {
      fetchCountries();
    }
  }, [countries, fetchCountries]);

  return (
    <ThemeProvider>
      <FontSizeProvider>
        <ContrastProvider>
          <FontSizeControls />
          <ContrastControls />
          <HomePage />
        </ContrastProvider>
      </FontSizeProvider>
    </ThemeProvider>
  );
}
