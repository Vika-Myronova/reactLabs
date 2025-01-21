import React, { useState, useRef, useEffect } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import useFilteredCountries from "../hooks/useFilteredCountries";
import CountryCard from "./CountryCard";

const CountryList = ({ onSelectCountry }) => {
  const { filteredCountries, searchTerm, setSearchTerm } = useFilteredCountries(
    "/data/countries.json"
  );

  const cardWidth = 400;
  const cardHeight = 300;
  const columns = 3;

  const renderCell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * columns + columnIndex;
    if (index >= filteredCountries.length) return null;
    const country = filteredCountries[index];
    return (
      <div style={style} className="country-card-container">
        <CountryCard
          key={country.id}
          country={country}
          onSelect={() => onSelectCountry(country)}
        />
      </div>
    );
  };

  return (
    <div className="country-list-container">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search countries"
        className="search-input"
      />
      <div className="country-list">
        <Grid
          columnCount={columns}
          columnWidth={cardWidth * 1.5}
          height={500}
          rowCount={Math.ceil(filteredCountries.length / columns)}
          rowHeight={cardHeight}
          width={cardWidth * columns * 1.8}
        >
          {renderCell}
        </Grid>
      </div>
    </div>
  );
};

export default CountryList;
