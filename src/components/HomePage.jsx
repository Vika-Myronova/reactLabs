import React, { useState } from "react";
import CountryList from "./CountryList";
import AboutSection from "./AboutSection";
import AddCountryForm from "./AddCountyForm";
import Link from "next/link";

const HomePage = ({ countries, onSelectCountry, onAddCountry }) => {
  const [isAddingCountry, setIsAddingCountry] = useState(false);

  const handleAddCountry = (newCountry) => {
    onAddCountry(newCountry);
    setIsAddingCountry(false);
  };

  return (
    <div className="home-page">
      <div className="header">
        <Link href="/country/add-country">
          <button className="add-country-btn">Додати країну</button>
        </Link>
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
