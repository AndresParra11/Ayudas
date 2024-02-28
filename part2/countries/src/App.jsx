import { useEffect, useState } from "react";
import countries from "./services/countries";
import Form from "./components/Form/Form";
import Flag from "./components/Flag/Flag";
import CountryShow from "./components/CountryShow/CountryShow";
import Weather from "./components/Weather/Weather";

function App() {
  const [country, setCountry] = useState("");
  const [countriesApi, setCountriesApi] = useState(null);
  const [countriesShow, setCountriesShow] = useState(null);

  useEffect(() => {
    getAllCountries();
  }, []);

  useEffect(() => {
    if (countriesApi) {
      const filteredCountries = countriesApi?.filter((item) =>
        item.name.common.toLowerCase().includes(country.toLowerCase())
      );
      setCountriesShow(filteredCountries);
    }
  }, [country, countriesApi]);

  const getAllCountries = async () => {
    try {
      const data = await countries.getAll();
      setCountriesApi(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  if (!countriesApi) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Form country={country} handleChangeCountry={handleChangeCountry} />
      {countriesShow?.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : countriesShow?.length > 1 && countriesShow?.length < 10 ? (
        countriesShow?.map((c, index) => {
          return (
            <p key={index}>
              {c.name.common}
              <button onClick={() => setCountriesShow([c])}>show</button>
            </p>
          );
        })
      ) : countriesShow?.length === 1 ? (
        <>
          <CountryShow countriesShow={countriesShow} />
          <Flag countriesShow={countriesShow} />
          <Weather countriesShow={countriesShow} />
        </>
      ) : (
        <p>No country was found.</p>
      )}
    </>
  );
}

export default App;
