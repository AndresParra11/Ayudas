import personsApi from "../api/personsApi";

const getAll = async (endpoint) => {
  try {
    const response = await personsApi.get(`/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const create = async (endpoint, newPerson) => {
  try {
    const response = await personsApi.post(`/${endpoint}`, newPerson);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const deletePerson = async (endpoint, id) => {
  try {
    await personsApi.delete(`/${endpoint}/${id}`);
  } catch (error) {
    console.error(error);
  }
};

const update = async (endpoint, id, personChange) => {
  try {
    const response = await personsApi.put(`/${endpoint}/${id}`, personChange);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default { getAll, create, deletePerson, update };
