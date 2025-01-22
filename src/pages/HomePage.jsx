import React, { useState } from "react";
import CountryList from "../components/CountryList";
import AboutSection from "../components/AboutSection";
import AddCountryForm from "../components/AddCountyForm";
import { useTheme } from "@/context/ThemeContext";

const HomePage = ({ countries, onSelectCountry, onAddCountry }) => {
  const [isAddingCountry, setIsAddingCountry] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleAddCountry = (newCountry) => {
    onAddCountry(newCountry);
    setIsAddingCountry(false);
  };

  return (
    <div className="home-page">
      <div className="header">
        <h1>Культурна спадщина</h1>
        <button
          className="add-country-btn"
          onClick={() => setIsAddingCountry(true)}
        >
          Додати країну
        </button>
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === "light" ? "Темна Тема" : "Світла Тема"}
        </button>
      </div>
      {isAddingCountry ? (
        <AddCountryForm onSubmit={handleAddCountry} />
      ) : (
        <>
          <AboutSection />
          <CountryList
            countries={countries}
            onSelectCountry={onSelectCountry}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
