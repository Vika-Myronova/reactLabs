import AddCountryForm from "@/components/AddCountyForm";
import { ROUTES } from "@/constants/routes";
import { useRouter } from "next/router";

export default function AddCountry() {
  const router = useRouter();

  const handleAddCountry = (newCountry) => {
    console.log(newCountry);
    router.push(ROUTES.HOME);
  };
  return <AddCountryForm onSubmit={handleAddCountry} />;
}
