import weathers from "../api/weatherApi";

const API_KEY = import.meta.env.VITE_WEATHER_KEY_API;

const getWeatherData = async (cityName) => {
  try {
    const response = await weathers.get("", {
      params: {
        q: cityName,
        appid: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error al obtener datos meteorológicos:", error);
    return null;
  }
};

export default { getWeatherData };
