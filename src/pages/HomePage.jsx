import React from "react";
import CountryList from "../components/CountryList";
import AboutSection from "../components/AboutSection";

const HomePage = ({ countries, onSelectCountry }) => {
  return (
    <div>
      {/* <h1>Welcome to the Cultural Heritage App</h1> */}
      <div>
        <AboutSection />
      </div>
      <CountryList countries={countries} onSelectCountry={onSelectCountry} />
    </div>
  );
};

export default HomePage;
