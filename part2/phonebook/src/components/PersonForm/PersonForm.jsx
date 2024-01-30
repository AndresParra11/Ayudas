import PropTypes from "prop-types";

const PersonForm = ({
  handleSubmit,
  newName,
  handleNameChange,
  newPhone,
  handlePhoneChange,
}) => {
  return (
    <form onSubmit={handleSubmit}>
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
