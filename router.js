const { Router } = require("express");
const Movie = require("./model");

const router = new Router();

router.get("/movies", (req, res, next) => {
  Movie.findAll()
    .then(movies => res.send(movies))
    .catch(err => next(err));
});

router.post("/movies", (req, res, next) => {
  Movie.create(req.body)
    .then(movie => res.json(movie))
    .catch(err => next(err));
});

router.get("/movies/:movieId", (req, res, next) => {
  Movie.findByPk(req.params.movieId)
    .then(movie => {
      if (!movie) {
        res.status(404).end();
      } else {
        res.json(movie);
      }
    })
    .catch(err => next(err));
});

router.put("/movies/:movieId", (req, res, next) => {
  Movie.findByPk(req.params.movieId)
    .then(movie => {
      if (movie) {
        movie.update(req.body).then(movie => res.json(movie));
      } else {
        res.status(404).end();
      }
    })
    .catch(err => next(err));
});

router.delete("/movies/:movieId", (req, res, next) => {
  Movie.findByPk(req.params.movieId)
    .then(movie => {
      if (movie) {
        movie
          .destroy(req.params.movieId)
          .then(
            res.send(` ${req.params.movieId} - movie with this ID is deleted`)
          );
      } else {
        res.status(404).end();
      }
    })
    .catch(err => next(err));
});

module.exports = router;
