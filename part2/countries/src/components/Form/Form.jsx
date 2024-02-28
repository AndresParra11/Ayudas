import PropTypes from "prop-types";

const Form = ({ country, handleChangeCountry }) => {
  return (
    <form>
      <label>find countries </label>
      <input value={country} onChange={handleChangeCountry} />
    </form>
  );
};

Form.propTypes = {
  country: PropTypes.string.isRequired,
  handleChangeCountry: PropTypes.func.isRequired,
};

export default Form;
