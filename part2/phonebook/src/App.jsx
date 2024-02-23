import { useEffect, useState } from "react";
import Numbers from "./components/Numbers/Numbers";
import PersonForm from "./components/PersonForm/PersonForm";
import Filter from "./components/Filter/Filter";
import phoneBook from "./services/phoneBook";
import Notification from "./components/Notification/Notification";

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
  const [message, setMessage] = useState("");

  useEffect(() => {
    getAllPersons();
  }, []);

  const getAllPersons = async () => {
    try {
      const data = await phoneBook.getAll("persons");
      setPersons(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdatePerson = async (id, personChange) => {
    try {
      const data = await phoneBook.update("persons", id, personChange);
      setPersons(
        persons.map((person) => (person.id !== data.id ? person : data))
      );

      setMessage(`'${data.name}' has been changed in the server`);
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    } catch (error) {
      setMessage(
        `Information of ${personChange.name} has already been removed from server`
      );
      setTimeout(() => {
        setMessage(null);
      }, 3000);
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nameExists = persons.some((person) => person.name === newName);

    if (nameExists) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const person = persons.find((person) => person.name === newName);
        const personChange = { ...person, number: newPhone };
        await handleUpdatePerson(person.id, personChange);
        return;
      }
    } else if (!newName || !newPhone) {
      alert("Please fill in all fields");
    } else {
      const newPerson = {
        name: newName,
        number: newPhone,
      };

      try {
        const data = await phoneBook.create("persons", newPerson);
        setPersons([...persons, data]);
        setNewName("");
        setNewPhone("");
        setMessage(`'${newPerson.name}' has added to server`);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleDeletePerson = async (id) => {
    if (window.confirm("¿Seguro que deseas eliminar esta persona?")) {
      try {
        await phoneBook.deletePerson("persons", id); // Suponiendo que tengas un método delete en tu servicio phoneBook
        setPersons(persons.filter((person) => person.id !== id));
      } catch (error) {
        console.error(error);
      }
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
      <Notification message={message} />
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
      <Numbers
        persons={filteredPersons ? filteredPersons : persons}
        deletePerson={handleDeletePerson}
      />
    </div>
  );
};

export default App;
