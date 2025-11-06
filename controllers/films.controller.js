const fetchFilms = require("../utils/fetchFilms");

// READ
const getFilms = async (req, res) => {
  try {
    const title = req.params.title;
    if (!title) {
      return res.status(400).json({ message: "Falta el título" });
    }
    const film = await fetchFilms(title);
    // Si no existe la película, devolvemos 404
    if (!film) {
      return res.status(404).json({ message: "Film not found" });
    }
    // Devolver la película tal como viene
    return res.status(200).json(film);
  } catch (error) {
    console.error("ERROR:", error);
    // Errores inesperados
    return res.status(500).json({ message: "Error" });
  }
};

// CREATE
const createFilms = async (req, res) => {
    console.log(req.body);

    try{
        const film = req.body;
        // let answer = await fetchFilms.postFilms(data);
        res.status(200).json({ message: `Se ha guardado ${film.Title}` });

    }catch (error) {
        res.status(500).json({ message: "Error al guardar la película" });
    }
}

// // UPATE // PUT
const editFilms = (req, res) => {
  const { id } = req.params;
  const { Title } = req.body;
  res.status(200).json({ id, message: `Se ha actualizado ${Title}` });
};

// // DELETE
const deleteFilms = (req, res) => {
  const { id } = req.body;
  res.status(200).json({ id, message: `Se ha borrado la película con ID: ${id}` });
};

module.exports = {
  createFilms,
  getFilms,
  editFilms,
  deleteFilms
}