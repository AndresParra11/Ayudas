import PropTypes from "prop-types";
import "./Flag.scss";

const Flag = ({ countriesShow }) => {
  return (
    <figure className="flag">
      <img
        src={countriesShow[0].flags.svg}
        alt={countriesShow[0].name.common}
      />
    </figure>
  );
};

Flag.propTypes = {
  countriesShow: PropTypes.array.isRequired,
};

export default Flag;
