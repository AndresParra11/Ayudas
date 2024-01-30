import PropTypes from "prop-types";

const InfoPerson = ({ name, number }) => {
  return (
    <p key={name}>
      {name} {number}
    </p>
  );
};

InfoPerson.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default InfoPerson;
