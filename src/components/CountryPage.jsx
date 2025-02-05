import React, { useEffect } from "react";
import { useCountryStore } from "@/store/countryStore";
import { useQuizStore } from "@/store/quizStore";
import CountryDetails from "./CountryDetails";
import Quiz from "./Quiz";
import PhrasesList from "./PhrasesList";
import TraditionsList from "./TraditionsList";
import VirtualTable from "./VirtualTable";
import "./CountryPage.css";

const CountryPage = () => {
  const { selectedCountry } = useCountryStore();

  if (!selectedCountry) {
    return (
      <div className="country-page">
        <p className="error-message">
          Country not found. Please select a valid country.
        </p>
      </div>
    );
  }

  return (
    <div className="country-page">
      <section className="country-header">
        <CountryDetails country={selectedCountry} />
      </section>

      <section className="country-content">
        {selectedCountry.phrases?.length > 0 && (
          <div className="phrases-section">
            <PhrasesList phrases={selectedCountry.phrases} />
          </div>
        )}
        {selectedCountry.traditions?.length > 0 && (
          <div className="traditions-section">
            <TraditionsList traditions={selectedCountry.traditions} />
          </div>
        )}
        {selectedCountry.moreDetails && (
          <div className="details-section">
            <h2>More Details</h2>
            <VirtualTable details={selectedCountry.moreDetails[0]} />
          </div>
        )}
      </section>
      <section className="quiz-section">
        <h2>Test Your Knowledge</h2>
        {selectedCountry.quizQuestions?.length > 0 ? <Quiz /> : null}
      </section>
    </div>
  );
};

export default CountryPage;
