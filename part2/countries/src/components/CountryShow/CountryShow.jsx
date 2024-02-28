import PropTypes from "prop-types";

const CountryShow = ({ countriesShow }) => {
  return (
    <>
      <h1>{countriesShow[0].name.common}</h1>
      <p>capital {countriesShow[0].capital}</p>
      <p>area {countriesShow[0].area}</p>
      <h3>languages:</h3>
      <ul>
        {Object.values(countriesShow[0].languages).map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
    </>
  );
};

CountryShow.propTypes = {
  countriesShow: PropTypes.array.isRequired,
};

export default CountryShow;
