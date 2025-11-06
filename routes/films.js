const filmsController = require("../controllers/films.controller");
const router = require('express').Router();

//GET http://localhost:3000/api/film/:title 
router.get("/:title", filmsController.getFilms );


//[POST] http://localhost:3000/api/film/ 
router.post("/", filmsController.createFilms );

//[PUT] http://localhost:3000/api/film/ 
router.put("/", filmsController.editFilms);

//[DELETE] http://localhost:3000/api/film/ 
router.delete("/", filmsController.deleteFilms);

module.exports = router;