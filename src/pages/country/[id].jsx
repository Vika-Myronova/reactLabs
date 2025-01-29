import { useRouter } from "next/router";
import CountryPage from "@/components/CountryPage";
import { use } from "react";
import countriesData from "/public/data/countries.json";
import { ThemeProvider } from "@/context/ThemeContext";

export default function Country() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <p>Loading...</p>;

  const country = countriesData.find((c) => String(c.id) === id);
  if (!country) return <p>Country not found</p>;

  return (
    <ThemeProvider>
      <CountryPage country={country} />
    </ThemeProvider>
  );
}
