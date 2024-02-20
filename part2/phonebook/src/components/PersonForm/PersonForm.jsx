import PropTypes from "prop-types";
import "./PersonForm.css";

const PersonForm = ({
  handleSubmit,
  newName,
  handleNameChange,
  newPhone,
  handlePhoneChange,
}) => {
  return (
    <form onSubmit={handleSubmit} className="personForm">
      <h2>add a new</h2>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newPhone} onChange={handlePhoneChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

PersonForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  newName: PropTypes.string.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  newPhone: PropTypes.string.isRequired,
  handlePhoneChange: PropTypes.func.isRequired,
};

export default PersonForm;
