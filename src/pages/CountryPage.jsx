import React from "react";
import CountryDetails from "../components/CountryDetails";
import Quiz from "../components/Quiz";
import PhrasesList from "../components/PhrasesList";
import TraditionsList from "../components/TraditionsList";
import VirtualTable from "../components/VirtualTable";
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
    <ThemeProvider>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {theme === "light" ? "Темна Тема" : "Світла Тема"}
      </button>
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
    </ThemeProvider>
  );
};

export default CountryPage;
