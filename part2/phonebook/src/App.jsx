import { useEffect, useState } from "react";
import Numbers from "./components/Numbers/Numbers";
import PersonForm from "./components/PersonForm/PersonForm";
import Filter from "./components/Filter/Filter";
import getPersons from "./services/getPersons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    getAllPersons();
  }, []);

  const getAllPersons = async () => {
    try {
      const data = await getPersons("persons");
      setPersons(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameExists = persons.some((person) => person.name === newName);

    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
      return;
    } else if (!newName || !newPhone) {
      alert("Please fill in all fields");
    } else {
      setPersons([...persons, { name: newName, phone: newPhone }]);
      setNewName("");
      setNewPhone("");
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  };

  const handleFilterNameChange = (event) => {
    setFilterName(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        handleFilterNameChange={handleFilterNameChange}
        filterName={filterName}
      />
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        handleNameChange={handleNameChange}
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}
      />
      <Numbers persons={filteredPersons ? filteredPersons : persons} />
    </div>
  );
};

export default App;
