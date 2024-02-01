import axios from "axios";

const personsApi = axios.create({
  baseURL: "http://localhost:3001",
});

export default personsApi;
