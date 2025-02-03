import { useRouter } from "next/router";
import { useCountryStore } from "@/store/countryStore";
import countriesData from "/public/data/countries.json";
import { useEffect } from "react";
import CountryPage from "@/components/CountryPage";

export default function Country() {
  const router = useRouter();
  const { id } = router.query;
  const { setSelectedCountry } = useCountryStore();

  useEffect(() => {
    if (id) {
      const country = countriesData.find((c) => String(c.id) === id);
      if (country) {
        setSelectedCountry(country);
      }
    }
  }, [id, setSelectedCountry]);

  if (!id) return <p>Loading...</p>;

  return <CountryPage />;
}
