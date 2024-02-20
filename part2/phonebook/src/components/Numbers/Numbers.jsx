import PropTypes from "prop-types";
import InfoPerson from "../InfoPerson/InfoPerson";

const Numbers = ({ persons, deletePerson }) => {
  return (
    <>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <InfoPerson
          key={person.id}
          name={person.name}
          number={person.number}
          deletePerson={() => deletePerson(person.id)}
        />
      ))}
    </>
  );
};

Numbers.propTypes = {
  persons: PropTypes.array.isRequired,
  deletePerson: PropTypes.func.isRequired,
};

export default Numbers;
