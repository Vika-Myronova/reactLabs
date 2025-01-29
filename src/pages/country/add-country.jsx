import AddCountryForm from "@/components/AddCountyForm";

export default function AddCountry() {
  const handleAddCountry = (newCountry) => {
    console.log(newCountry);
  };
  return <AddCountryForm onSubmit={handleAddCountry} />;
}
