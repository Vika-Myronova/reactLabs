import AddCountryForm from "@/components/AddCountyForm";
import { useRouter } from "next/router";

export default function AddCountry() {
  const router = useRouter();

  const handleAddCountry = (newCountry) => {
    console.log(newCountry);
    router.push("/");
  };
  return <AddCountryForm onSubmit={handleAddCountry} />;
}
