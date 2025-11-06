require('dotenv').config(); // para leer la API_KEY del .env

// utils/fetchFilms.js
require('dotenv').config();

const fetchFilm = async (title = "") => {
  const apiKey = process.env.API_KEY;
  const response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${apiKey}`);
  const film = await response.json();

  // Si no existe la película, devolver null (los tests lo piden así)
  if (film.Response === "False") {
    return null;
  }

  return film; // objeto con Title, Year, etc.
};

module.exports = fetchFilm;
