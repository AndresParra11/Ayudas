import notesApi from "../api/notesApi";

const getAll = async (endpoint) => {
  try {
    const response = await notesApi.get(`/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const create = async (endpoint, note) => {
  try {
    const response = await notesApi.post(`/${endpoint}`, note);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const update = async (id, changeNote) => {
  try {
    const response = await notesApi.put(
      //Put cambia todo el recurso, patch solo cambia lo que se le pide.
      `http://localhost:3001/notes/${id}`,
      changeNote
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default { getAll, create, update };
