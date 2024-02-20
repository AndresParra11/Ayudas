import PropTypes from "prop-types";

const Filter = ({ filterName, handleFilterNameChange }) => {
  return (
    <div>
      filter shown with:{" "}
      <input value={filterName} onChange={handleFilterNameChange} />
    </div>
  );
};

Filter.propTypes = {
  filterName: PropTypes.string.isRequired,
  handleFilterNameChange: PropTypes.func.isRequired,
};

export default Filter;
