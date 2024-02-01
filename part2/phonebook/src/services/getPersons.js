import personsApi from "../api/personsApi";

const getPersons = async (endpoint) => {
  try {
    const response = await personsApi.get(`/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getPersons;
