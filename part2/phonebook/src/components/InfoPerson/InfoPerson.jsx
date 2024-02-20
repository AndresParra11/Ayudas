import PropTypes from "prop-types";
import "./InfoPerson.css";

const InfoPerson = ({ name, number, deletePerson }) => {
  return (
    <div className="person">
      <p key={name}>
        {name} {number}
      </p>
      <button onClick={deletePerson}>delete</button>
    </div>
  );
};

InfoPerson.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deletePerson: PropTypes.func.isRequired,
};

export default InfoPerson;
