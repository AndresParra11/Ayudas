import axios from "axios";

const notesApi = axios.create({
  baseURL: "http://localhost:3001",
});

export default notesApi;
