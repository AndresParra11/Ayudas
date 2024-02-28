import countries from "../api/countriesApi";

const getAll = async () => {
  try {
    const response = await countries.get(`/api/all`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default { getAll };
