import axios from "axios";

const countries = axios.create({
  baseURL: "https://studies.cs.helsinki.fi/restcountries",
});

export default countries;
