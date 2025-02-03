import { create } from "zustand";

export const useCountryStore = create((set, get) => ({
  countries: [],
  filteredCountries: [],
  searchTerm: "",

  fetchCountries: async () => {
    try {
      const response = await fetch("/data/countries.json");
      const data = await response.json();
      set({ countries: data, filteredCountries: data });
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  },

  setSearchTerm: (term) => {
    const { countries } = get();
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(term.toLowerCase())
    );
    set({ searchTerm: term, filteredCountries: filtered });
  },
}));
