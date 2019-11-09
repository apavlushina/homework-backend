const { Router } = require("express");
const Movie = require("./model");

const router = new Router();

router.get("/movies", (req, res, next) => {
  Movie.findAll()
    .then(movies => res.send(movies))
    .catch(err => next(err));
});

// router.post("/image", auth, (req, res, next) => {
//   Image.create(req.body)
//     .then(console.log(req.body))
//     .then(image => res.json(image))
//     .catch(err => next(err));
// });

module.exports = router;
