import PropTypes from "prop-types";
import InfoPerson from "../InfoPerson/InfoPerson";

const Numbers = ({ persons }) => {
  return (
    <>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <InfoPerson
          key={person.name}
          name={person.name}
          number={person.number}
        />
      ))}
    </>
  );
};

Numbers.propTypes = {
  persons: PropTypes.array.isRequired,
};

export default Numbers;
