const Router = require("express").Router();
const { CheckISRC } = require("../middlewares/TrackMiddleware");
const bodyParser = require("body-parser");
// const urlencodedParser = bodyParser.urlencoded({ extended: true });

module.exports = (sequelize) => {
  const { CreateTrack } = require("../controllers/TrackController")(sequelize);

  Router.post("/add", CheckISRC, CreateTrack);

  return Router;
};
