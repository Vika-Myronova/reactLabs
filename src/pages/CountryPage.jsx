import React from "react";
import CountryDetails from "../components/CountryDetails";
import Quiz from "../components/Quiz";
import PhrasesList from "../components/PhrasesList";
import TraditionsList from "../components/TraditionsList";
import "./CountryPage.css";

const CountryPage = ({ country }) => {
  return (
    <div className="country-page">
      <section className="country-header">
        <CountryDetails country={country} />
      </section>
      <section className="country-content">
        <div className="phrases-section">
          <PhrasesList phrases={country.phrases} />
        </div>
        <div className="traditions-section">
          <TraditionsList traditions={country.traditions} />
        </div>
      </section>
      <section className="quiz-section">
        <h2>Test Your Knowledge</h2>
        <Quiz questions={country.quizQuestions} />
      </section>
    </div>
  );
};

export default CountryPage;
