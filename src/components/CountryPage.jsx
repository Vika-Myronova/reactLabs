import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import CountryDetails from "./CountryDetails";
import Quiz from "./Quiz";
import PhrasesList from "./PhrasesList";
import TraditionsList from "./TraditionsList";
import VirtualTable from "./VirtualTable";
import "./CountryPage.css";
import { useTheme, ThemeProvider } from "@/context/ThemeContext";

const CountryPage = ({ country }) => {
  const { theme, toggleTheme } = useTheme();
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
        {country.phrases?.length > 0 && (
          <div className="phrases-section">
            <PhrasesList phrases={country.phrases} />
          </div>
        )}
        {country.traditions?.length > 0 && (
          <div className="traditions-section">
            <TraditionsList traditions={country.traditions} />
          </div>
        )}
        {country.moreDetails && (
          <div className="details-section">
            <h2>Country Details</h2>
            <VirtualTable details={country.moreDetails[0]} />
          </div>
        )}
      </section>
      <section className="quiz-section">
        <h2>Test Your Knowledge</h2>
        {country.quizQuestions?.length > 0 ? (
          <Quiz questions={country.quizQuestions} />
        ) : null}
      </section>
    </div>
  );
};

export default CountryPage;
