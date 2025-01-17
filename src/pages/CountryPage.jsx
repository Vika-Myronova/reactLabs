import React from "react";
import CountryDetails from "../components/CountryDetails";
import Quiz from "../components/Quiz";
import PhrasesList from "../components/PhrasesList";
import TraditionsList from "../components/TraditionsList";
import "./CountryPage.css";

const CountryPage = ({ country }) => {
  if (!country) {
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
        <CountryDetails country={country} />
      </section>
      <section className="country-content">
        {country.phrases?.length > 0 ? (
          <div className="phrases-section">
            <PhrasesList phrases={country.phrases} />
          </div>
        ) : (
          <p className="info-message">No phrases available for this country.</p>
        )}
        {country.traditions?.length > 0 ? (
          <div className="traditions-section">
            <TraditionsList traditions={country.traditions} />
          </div>
        ) : (
          <p className="info-message">
            No traditions available for this country.
          </p>
        )}
      </section>
      <section className="quiz-section">
        <h2>Test Your Knowledge</h2>
        {country.quizQuestions?.length > 0 ? (
          <Quiz questions={country.quizQuestions} />
        ) : (
          <p className="info-message">No quiz available for this country.</p>
        )}
      </section>
    </div>
  );
};

export default CountryPage;
