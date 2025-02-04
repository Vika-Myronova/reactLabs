import React, { useEffect, useRef } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { useCountryStore } from "@/store/countryStore";
import CountryCard from "./CountryCard";

const CountryList = () => {
  const searchInputRef = useRef(null);

  const { filteredCountries, searchTerm, setSearchTerm, fetchCountries } =
    useCountryStore();

  useEffect(() => {
    searchInputRef.current?.focus();
    fetchCountries();
  }, []);

  const cardWidth = 400;
  const cardHeight = 300;
  const columns = 3;
  const columnWidth = (cardWidth * columns) / 2;

  const renderCell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * columns + columnIndex;
    if (index >= filteredCountries.length) return null;
    const country = filteredCountries[index];

    return (
      <div style={style} className="country-card-container">
        <Link href={ROUTES.COUNTRY(country.id)} passHref>
          <CountryCard key={country.id} country={country} />
        </Link>
      </div>
    );
  };

  return (
    <div className="country-list-container">
      <input
        ref={searchInputRef}
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search countries"
        className="search-input"
      />
      <div className="country-list">
        <Grid
          columnCount={columns}
          columnWidth={columnWidth}
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
