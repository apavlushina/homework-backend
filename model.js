const Sequelize = require("sequelize");
const db = require("./db");

const Movie = db.define("movie", {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  yearOfRelease: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  synopsis: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Movie.sync()
  .then(function() {
    // Table created
    Movie.create({
      title: "Blade Runner 2049",
      yearOfRelease: "2017",
      synopsis:
        "Officer K, a new blade runner, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. His discovery leads him on a quest to a former blade runner who's been missing for 30 years."
    });
  })
  .then(function() {
    Movie.create({
      title: "Kingsman: The Golden Circle",
      yearOfRelease: "2017",
      synopsis:
        "“Kingsman: The Secret Service” introduced the world to Kingsman - an independent, international intelligence agency operating at the highest level of discretion, whose ultimate goal is to keep the world safe."
    });
  })
  .then(function() {
    Movie.create({
      title: "Tulip Fever",
      yearOfRelease: "2017",
      synopsis:
        "The young wife of a wealthy older burgher in 17th century Amsterdam is tempted into adultery when an artist. The lovers hatch a scheme together to fund an escape by investing in tulip bulbs at the height of the craze. "
    });
  });

module.exports = Movie;
