import { create } from "zustand";

export const useCountryStore = create((set, get) => ({
  countries: [],
  filteredCountries: [],
  searchTerm: "",
  selectedCountry: null,
  fetchCountries: async () => {
    try {
      const response = await fetch("/data/countries.json");
      const data = await response.json();
      set({ countries: data, filteredCountries: data });
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  },

  updateSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterCountries();
  },

  filterCountries: () => {
    const { countries, searchTerm } = get();
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredCountries: filtered });
  },
  setSelectedCountry: (country) => {
    set({ selectedCountry: country });
  },
}));
