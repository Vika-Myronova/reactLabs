import React from "react";
import CountryList from "./CountryList";
import AboutSection from "./AboutSection";
import { ROUTES } from "@/constants/routes";
import { useCountryStore } from "@/store/countryStore";
import Link from "next/link";

const HomePage = () => {
  const { filteredCountries } = useCountryStore();

  return (
    <div className="home-page">
      <div className="header">
        <Link href={ROUTES.ADD_COUNTRY}>
          <button className="add-country-btn">Додати країну</button>
        </Link>
      </div>
      <AboutSection />
      <CountryList countries={filteredCountries} />
    </div>
  );
};

export default HomePage;
